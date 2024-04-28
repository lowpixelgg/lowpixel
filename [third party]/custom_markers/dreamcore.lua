local modules = { "networker" };

for k,v in pairs(modules) do
  loadstring(exports.dreamcore:import(v)) ();
end

network = dreamcore.network