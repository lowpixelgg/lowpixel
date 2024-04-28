local _table = 'fisher_tasks'

function Jobs.fisherTasksRepo:setup()
    database:table(_table):create(
        {
            {name = 'fisher', type = 'varchar', size = 255},
            {name = 'title', type = 'varchar', size = 255},
            {name = 'meta', type = 'varchar', size = 255},
            {name = 'description', type = 'varchar', size = 255},
            {name = 'totalCompleted', type = 'int', size = 255},
            {name = 'totalRequired', type = 'int', size = 255},
            {name = 'money', type = 'varchar', size = 255},
            {name = 'experience', type = 'varchar', size = 255}
        }
    )

    return print('Fisher Tasks Repo has been propagated')
end

function Jobs.fisherTasksRepo:create(fisher, title, description, totalRequired, money, experience, meta)
    database:table(_table):insert(
        {
            title = title,
            fisher = fisher,
            totalCompleted = 0,
            totalRequired = totalRequired,
            money = money,
            meta = meta,
            experience = experience
        }
    )

    return true
end

function Jobs.fisherTasksRepo:getTaskForFisher (fisher, fields, callback)
    return database:table(_table):select(fields, {fisher = fisher}, callback)[1]
end

function Jobs.fisherTasksRepo:deleteTask (taskId, callback) 
    return database:table(_table):delete({_id = taskId}, callback);
end

function Jobs.fisherTasksRepo:save(task)
    local store = {}

    for k, v in pairs(task) do
        store[k] = v
    end

    return database:table(_table):update(store, {_id = task._id})
end
