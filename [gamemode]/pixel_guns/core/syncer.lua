addEventHandler('onClientElementStreamIn', root, function()
	manager:onElementStreamIn(source);
end);

addEventHandler('onClientElementStreamOut', root, function()
	manager:onElementStreamOut(source);
end);

addEventHandler('onClientElementDestroy', root, function()
	manager:onElementDestroy(source);
end);

addEventHandler('onClientElementDataChange', root, function(element_key, old_data, new_data)
	manager:onElementDataChange(source, element_key, old_data, new_data);
end)

addEventHandler('onClientPlayerQuit', root, function () 
	manager:unregister(source);
end)