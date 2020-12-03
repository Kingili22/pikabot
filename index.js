const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

client.once('ready', () => {
	console.log('Ready!');
});
client.on('message', message => {
    if (message.content === 'p!pikapic') {
    pictures = ["https://imgur.com/25MqwKH", "https://imgur.com/6cnl3Xa", "https://imgur.com/kQeH1Bb", "https://imgur.com/l1L0yEf", "https://imgur.com/gQiA1nQ","https://imgur.com/qDqKSho","https://tenor.com/view/pikachu-pokemon-cali7-thunder-lightning-gif-15699421","https://tenor.com/view/detective-pikachu-investigation-pokemon-gif-13601363", "https://imgur.com/ZhYgje8","https://tenor.com/view/detective-pikachu-investigation-pokemon-gif-13601363", "https://imgur.com/88XHMq0", "https://tenor.com/view/pikachu-yeah-cheer-pokemon-pikachus-gif-17585470"];
    const random = Math.floor(Math.random() * pictures.length);
    message.channel.send(pictures[random]);
    }
});
client.on('message', message => {
    if (message.content === 'p!pokegif') {
    pokemon = ["https://tenor.com/view/squirtle-pikachu-pokemon-dancing-happy-gif-15646320", "https://tenor.com/view/pika-pokemon-happy-high-five-gif-15448595", "https://tenor.com/view/deal-with-it-squirtle-pokemon-gif-6166819", "https://tenor.com/view/charmander-gif-5827908", "https://tenor.com/view/bulbasaur-pokemon-content-happy-nodding-gif-5483121", "https://tenor.com/view/pokemon-dragon-fire-chardizard-gif-7887070", "https://tenor.com/view/laugh-mew-pokemon-funny-hilarious-gif-15197015", "https://tenor.com/view/stretching-snorlax-anime-pokemon-cute-gif-17653080"];
    const random = Math.floor(Math.random() * pokemon.length);
    message.channel.send(pokemon[random]);
    }
});
client.on('message', message => {
    if (message.content === 'p!coinflip') {
    coinflip = ["Heads!","Tails!"];
    const random = Math.floor(Math.random() * coinflip.length);
    message.channel.send(coinflip[random]);
    }
});
client.on('message', message => {
        if (message.content === 'p!ping') {
            message.channel.send('Pong!');
        }
});
client.on('message', message => {
    if (message.content === 'p!beep') {
        message.channel.send('Boop!');
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
    if (message.content === 'p!patchnotes') {
        message.channel.send({embed: {
            color: 3447003,
            description: "Patchnotes starting from 2.0.0"
          }});
    }
});
client.on('message', message => {
if (/<@!776092404720730112>|<@776092404720730112/.test(message.content)) {
    return message.reply('You mentioned me, for commands please run p!help');

    }
});
client.on('message', message => {
    if (message.content === 'p!developers') {
        message.channel.send({embed: {
            color: 3447003,
            description: "<@535235896530960395> is the main developer, people who contribute a lot get special mention here!"
          }});
    }
});
client.on('message', message => {
    if (message.content === 'p!version') {
        message.channel.send({embed: {
            color: 3447003,
            description: "The bots current version is 1.5.4"
          }});
    }
});
client.on('message', message => {
    if (message.content === 'p!help') {
        message.channel.send({embed: {
            color: 3447003,
            description: "MAKE SURE TO ONLY USE THIS COMMAND IN DESIGNATED BOT COMMANDS CHANNEL, RUN p!confirm TO RUN IT"
          }});
    }
});
client.on('message', message => {
    if (message.content === 'p!confirm') {
        ("p!help - tells you all the commands");
        ("p!version - send the current version");
        ("p!ping - Responds with Pong!");
        ("p!pikapic - Sends a random pikachu picture");
        ("p!github - sends the github repository link");
        ("p!coinflip - flips a coin");
        ("p!developers - mentions the main developers");
        ("p!patchnotes - displays the patch notes")
        message.channel.send({embed: {
            color: 3447003,
            description: "Here are the commands, " + "p!help - tells you all the commands, p!version - send the current version, p!ping - Responds with Pong!, p!pikapic - Sends a random pikachu picture, p!pokegif - sends a random pokemon gif, p!github - sends the github repository link, p!coinflip - flips a coin, p!developers - mentions the main developers, p!patchnotes - displays the patch notes"
          }});
    }
});
client.login('TOKEN')
