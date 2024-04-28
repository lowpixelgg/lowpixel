let websocket;
let endpoint;
let state;


addEventListener("DOMContentLoaded", () => {
  mta.triggerEvent("websocket:onPageLoaded");
})


async function doStartWebSocket (endpoint, serverId) {
  if (!endpoint) { return }

  websocket = new WebSocket(`ws://${endpoint}/socket.io/?EIO=3&transport=websocket&from=fivem&serverId=${serverId}`);
  
  websocket.onopen = () => {    
    state = true;
    mta.triggerEvent("websocket:onConnect");
  }

  websocket.onmessage = (evt) => {
    let msg = '';

    if (evt.data.includes('42["')) {
			const parsed = JSON.parse(evt.data.replace('42', ''));
			msg = {
				event: parsed[0],
				data: parsed[1],
			};

      mta.triggerEvent("websocket:onMessage", JSON.stringify(msg));
		}
  }


  websocket.onerror = (err) => {
    mta.triggerEvent('websocket:onError', err.data);
  }

  websocket.onclose = () => {
    mta.triggerEvent('websocket:onDisconnect'); 
  }
}


async function doSendMessage (event, data) {
  const parsed = JSON.parse(data) [0];
  
  if (state) {
    websocket.send(`42${JSON.stringify([`${event}`, parsed])}`);
  }
}