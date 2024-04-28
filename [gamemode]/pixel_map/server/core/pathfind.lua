local pathfind = class:create("pathfind");

function pathfind.public:create(...)
    local instance = self:createInstance();
    
    if (instance and not instance:load(...)) then
        instance:destroyInstance();
        return false;
    end
    
    return instance;
end


function pathfind.public:load () 
    self.graph = loadPathGraph("assets/sa_nodes.json");

    if (self.graph) then
        iprint("gps nodes has been loaded.");
    end

    return self;
end



function pathfind.public:calculatePathByCoord(x1, y1, z1, x2, y2, z2) 
    return try({
        exec = function ()
            local path = await(promise(function (resolve, reject) 
                findShortestPathBetween(self.graph, x1, y1, z1, x2, y2, z2, function (nodes) 
                    if (#nodes < 1) then 
                        return reject(false);
                    end

                    resolve(nodes);
                end);
            end));
            
            return path;
        end,
        catch = function ()
            return false;
        end
    });
end