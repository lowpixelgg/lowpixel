
-- Screen resolution
screenWidth, screenHeight = guiGetScreenSize()

-- [Settingsvariables]
-- Colors
bgcolor 		= tocolor(0, 0, 0, 200)			-- Debugchat background color
bgcolor 		= tocolor(30, 30, 30, 200)		-- Debugchat background color
title_color 	= tocolor(255, 255, 255)		-- Window title color
title_bgcolor	= tocolor(150, 150, 150, 200)	-- Window title background color
tab_bgcolor 	= tocolor(0, 0, 0, 100)			-- Inactive tab background color
-- Content
linecount = 15
lineheight = dxGetFontHeight(1.00, "default-bold") + 2
-- Size
width, height = screenWidth * 0.90, lineheight * linecount + 20

-- Position and Moving
x, y = (screenWidth - width) / 2, screenHeight - height - 20

-- [Scriptvariables]
tabnames = { }
tabdata = { }
visible = true
white = tocolor(255, 255, 255)
red = tocolor(255, 0, 0)
black = tocolor(0, 0, 0)
active = false
hover = false
close_hover = false
moving = false
mx, my = 0, 0
protected = {["info"] = true, ["warning"] = true, ["error"] = true}
draganddrop_scrolling = false
scrollbar_offset = 0

function onClientRender()
	-- If we have nothing to show, then abort here
	if (not visible) then
		return
	end

	-- Cache the position, to alter it when we move the window
	local x, y = x, y

	-- Adjust the position, if we are moving the window
	if (moving) then
		if (not (isCursorShowing() or isChatBoxInputActive() or isConsoleActive()) or isMainMenuActive()) then
			moving = false
			mx, my = 0, 0
		else
			x = x - mx
			y = y - my
		end
	end

	-- Draw the title background
	dxDrawRectangle(x, y, 20, height, title_bgcolor, true)

	-- Draw the content background
	dxDrawRectangle(x + 20, y + 20, width - 30, height - 20, bgcolor, true)

	-- Draw title
	dxDrawText("Debug Console", x + 3, y + 1, x + height + 3, y + height + 1, black, 1.0, "default-bold", "center", "top", true, false, true, false, true, 270)
	dxDrawText("Debug Console", x + 2, y, x + height + 2, y + height, title_color, 1.0, "default-bold", "center", "top", true, false, true, false, true, 270)

	-- Draw move icon
	dxDrawImage(x + 2, y + 2, 16, 16, "images/move_icon.png", 0, 0, 0, black, true)

	-- Left tab indent
	local w = x + 20

	-- Draw tabs
	for i, tab in pairs(tabnames) do
		-- Get the tab name
		local name = tab.friendlyname

		-- Get the tab information
		local data = tabdata[tab.name]

		-- Only render visible tabs
		if (data.visible) then
			-- Add the unseen counter, if the tab is not active
			if (active ~= tab.name) then
				name = name .. " (" .. tostring(data.unseen) .. ")"
			end

			-- Get the actual tab name width
			local font_width = dxGetTextWidth(name, 1.0, "default-bold")
			local padding = (active == tab.name) and 20 or 0
			local margin = (active == tab.name and not protected[active]) and 20 or 0
			local width = font_width + padding + margin
			
			-- Draw tab background
			dxDrawRectangle(w, y, width, 20, (active == tab.name) and bgcolor or tab_bgcolor, true)
			
			-- Draw tab text
			if (active == tab.name) then
				-- Draw the tab name
				dxDrawText(name, w + 1, y + 1, w + (font_width + padding) + 1, y + 21, black, 1.0, "default-bold", "center", "center", true, false, true, false, true)
				dxDrawText(name, w, y, w + (font_width + padding), y + 20, tab.color, 1.0, "default-bold", "center", "center", true, false, true, false, true)
				
				-- Draw the close 'X' text
				if (not protected[name]) then
					dxDrawText("[X]", w + width - margin, y, w + width, y + 20, (close_hover) and red or white, 0.75, "clear", "center", "center", true, false, true, false, true)
				end

				-- Draw tab pause/running icon
				if (data.index) then
					dxDrawImage(x + 2, y + 2 + 20, 16, 16, "images/continue_icon.png", 0, 0, 0, black, true)
				else
					dxDrawImage(x + 2, y + 2 + 20, 16, 16, "images/pause_icon.png", 0, 0, 0, black, true)
				end
			else
				-- Draw the tab name
				dxDrawText(name, w, y + 1, w + width, y + 21, black, 0.80, "default-bold", "center", "center", true, false, true, false, true)
				dxDrawText(name, w, y, w + width, y + 20, tab.color, 0.80, "default-bold", "center", "center", true, false, true, false, true)
			end
			
			-- Add the tab width to the x position
			w = w + width
		end
	end

	-- Get the active tab information
	local data = tabdata[active]

	-- Check the data before continueing
	if (type(data) ~= "table") then
		return
	end

	-- Only show the scrollbar if neccessary
	if (type(data.index) == "number" and (data.count - linecount) > 0) then
		-- Calculate how much we show from the actual count
		local visiblefactor = math.min(linecount / data.count, 1.0)

		-- Make sure we have a minimum factor
		visiblefactor = math.max(visiblefactor, 0.05)

		-- Calculate the bar height
		local barheight = (height - 20) * visiblefactor

		-- Calculate the position
		local position = math.min(data.index / data.count, 1.0 - visiblefactor) * (height - 20)

		-- Draw the scrollbar background
		dxDrawRectangle(x + width - 10, y + 20, 10, height - 20, title_bgcolor, true)

		-- Draw the scrollbar
		dxDrawRectangle(x + width - 10, y + 20 + position, 10, barheight, white, true)
	end

	-- Keep the log empty when we move the window
	if (moving) then
		return
	end

	-- Position from top
	local h = y + 20

	-- Draw lines
	if (active and tabdata[active]) then
		-- Start from a specific index or at the end
		local from = math.max(0, (data.index or (data.count - linecount)))

		-- Draw each line
		for i = 1, (linecount) do
			-- Calculate the index
			local index = from + i

			-- Abort if the line does not exist
			if (not data.messages[index]) then
				break
			end

			-- Get the message information
			local message = data.messages[index]

			-- Color
			local color = (hover and hover == i) and data.color or white

			-- Draw the message source
			dxDrawText(message.from, x + 25, h, x + 25 + 45, h + lineheight, data.color, 1.0, "default-bold", "left", "center", true, false, true, false, true)
			
			-- Draw the message timestamp
			dxDrawText(message.stamp, x + 25 + 45, h, x + 25 + 110, h + lineheight, color, 1.0, "default-bold", "left", "center", true, false, true, false, true)
			
			-- Draw the actual text
			dxDrawText(message.text, x + 25 + 110, h, x + width - 15 - 20, h + lineheight, color, 1.0, "default-bold", "left", "center", true, false, true, false, true)

			-- Increase the top position
			h = h + lineheight
		end
	end
end

function onClientDebugMessage(message, level, file, line, from)
	-- Default value for 'from'
	if (not from) then
		from = "Client"
	end

	-- Get the correct tab from the level
	local tab = {"error", "warning"}

	-- Show the source, if it's not the info tab
	if (level ~= 3) then
		outputDebugTab(tab[level], ("%s @ line %d: %s"):format(file or "unknown file", line or "?", message), from)
	else
		outputDebugTab("info", message, from)
	end
end

function onDebugMessage(message, level, file, line)
	-- Route the message through our other callback
	onClientDebugMessage(message, level, file, line, "Server")
end

function onClientCursorMove(_, _, cursorX ,cursorY)
	-- Apply the position if we are moving the window
	if (moving) then
		x = cursorX
		y = cursorY

		return
	end

	-- Reset hover
	hover = false
	close_hover = false

	-- Abort if we do not show the mouse (e.g. main menu)
	if (not (isCursorShowing() or isChatBoxInputActive() or isConsoleActive()) or isMainMenuActive()) then
		return
	end

	--[moving Scrollbar]
	if (draganddrop_scrolling) then
		-- Get the active tab information
		local data = tabdata[active]

		-- Check the data before continueing
		if (type(data) ~= "table") then
			return
		end

		-- Calculate how much we show from the actual count
		local visiblefactor = math.min(linecount / data.count, 1.0)

		-- Make sure we have a minimum factor
		visiblefactor = math.max(visiblefactor, 0.05)

		-- Calculate the bar height
		local barheight = (height - 20) * visiblefactor

		-- Calculate the index
		data.index = math.floor(math.min(1, math.max(0, cursorY - (y + 20 + (barheight * scrollbar_offset))) / (height - 20)) * data.count)

		-- Fix to never show empty lines at the bottom
		data.index = math.min(data.index, math.max(0, data.count - linecount))

		return
	end

	--[on Tabs]
	if (cursorY >= y and cursorY <= (y + 20)) then
		if ((cursorX - x) > 20 and cursorX <= (x + width)) then
			-- Abort if it's not neccessary
			if (not active or protected[active]) then
				return
			end

			-- Left position (for tab search)
			local w = x + 20

			-- Loop through each tab
			for i, tab in pairs(tabnames) do
				-- Get the tab name
				local name = tab.friendlyname

				-- Get the tab information
				local data = tabdata[tab.name]

				-- Only mind visible tabs
				if (data.visible) then
					-- Add the unseen counter if it's not the active tab
					if (active ~= tab.name) then
						name = name .. " (" .. tostring(data.unseen) .. ")"
					end

					-- Calculate the tab name width
					local font_width = dxGetTextWidth(name, 1.0, "default-bold")
					local padding = (active == tab.name) and 20 or 0
					local margin = (active == tab.name and not protected[active]) and 20 or 0
					local width = font_width + padding + margin

					-- Only check for the active tab
					if (active == tab.name) then
						-- Check if the cursor..
						-- ..is on the tab
						if (cursorX > w and cursorX <= w + width) then
							-- ..and on the "[x]" text button
							if (cursorX >= (w + width - 20) and cursorX <= (w + width)) then
								close_hover = true
							end

							break
						end
					end

					-- Increase the left position
					w = w + width
				end
			end
		end
	end

	--[on Content]
	if (cursorY > (x + 20) and cursorY <= (y + height)) then
		if ((cursorX - x) > 20 and cursorX < (x + width - 10)) then
			-- Apply the line rownumber
			hover = math.floor((cursorY - y - 20) / lineheight) + 1
		end
	end
end

function onClientKey(button, holding)
	-- Get the current cursor position
	local cursorX, cursorY = getCursorPosition()

	-- Abort if the mouse is not active
	if (not cursorX) then
		return
	end

	-- Cache the position
	local windowX, windowY = x - mx, y - my

	-- Calculate the absolute cursor position
	cursorX, cursorY = cursorX * screenWidth, cursorY * screenHeight

	-- We dropped the scrollbar
	if (button == "mouse1" and draganddrop_scrolling and not holding) then
		-- Disable drag and drop
		draganddrop_scrolling = false

		-- Reset the scrollbar offset
		scrollbar_offset = 0

		-- Get the active tab information
		local data = tabdata[active]

		-- Check the data before continueing
		if (type(data) ~= "table") then
			return
		end

		-- Hide the scrollbar if we reached the end of the log
		if (data.index) then
			if (data.index >= (data.count - linecount)) then
				data.index = false
			end
		end

		return
	end

	-- Abort if the position is outside our debug console
	if (cursorX < windowX or cursorX > (windowX + width)) then
		return
	end
	if (cursorY < windowY or cursorY > (windowY + height)) then
		return
	end

	-- Left mouse click
	if (button ~= "mouse1") then
		-- Nothing to check for that state
		if (not holding) then
			return
		end

		-- Don't continue if we are moving the scrollbar
		if (draganddrop_scrolling) then
			return
		end

		-- Only fetch scrolling on content or scrollbar
		if (cursorX <= windowX + 20 or cursorX > (windowX + width)) then
			return
		end
		if (cursorY <= windowY + 20 or cursorY > windowY + height) then
			return
		end

		-- Get the active tab information
		local data = tabdata[active]

		-- Check the data before continueing
		if (type(data) ~= "table") then
			return
		end

		-- Scrolling Down
		if (button == "mouse_wheel_down") then
			-- Continue if we didn't reach the bottom yet
			if (data.index) then
				-- Increase the index by 2 (scroll step)
				data.index = data.index + 2

				-- Hide the scrollbar if we reached the end
				if (data.index >= (data.count - linecount)) then
					data.index = false
				end
			end

		-- Scrolling Up
		elseif (button == "mouse_wheel_up") then
			-- Do nothing when there less lines the linecount
			if ((data.count - linecount) <= 0) then
				return
			end

			-- If we are not showing any specific index then show the first visible one (on the top)
			if (not data.index) then
				data.index = data.count - linecount
			end

			-- Decrease the index by 2 (scroll step)
			data.index = math.max(0, data.index - 2)
		end

		return
	end

	-- [Title bar]
	if (cursorX - windowX <= 20) then
		-- Get the icon number
		local number = math.max(1, math.ceil((cursorY - windowY) / 20))

		-- Move icon
		if (number == 1) then
			-- Check if...
			-- ...we are already moving the window and released it
			if (moving) then
				-- Stop moving
				moving = false

				-- Fix the window position with the offset
				x = cursorX - mx
				y = cursorY - my

				-- Reset the offset
				mx, my = 0, 0
			-- ...we are trying to move the window
			else
				-- Calculate the offset from window (top/left) to cursor
				mx, my = cursorX - x, cursorY - y

				-- Clip the window to the cursor position
				x = cursorX
				y = cursorY

				-- Start moving
				moving = true
			end
		-- Stop/Start icon
		elseif (number == 2 and holding) then
			-- Abort if we have no active tab or if it has no information
			if (not active or not tabdata[active]) then 
				return
			end

			-- Get the active tab information
			local data = tabdata[active]

			if (data.index) then
				-- Show always the latest lines
				data.index = false
			else
				-- Fix the lines at the current position
				data.index = data.count - linecount
			end
		end

		return
	end

	-- [Tab bar]
	if ((cursorY - windowY) <= 20) then
		-- Ignore if we are holding the click
		if (holding) then
			return
		end

		-- Left position (for tab search)
		local w = windowX + 20

		-- Loop through each tab
		for i, tab in pairs(tabnames) do
			-- Get the tab name
			local name = tab.friendlyname

			-- Get the tab information
			local data = tabdata[tab.name]

			-- Only mind visible tabs
			if (data.visible) then
				-- Add the unseen counter if it's not the active tab
				if (data and active ~= tab.name) then
					name = name .. " (" .. tostring(data.unseen) .. ")"
				end

				-- Calculate the tab name width
				local font_width = dxGetTextWidth(name, 1.0, "default-bold")
				local padding = (active == tab.name) and 20 or 0
				local margin = (active == tab.name and not protected[active]) and 20 or 0
				local width = font_width + padding + margin

				-- Check if the cursor..
				-- ..is on the tab
				if (cursorX > w and cursorX <= w + width) then
					-- Check if we hit the text-closebutton
					if (close_hover) then
						-- Hide the tab
						toggleDebugTab(tab.name, false)

						-- Fix the hover state (clicking one more time would close the next tab)
						close_hover = false
					else
						-- Switch to the clicked tab
						active = tab.name

						-- Reset the unseen counter
						data.unseen = 0
					end
					break
				-- ..is not on the tab
				else
					w = w + width
				end
			end
		end

		return
	end

	-- [Scroll bar]
	if ((cursorX - windowX) >= (width - 10)) then
		-- Released the mouse click over the scrollbar (no scrolling active)
		if (not draganddrop_scrolling and not holding) then
			return
		end

		-- Get the active tab information
		local data = tabdata[active]

		-- Check the data before continueing
		if (type(data) ~= "table") then
			return
		end

		-- Check if the scrollbar is visible
		if (type(data.index) == "number" and (data.count - linecount) > 0) then
			-- Calculate how much we show from the actual count
			local visiblefactor = math.min(linecount / data.count, 1.0)

			-- Make sure we have a minimum factor
			visiblefactor = math.max(visiblefactor, 0.05)

			-- Calculate the bar height
			local barheight = (height - 20) * visiblefactor

			-- Calculate the position
			local position = math.min(data.index / data.count, 1.0 - visiblefactor) * (height - 20)

			-- Check if the cursor click happened on the scrollbar
			if (cursorY >= (windowY + 20 + position) and cursorY <= (windowY + 20 + position + barheight)) then
				-- Signalize that we are moving the scrollbar with the mouse
				draganddrop_scrolling = true

				-- Calculate the offset from the mouse to the scrollbar (relative positioning)
				scrollbar_offset = math.min(1, math.max(0, (cursorY - (windowY + 20 + position)) / barheight))
			end
		end

		return
	end

	-- [Content]
	if (not hover or not active or not tabdata[active]) then
		return
	end

	-- Get the tab information
	local data = tabdata[active]

	-- Start from a specific index or at the end
	local from = math.max(1, data.index or (data.count - linecount + 1))

	-- Get the hovered message
	local index = from + hover

	-- Get the message information
	local message = tabdata[active].messages[index]
	if (not message) then
		return
	end

	-- Set the clipboard
	setClipboard(("%s %s %s"):format(message.from, message.stamp, message.text))
end

addEventHandler("onClientResourceStart", resourceRoot,
	function ()
		-- Standard types
		createDebugTab("info", tocolor(100, 180, 255), "INFO")
		createDebugTab("warning", tocolor(255, 175, 100), "WARNING")
		createDebugTab("error", tocolor(255, 80, 80), "ERROR")

		addEvent("onDebugMessage", true)
		addEventHandler("onDebugMessage", resourceRoot, onDebugMessage)
		addEventHandler("onClientRender", root, onClientRender)
		addEventHandler("onClientDebugMessage", root, onClientDebugMessage)
		addEventHandler("onClientCursorMove", root, onClientCursorMove)
		addEventHandler("onClientKey", root, onClientKey)
		triggerServerEvent("onClientStartedLog", resourceRoot)

		bindKey("f3", "up",
			function ()
				showCursor(not isCursorShowing())
			end
		)
	end
)

function outputDebugTab(name, message, from)
	assert(type(name) == "string" and #name > 0)

	if (not tabdata[name]) then
		tabdata[name] = {unseen = 0, count = 0, index = false, messages = {}, color = color, visible = false}
	end
	if (not from or (from ~= "Server" and from ~= "Client")) then
		from = "Client"
	end
	if (active ~= name) then
		tabdata[name].unseen = tabdata[name].unseen + 1
	end
	tabdata[name].count = tabdata[name].count + 1

	local t = getRealTime()
	local stamp = ("[%02d:%02d:%02d]"):format(t.hour, t.minute, t.second)

	table.insert(tabdata[name].messages, {text = message, from = from, stamp = stamp})
end

function clearDebugTab(name)
	assert(type(name) == "string" and #name > 0)

	if (not tabdata[name]) then
		return false, "tab does not exist"
	end

	local backup = tabdata[name].color
	tabdata[name] = {unseen = 0, count = 0, index = false, messages = {}, color = backup}

	return true
end

function toggleDebugTab(name, toggle)
	assert(type(name) == "string" and #name > 0)

	if (not tabdata[name]) then
		return false, "tab does not exist"
	end
	if (protected[name]) then
		return false, "tab is protected"
	end

	tabdata[name].visible = (toggle and true or false)

	if (active == name and not tabdata[name].visible) then
		fixActiveTab()
	end
end

function deleteDebugTab(name)
	assert(type(name) == "string" and #name > 0)

	if (not tabdata[name]) then
		return false, "tab does not exist"
	end
	if (protected[name]) then
		return false, "tab is protected"
	end

	tabdata[name] = nil

	for index, tab in pairs(tabnames) do
		if (tab.name == name) then
			table.remove(tabnames, index)
			fixActiveTab(index)
		end
	end

	return true
end

function createDebugTab(name, color, friendlyname)
	assert(type(name) == "string" and #name > 0)

	if (tabdata[name] and protected[name]) then
		return false
	end

	if (type(color) ~= "number") then
		color = tocolor(255, 255, 255)
	end
	if (not friendlyname) then
		friendlyname = name
	end

	if (not tabdata[name]) then
		tabdata[name] = {unseen = 0, count = 0, index = false, messages = {}, color = color, visible = true}
	else
		tabdata[name].visible = true
		tabdata[name].color = color
	end

	for index, tab in pairs(tabnames) do
		if (tab.name == name) then
			tab.color = color
			tab.friendlyname = friendlyname
			return true
		end
	end

	table.insert(tabnames, {name = name, color = color, friendlyname = friendlyname})

	if (not active) then
		active = "info"
	end

	return true
end

function fixActiveTab(index)
	if (not index and not active) then
		return false
	end

	if (not index) then
		for k, tab in pairs(tabnames) do
			if (tab.name == active) then
				index = k
				break
			end
		end
		if (not index) then
			return
		end
	end

	while (index >= 1) do
		local name = tabnames[index - 1].name
		if (tabdata[name] and tabdata[name].visible) then
			active = name
			break
		else
			index = index - 1
		end
	end
end
