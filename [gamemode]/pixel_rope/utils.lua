getDist = getDistanceBetweenPoints3D;

function getElementOffset(element, offset)
	local m = getElementMatrix(element);
    local x = offset.x * m[1][1] + offset.y * m[2][1] + offset.z * m[3][1] + m[4][1];
    local y = offset.x * m[1][2] + offset.y * m[2][2] + offset.z * m[3][2] + m[4][2];
    local z = offset.x * m[1][3] + offset.y * m[2][3] + offset.z * m[3][3] + m[4][3];
	return Vector3(x, y, z);
end

function getElementBoneOffset(element, boneId, offset)
	local m = getElementBoneMatrix(element, boneId);
    local x = offset.x * m[1][1] + offset.y * m[2][1] + offset.z * m[3][1] + m[4][1];
    local y = offset.x * m[1][2] + offset.y * m[2][2] + offset.z * m[3][2] + m[4][2];
    local z = offset.x * m[1][3] + offset.y * m[2][3] + offset.z * m[3][3] + m[4][3];
	return Vector3(x, y, z);
end

function isElementMoving (theElement)
    if isElement ( theElement ) then
       return Vector3( getElementVelocity( theElement ) ).length ~= 0
    end
    return false
 end

 -- http://www.terrame.org/packages/doc/sci/lua/Spline.lua
function buildSpline(points, steps)
	local values = {}

	if #points < 3 then
		return points
	end
	local count = #points - 1
	local p0, p1, p2, p3

    for i = 1, count, 1 do
        if i == 1 then
			p0, p1, p2, p3 = points[i], points[i], points[i + 1], points[i + 2]
		elseif i == count then
			p0, p1, p2, p3 = points[#points - 2], points[#points - 1], points[#points], points[#points]
		else
			p0, p1, p2, p3 = points[i - 1], points[i], points[i + 1], points[i + 2]
		end
        for t = 0, 1, 1/steps do
            local x = 0.5 * ((2 * p1.x) + (p2.x - p0.x) * t + (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t * t + (3 * p1.x - p0.x - 3 * p2.x + p3.x) * t * t * t)
            local y = 0.5 * (( 2 * p1.y) + (p2.y - p0.y) * t + (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t * t + (3 * p1.y - p0.y - 3 * p2.y + p3.y) * t * t * t)
            local z = 0.5 * (( 2 * p1.z) + (p2.z - p0.z) * t + (2 * p0.z - 5 * p1.z + 4 * p2.z - p3.z) * t * t + (3 * p1.z - p0.z - 3 * p2.z + p3.z) * t * t * t)
            table.insert(values, {
                position = Vector3(x, y, z),
                i = i,
                t = t
            });
        end
    end
	return values
end

function tableToVector(theTable)
    local newTable = {};
    for k, v in pairs(theTable) do
        if ( type(v) == "table" ) then
            newTable[k] = Vector3(v.x, v.y, v.z);
        else
            newTable[k] = v;
        end
    end
    return newTable;
end

function vectorToTable(theTable)
    local newTable = {};
    for k, v in pairs(theTable) do
        if ( type(v) == "userdata" and getUserdataType(v) == "vector3" ) then
            newTable[k] = { x = v.x, y = v.y, z = v.z };
        else
            newTable[k] = v
        end
    end
    return newTable;
end

function nestedTableToVector(theTable)
    local newTable = {};
    for k, nestedTable in pairs(theTable) do
        local newNestedTable = {};
        for k2, v in pairs(nestedTable) do
            if ( type(v) == "table" ) then
                newNestedTable[k2] = Vector3(v.x, v.y, v.z);
            else
                newNestedTable[k2] = v;
            end
        end
        newTable[k] = newNestedTable;
    end
    return newTable;
end

function nestedVectorToTable(theTable)
    local newTable = {};
    for k, nestedTable in pairs(theTable) do
        local newNestedTable = {};
        for k2, v in pairs(nestedTable) do
            if ( type(v) == "userdata" and getUserdataType(v) == "vector3" ) then
                newNestedTable[k2] = { x = v.x, y = v.y, z = v.z };
            else
                newNestedTable[k2] = v;
            end
        end
        newTable[k] = newNestedTable;
    end
    return newTable;
end