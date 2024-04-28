local hunger_props = {
    counter_limit = 10, -- tempo para descer a cede em segundos
    amount_to_discount = 1,
    element = 'hunger',
    fat = true, 
    effect = function(player)
       local path = 'houngry';
       network:emit('pixel_characters:soundEffect', true, player, player, path);
    end;
}

stats:setProps('hunger', hunger_props);