function getString(...)
	success, result = pcall(Language.getString, ...)
	if success then
		return result
	else
		return false
	end
end