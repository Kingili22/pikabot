const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === 'p!pikapic') {
		message.channel.send('https://imgur.com/6cnl3Xa');
	}
});
client.on('message', message => {
        if (message.content === 'p!ping') {
            message.channel.send('Pong!');
        }
});
client.on('message', message => {
    if (message.content === 'p!version') {
        message.channel.send('`The version is 1.1`');
    }
});
client.login('TOKEN');
