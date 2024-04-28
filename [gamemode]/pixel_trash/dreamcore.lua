local modules = { "networker", "threader", "filesystem"  };

for k,v in pairs(modules) do
  loadstring(exports.dreamcore:import(v)) ();
end

network = dreamcore.network;
thread = dreamcore.thread;
fs = dreamcore.file;