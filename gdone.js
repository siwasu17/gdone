#!/usr/bin/env node
const argv = require('argv');
const googlehome = require('google-home-notifier')
const language = 'en';
 
argv.option({
	name: 'command',
	short: 'c',
	type : 'string',
	description :'Additional text to notify',
	example: "'script --command=value' or 'script -c value'"
});

const args = argv.run();
let commandName = args.options.command ? args.options.command : '';
googlehome.device('Google-Home', language); 
googlehome.notify(commandName +  ' command complete!', function(res) {
	console.log(res);
});
