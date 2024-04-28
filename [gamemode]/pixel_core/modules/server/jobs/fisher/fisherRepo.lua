local _table = 'fisher'

function Jobs.fisherRepo:setup()
    database:table(_table):create(
        {
            {name = 'character', type = 'varchar', size = 255},
            {name = 'currentExperience', type = 'int', size = 255},
            {name = 'currentTask', type = 'varchar', size = 255}
        }
    )

    return print('Fisher Repo has been propagated')
end

function Jobs.fisherRepo:create(character, currentExperience)
    local _, _, _id = database:table(_table):insert({
            character = character,
            currentExperience = 0,
            currentTask = false
        }
    )

    return _id;
end

function Jobs.fisherRepo:getFisherByCharacter(character, fields, callback)
    return database:table(_table):select(fields, {character = character}, callback)[1]
end

function Jobs.fisherRepo:save(fisher)
    local store = {}

    for k, v in pairs(fisher) do
        store[k] = v
    end

    return database:table(_table):update(store, {_id = fisher._id})
end
