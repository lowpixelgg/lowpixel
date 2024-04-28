local sound_cache = {};
local stamina_props = {
    element = 'stamina',
    amount_to_discount = 5,
    effect = function(player)
        local path = 'tired_out';
        network:emit('pixel_characters:soundEffect',true,player,player,path);
    end,

    stamina_to_detect = {
        ['jump'] = 5,
        ['sprint'] = 5,
        ['powerwalk'] = 1,
    }
}

stats:setProps('stamina',stamina_props);