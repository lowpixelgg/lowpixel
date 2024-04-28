local modules = { "namespacer", "threader", "networker" };

for k,v in pairs(modules) do
  loadstring(exports.dreamcore:import(v)) ();
end

class = dreamcore.class;
thread = dreamcore.thread;
network = dreamcore.network;