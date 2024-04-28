function Users.accounts:login(player, token)
  return try({
    exec = function (self)
      local account = await(promise(function (resolve, reject)
        fetchRemote("https://saturn-api.rocketmta.com/v1/account", { method = "GET", headers = {
          ['x-access-token'] = token
        } }, function (response, headers)
          if (headers.success) then
            local data = fromJSON(response).body

            data.id = data._id;
            data._id = nil ;

            local userAccount = getAccount(data.username, data.id);

            if (not userAccount) then
              addAccount(data.username, data.id);
            end

            local loggedIn = logIn(player, getAccount(data.username), data.id);

            if (loggedIn) then 
              data.token = token;

              return resolve({
                success = true,
                body = data
              })
            else
              return reject({success = false, body = "Player inst logged in"})
            end
          else
            return reject({success = false, body = "Player had problems with API"})
          end
        end)
      end))
      
      return account
    end,
    catch = function (err)
      return false
    end
  })
end