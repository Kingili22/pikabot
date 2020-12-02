const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});
client.on('message', message => {
    if (message.content === 'p!pikapic') {
    pictures = ["https://imgur.com/25MqwKH", "https://imgur.com/6cnl3Xa", "https://imgur.com/kQeH1Bb", "https://imgur.com/l1L0yEf"];
    const random = Math.floor(Math.random() * pictures.length);
    message.channel.send(pictures[random]);
    }
});
client.on('message', message => {
        if (message.content === 'p!ping') {
            message.channel.send('Pong!');
        }
});
client.on('message', message => {
    if (message.content === 'p!version') {
        message.channel.send('`The bots version is 1.3`');
    }
});
client.on('message', message => {
    if (message.content === 'p!help') {
        message.channel.send('We have 4 commands, p!help - tells you all the commands, p!version - send the current version, p!ping - Responds with Pong!, p!pikapic - Sends a random pikachu picture');
    }
});
client.login('TOKEN')
