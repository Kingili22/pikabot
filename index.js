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
    if (message.content === 'p!github') {
        message.channel.send({embed: {
            color: 3447003,
            description: "This is the github repository link: https://github.com/Kingili22/pikabot"
          }});
    }
});
client.on('message', message => {
    if (message.content === 'p!version') {
        message.channel.send({embed: {
            color: 3447003,
            description: "The bots current version is 1.4"
          }});
    }
});
client.on('message', message => {
    if (message.content === 'p!help') {
        message.channel.send({embed: {
            color: 3447003,
            description: "We have 5 commands, p!help - tells you all the commands, p!version - send the current version, p!ping - Responds with Pong!, p!pikapic - Sends a random pikachu picture and p!github send the github repository link"
          }});
    }
});
client.login('TOKEN')
