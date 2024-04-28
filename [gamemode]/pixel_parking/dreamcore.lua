
local modules = { "networker", "namespacer"  };

for k,v in pairs(modules) do
  loadstring(exports.dreamcore:import(v)) ();
end

class = dreamcore.class
network = dreamcore.network