-- local myEditbox
-- -- local myEditbox2 = EditboxClass(200, 300, 250, 70, 'Senha', 100, 1.5, 'default', false)


-- local function render () 
--   myEditbox:render(1)
-- end

-- local function click(button, state, abx, aby)
--     myEditbox:click(button, state, abx, aby)
-- end

-- local function key(key, press)
--     myEditbox:key(key, press)
-- end

-- local function char(char)
--   myEditbox:char(char)
-- end

-- toggle = {
--   ['show'] = function () 
--     myEditbox = EditboxClass(200, 200, 250, 70, 'Usuário', 50, 1.5, 'default', false)
--     myEditbox:setProperty('dotVisible', false)
    
--     addEventHandler('onClientRender', root, render)
--     addEventHandler('onClientClick', root, click)
--     addEventHandler('onClientKey', root, key)
--     addEventHandler('onClientCharacter', root, char)
--   end,
--   ['hide'] = function () 
--     myEditbox:freeMemory()
--     removeEventHandler('onClientRender', root, render)
--     removeEventHandler('onClientClick', root, click)
--     removeEventHandler('onClientKey', root, key)
--     removeEventHandler('onClientCharacter', root, char)
--   end
-- }

-- local state = true
-- bindKey("k", "down", function () 
--   if state then
--     toggle.show()
--   else
--     toggle.hide()
--   end

--   state = not state
-- end)