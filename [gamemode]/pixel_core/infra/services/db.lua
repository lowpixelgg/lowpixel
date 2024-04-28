database = dreamcore.database:create({
  dbType = "mysql",
  host = "127.0.0.1",
  port = 3306,
  dbName = "lowpixel",

  username = "root",
  password = "",
  options = {
    autoreconnect = 1
  }
});



function getDatabase () 
  return database;
end