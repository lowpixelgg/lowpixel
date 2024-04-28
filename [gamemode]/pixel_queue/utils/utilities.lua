function table.size(tab)
    local length = 0
    for _ in pairs(tab) do length = length + 1 end
    return length
end