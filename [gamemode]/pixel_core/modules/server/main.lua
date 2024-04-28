Users = {};
Users.accounts = {};

Characters = {};
Characters.repo = {};

Inventory = {};
Inventory.invRepo = {};
Inventory.chestRepo = {};
Inventory.itemsRepo = {};

Vehicles = {};
Vehicles.vehRepo = {};
Vehicles.parkRepo = {};

Phone = {};
Phone.phoneRepo = {};
Phone.contactsRepo = {};
Phone.galleryRepo = {};
Phone.whatsappRepo = {};
Phone.bankRepo = {};

Jobs = {};
Jobs.fisherRepo = {};
Jobs.fisherTasksRepo = {};

addEventHandler( 'onResourceStart', resourceRoot, function()
        Characters.repo:setup();

        Inventory.invRepo:setup();
        Inventory.chestRepo:setup();
        Inventory.itemsRepo:setup();

        Vehicles.parkRepo:setup();
        Vehicles.vehRepo:setup();

        Phone.phoneRepo:setup();
        Phone.whatsappRepo:setup();
        Phone.contactsRepo:setup();
        Phone.galleryRepo:setup();
        Phone.bankRepo:setup();

        Jobs.fisherRepo:setup();
        Jobs.fisherTasksRepo:setup();
end)