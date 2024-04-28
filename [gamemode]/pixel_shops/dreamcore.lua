local modules = { "networker", "namespacer", "threader", "lovelume" };

for k,v in pairs(modules) do
  loadstring(exports.dreamcore:import(v)) ();
end


class = dreamcore.class;
network = dreamcore.network;
thread = dreamcore.thread;
lume = dreamcore.lume;


function table.size (tbl) 
  local total = 0;
  for k,v in pairs(tbl) do total = total + 1 end

  return total;
end