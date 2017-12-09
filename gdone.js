#!/usr/bin/env node
const googlehome = require('google-home-notifier')
const language = 'en';

googlehome.device('Google-Home', language); 
googlehome.notify('Command complete!', function(res) {
	console.log(res);
});
