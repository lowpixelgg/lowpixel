Metas.voiceMeta.ClientSettings = {
	refreshRate = 100, 
	networkRefreshRate = 2000, 
	playerListRefreshRate = 5000, 
	distance = {
		15, 
		5, 
		40, 
	},
	headingType = 0, 
	radioKey = "x", 
	keySwitchChannels = "home", 
	keySwitchChannelsSecondary = "leftshift", 
	keyProximity = "home", 
	radioClickMaxChannel = 100, 
	radioAnim = false, 
	radioEnabled = true, 
	wsServer = "34.95.176.27:33250", 
	plugin_data = {
		TSChannel = "Jogando",
		TSPassword = "Toko_pass", 
		TSChannelWait = "Waiting channel", 
		TSServer = "voice.rocketmta.com", 
		TSChannelSupport = "S1: Waiting For Support", 
		TSDownload = "https://teamspeak.com", 
		TSChannelWhitelist = { 
			"Suport Channel 1",
			"Support Channel 2",
		},

		local_click_on = true,
		local_click_off = true,
		remote_click_on = false,
		remote_click_off = true,
		enableStereoAudio = true,
	
		localName = "N/A",
		localNamePrefix = "[lowpixel.gg] ", 
	}
};

Metas.voiceMeta.ServerSettings = {
	channels = {
		{name = "Radio 1", subscribers = {}},
		{name = "Radio 2", subscribers = {}},
		{name = "Radio 3", subscribers = {}},
		{name = "Radio 4", subscribers = {}},
		{name = "Radio 5", subscribers = {}},
	}
};