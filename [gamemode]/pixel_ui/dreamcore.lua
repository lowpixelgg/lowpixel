local modules = {"namespacer", "lust"};

for k,v in pairs(modules) do
  loadstring(exports.dreamcore:import(v)) ();
end


imports = {
  class = dreamcore.class;
  lust = dreamcore.lust;
}