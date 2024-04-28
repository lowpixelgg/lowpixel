local imports = {
    core = exports.pixel_core,
};

local tasks = class:create("tasks");

local mockup = {
    [1] = { title = "Pesca Noturna", description = "Explore a serenidade da noite e pesque %s %s", totalRequired = 20, requiredFish = {"fish_piau"}, levelRange = {1, 10} },
    [2] = { title = "O Grande Salto", description = "Mostre sua habilidade em correntezas e pesque %s %s em rios rápidos", totalRequired = 15, requiredFish = {"fish_corvina"}, levelRange = {10, 20} },
    [3] = { title = "Festa do Robalo", description = "Domine as ondas costeiras pescando %s %s no litoral", totalRequired = 10, requiredFish = {"fish_piau"}, levelRange = {20, 30} },
    [4] = { title = "Desafio do Dourado", description = "Enfrente os rios tropicais e pesque %s %s nas correntezas quentes", totalRequired = 5, requiredFish = {"fish_corvina"}, levelRange = {30, 40} },
    [5] = { title = "Procura pelo Bagre", description = "Navegue pelas águas lamacentas e pesque %s %s", totalRequired = 25, requiredFish = {"fish_piau"}, levelRange = {15, 25} },
    [6] = { title = "Captura de Carpas", description = "Demonstre paciência e habilidade pescando %s %s em lagos tranquilos", totalRequired = 12, requiredFish = {"fish_corvina"}, levelRange = {5, 15} },
    [7] = { title = "Aventura do Arenque", description = "Desafie as águas frias e pesque %s %s no mar aberto", totalRequired = 20, requiredFish = {"fish_piau"}, levelRange = {25, 35} },
    [8] = { title = "Missão da Tilápia", description = "Explore rios e lagos tropicais em busca de %s %s", totalRequired = 30, requiredFish = {"fish_corvina"}, levelRange = {10, 20} },
    [9] = { title = "Caça ao Salmão", description = "Enfrente correntes fortes pescando %s %s em rios de montanha", totalRequired = 8, requiredFish = {"fish_piau"}, levelRange = {35, 45} },
    [10] = { title = "Perseguição ao Peixe-Espada", description = "Teste suas habilidades no alto-mar pescando %s %s", totalRequired = 3, requiredFish = {"fish_corvina"}, levelRange = {40, 50} },
  }
  

function tasks.public:create(...)
    local instance = self:createInstance();

    if (instance and not instance:load(...)) then
        instance:destroyInstance();
        return false;
    end

    return instance;
end


function tasks.public:load (fisherId)
    self.fisherId = fisherId;
    self.currentTask = imports.core:getTaskForFisher(fisherId, {"title", "description", "totalCompleted", "totalRequired", "money", "experience", "meta", "_id"});


    return self;
end



function tasks.public:createFisherTasks(amount)
    local tasksCache = {}

    local minMoney, maxMoney = 50, 5000
    local minExperience, maxExperience = 25, 1000

    for i = 1, amount do
        local totalRequired = math.random(100, 500)
        local taskMock = mockup[math.random(1, 10)]
        local money = lume.lerp(minMoney, maxMoney, totalRequired / 500)
        local experience = lume.lerp(minExperience, maxExperience, totalRequired / 500)

        money = lume.round(lume.clamp(money, minMoney, maxMoney))
        experience = lume.round(lume.clamp(experience, minExperience, maxExperience))

        table.insert(tasksCache, self:toPersistence({
            _id = i,
            title = taskMock.title,
            description = string.format(taskMock.description, totalRequired, "fish_piaus"),
            totalCompleted = 0,
            totalRequired = totalRequired,
            money = money,
            experience = experience
        }))
    end

    return tasksCache;
end


function tasks.public:toPersistence (task) 
    return {
        id = task._id,
        title = task.title,
        description = task.description,
        mission = {
            totalCompleted = task.totalCompleted,
            totalRequired = task.totalRequired,
        },
        reward = {
            money = task.money,
            experience = task.experience
        }
    } 
end



function tasks.public:getCurrentTask ()
    if (not self.currentTask) then return false end
    return self.currentTask, mockup[tonumber(self.currentTask.meta)];
end


function tasks.public:saveCurrentTask ()
    imports.core:saveTask(self.currentTask);
end 



function tasks.public:getCurrentTasks ()
    local tasks = {}

    if (not self.currentTask) then 
        tasks = self:createFisherTasks(5);
    else
        self.availableTasks = self:createFisherTasks(3);
        table.insert(tasks, self:toPersistence(self.currentTask));
    end

    return tasks
end


function tasks.public:ereaseCurrentTask () 
    if (self.currentTask) then 
        imports.core:deleteTask(self.currentTask._id);
        self.currentTask = nil;
    end
end