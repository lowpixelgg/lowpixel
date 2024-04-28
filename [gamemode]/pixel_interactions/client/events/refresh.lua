network:fetch("pixel_interac:onServerCache", true):on(function (data) ClientInterac:create (data); end);
addEventHandler("onClientRender", root, ClientInterac.doPulse);
addEventHandler("onClientClick", root, ClientInterac.onClick);