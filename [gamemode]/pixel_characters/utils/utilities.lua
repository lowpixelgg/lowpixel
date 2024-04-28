-- function createTimer (id, props)
--     return try({
--         exec = function (self)
--             local data = await(promise(function (resolve, reject)
--                 
                
--                 exports.pixel_widgets:startCircleTimer(id);

--                 network:fetch(props.network, true):on(function (...) 
--                     return resolve(true);
--                 end)
--             end))



--             self:destroyInstance()

--             return data
--         end,
--         catch = function () 
--             return false
--         end
--     })
-- end

function executeCallback(callback, ...)
  if type(callback) ~= "function" then
    return false
  end
  local success, err = pcall(callback, ...)
  if not success then
    return false
  end
  return true
end