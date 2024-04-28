Language = {}
local DEFAULT_LANGUAGE = Locales.languages[4]
local FALLBACK_TO_DEFAULT = true
local currentLanguage


function Language.set(lang)
	if not lang then
		return false
	end
	if not Locales.isValid(lang) then
		return false
	end
	if currentLanguage then
		Locales.unload(currentLanguage)
	end
	Locales.load(lang)
	currentLanguage = lang

	return true
end


function Language.getString(name)
	local localizedString = Locales.getString(currentLanguage, name)
	if not localizedString then
		if FALLBACK_TO_DEFAULT then
			local fallbackString = Locales.getString(DEFAULT_LANGUAGE, name)
			if type(fallbackString) == "string" then
				return fallbackString
			else
				return tostring(name)
			end
		else
			return tostring(name)
		end
	end
	return localizedString
end

function Language.getAllStrings()
	local strings = Locales.getLang(currentLanguage)
	if not strings then
		return false
	end
	return strings
end

Locales.load(DEFAULT_LANGUAGE, true)
