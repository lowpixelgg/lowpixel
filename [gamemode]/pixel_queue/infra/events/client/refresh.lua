network:fetch("pixel_queue:onServerInitQueue", true):on(function (...) ClientQueue:start () end);
network:fetch("pixel_queue:onServerCloseQueue", true):on(function (...) ClientQueue:stop () end);
network:fetch("pixel_queue:onServerUpdateQueue", true):on(function (data) ClientQueue.data = data; end);