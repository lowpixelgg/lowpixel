-- Fisher;
function createFisher (...)
    return Jobs.fisherRepo:create(...)
end

function getFisherByCharacter (...)
    return Jobs.fisherRepo:getFisherByCharacter(...)
end

function saveFisher (...)
    return Jobs.fisherRepo:save(...)
end


function createTask (...) 
    return Jobs.fisherTasksRepo:create(...);
end


function getTaskForFisher (...) 
    return Jobs.fisherTasksRepo:getTaskForFisher(...);
end


function saveTask (...) 
    return Jobs.fisherTasksRepo:save(...);
end

function deleteTask (...) 
    return Jobs.fisherTasksRepo:deleteTask(...);
end