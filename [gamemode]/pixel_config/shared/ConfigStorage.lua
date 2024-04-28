ConfigStorage = {}
local defsPath = "player_defs"
local store = {}


local function loadFile(path)
	if type(path) ~= "string" then
		return false
	end

	if not fileExists(path) then
		return false
	end

	local file = fileOpen(path)
	if not file then
		return false
	end

	local data = fileRead(file, fileGetSize(file))
	fileClose(file)

	return data
end


local function saveFile(path, data)
	if type(path) ~= "string" then
		return false
	end

	if fileExists(path) then
	  fileDelete(path)
	end

	local file = fileCreate(path)
	fileWrite(file, data)
	fileClose(file)

	return true
end

function ConfigStorage.init(path)
	if type(path) ~= "string" then
		return false
	end
	defsPath = "@" .. path
	local json = loadFile(defsPath)
	if json then
		store = fromJSON(json)
		if not store then
			store = {}
		end
	end
	ConfigStorage.save()
	return true
end

function ConfigStorage.save()
	local json = toJSON(store)
	saveFile(defsPath, json)
end

function ConfigStorage.set(key, value)
	if type(key) ~= "string" then
		return false
	end

	store[key] = value
	ConfigStorage.save()

	return true
end

function ConfigStorage.setDefault(key, value)
	if type(key) ~= "string" then
		return false
	end
	if store[key] == nil then
		store[key] = value
	end
	return true
end

function ConfigStorage.get(key)
	if type(key) ~= "string" then
		return false
	end
	return store[key]
end