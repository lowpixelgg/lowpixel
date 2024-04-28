local modules = { "networker", "threader" };

for k,v in pairs(modules) do
  loadstring(exports.dreamcore:import(v)) ();
end

network = dreamcore.network
thread = dreamcore.thread