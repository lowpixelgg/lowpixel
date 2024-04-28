local modules = { "networker", "namespacer", "threader", "cron" };

for k,v in pairs(modules) do
  loadstring(exports.dreamcore:import(v)) ();
end


class = dreamcore.class;
network = dreamcore.network;
thread = dreamcore.thread;
schedule = dreamcore.cron;