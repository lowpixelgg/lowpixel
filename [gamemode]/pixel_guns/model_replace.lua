local imports = {
	core = exports.pixel_core
}

local weaponsMeta = imports.core:getWeaponsMeta()
local propsMeta = imports.core:getPropsMeta()

local function registerModel(dff_name, txd_name, model_id)
    if((not dff_name) or (not txd_name) or (not model_id)) then return false end;

    local dff = engineLoadDFF('assets/' .. dff_name);
    local texture = engineLoadTXD('assets/' .. txd_name);

    engineImportTXD(texture, model_id);
    engineReplaceModel(dff, model_id);
end

for weapon_id, weapon_data in pairs(weaponsMeta) do
	thread:create(function(threadSelf)
		if(weapon_data.dff and weapon_data.txd) then
			registerModel(
				'weapons/' .. weapon_data.dff .. '.dff',
				'weapons/' .. weapon_data.txd .. '.txd',
				weapon_data.model_id
			);


			threadSelf:sleep(100);
		end
	end):resume({ rate = 250 });
end

for prop_name, prop_data in pairs(propsMeta) do
	thread:create(function(threadSelf)
		if(prop_data.dff and prop_data.txd) then
			registerModel(
				'props/' .. prop_data.dff .. '.dff',
				'props/' .. prop_data.txd .. '.txd',
				prop_data.model_id
			);

			threadSelf:sleep(100);
		end

		threadSelf:destroy();
	end):resume({ rate = 250 });
end