local gravity = 0.2;
local ropeTex = dxCreateTexture("rope.png");

function getConstraintPosition(constraint, elements)
    if ( constraint.type == "fixed" ) then
        return constraint.position;
    elseif ( constraint.type == "bone" and elements[constraint.elementId] and isElement(elements[constraint.elementId]) ) then
        if ( constraint.offset ) then
            return getElementBoneOffset(elements[constraint.elementId], constraint.boneId, constraint.offset);
        else
            return elements[constraint.elementId]:getBonePosition(constraint.boneId);
        end
        return false;
    elseif ( constraint.type == "offset" and elements[constraint.elementId] and isElement(elements[constraint.elementId]) ) then
        return getElementOffset(elements[constraint.elementId], constraint.offset);
    elseif ( constraint.type == "self-update" and elements[constraint.elementId] and isElement(elements[constraint.elementId])) then
        local x,y,z = getElementPosition(elements[constraint.elementId]);
        return Vector3(x,y,z);
    elseif (constraint.type == "vehicleComponent") then
        local x,y,z = getVehicleComponentPosition(constraint.vehicle, constraint.component, "world");
        return Vector3(x,y,z);
    end
    return false;
end

function fixedUpdate(timeSlice)
    local deltaTime = timeSlice/100;
    for rope, data in pairs(currentRopes) do
        local z;
        if data.uniqueZ and data.parent then
            z = getGroundPosition(data.parent:getPosition());
        else
            z = getGroundPosition(data.nodes[#data.nodes]);
        end
        for i = 1, data.totalNodes, 1 do
            local constraint1 = data.constraints[i];
            local constraint1Pos;
            local node1 = data.nodes[i];
            local node2 = data.nodes[i + 1];
            if ( constraint1 ) then
                constraint1Pos = getConstraintPosition(constraint1, data.elements) or node1;
                node1 = constraint1Pos;
            end
            if not constraint1 then
                z = ( not data.uniqueZ ) and getGroundPosition(node1) or z;
                local dist = getDist(node1, node1.x, node1.y, z);
                if ( dist < 0.1 ) then
                    node1.z = z + 0.05;
                elseif ( node1.z > z ) then
                    node1.z = node1.z - gravity*deltaTime;
                end
            end
            if node2 then
                local diffPos = node1 - node2;
                local dist = diffPos:getLength();
                local difference = 0;
                if ( dist > 0 ) then
                    difference = (data.segmentLength - dist) / dist;
                end
                local translate = diffPos * ( constraint1 and ( constraint1.weighting or data.weighting ) or data.weighting ) * difference;
                if not constraint1 or constraint1.soft then
                    data.nodes[i] = node1 + translate;
                else
                    data.nodes[i] = constraint1Pos;
                end
                data.nodes[i + 1] = node2 - translate;
            elseif ( constraint1 ) then
                data.nodes[i] = constraint1Pos;
            end
        end
    end
end
addEventHandler("onClientPreRender", root, fixedUpdate);

function draw()
    for rope, data in pairs(currentRopes) do
        for i = 1, data.totalNodes, 1 do
            local node1 = data.nodes[i];
            local node2 = data.nodes[i + 1];
            if node2 then
                dxDrawMaterialLine3D(node1, node2, ropeTex, data.style.weighting or 0.01, data.style.color or tocolor(255, 255, 255,100))
            end
        end
    end
end
addEventHandler("onClientRender", root, draw);
