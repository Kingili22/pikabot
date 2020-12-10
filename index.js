const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    if (message.content === `${prefix}pikapic`) {
    pictures = ["https://imgur.com/25MqwKH", "https://imgur.com/6cnl3Xa", "https://imgur.com/kQeH1Bb", "https://imgur.com/l1L0yEf", "https://imgur.com/gQiA1nQ","https://imgur.com/qDqKSho","https://tenor.com/view/pikachu-pokemon-cali7-thunder-lightning-gif-15699421","https://tenor.com/view/detective-pikachu-investigation-pokemon-gif-13601363", "https://imgur.com/ZhYgje8","https://tenor.com/view/detective-pikachu-investigation-pokemon-gif-13601363", "https://imgur.com/88XHMq0", "https://tenor.com/view/pikachu-yeah-cheer-pokemon-pikachus-gif-17585470"];
    const random = Math.floor(Math.random() * pictures.length);
    message.channel.send(pictures[random]);
    } else if (message.content === `${prefix}pokegif`) {
    pokemon = ["https://tenor.com/view/squirtle-pikachu-pokemon-dancing-happy-gif-15646320", "https://tenor.com/view/pika-pokemon-happy-high-five-gif-15448595", "https://tenor.com/view/deal-with-it-squirtle-pokemon-gif-6166819", "https://tenor.com/view/charmander-gif-5827908", "https://tenor.com/view/bulbasaur-pokemon-content-happy-nodding-gif-5483121", "https://tenor.com/view/pokemon-dragon-fire-chardizard-gif-7887070", "https://tenor.com/view/laugh-mew-pokemon-funny-hilarious-gif-15197015", "https://tenor.com/view/stretching-snorlax-anime-pokemon-cute-gif-17653080"];
    const random = Math.floor(Math.random() * pokemon.length);
    message.channel.send(pokemon[random]);
    } else if (message.content === `${prefix}coinflip`) {
    coinflip = ["Heads!","Tails!"];
    const random = Math.floor(Math.random() * coinflip.length);
    message.channel.send(coinflip[random]);
    } else if (message.content === `${prefix}ping`) {
            message.channel.send('Pong!');
    } else if (message.content === `${prefix}beep`) {
        message.channel.send('Boop!');
    } else if (message.content === `${prefix}github`) {
        message.channel.send({embed: {
            color: 3447003,
            description: "This is the github repository link: https://github.com/Kingili22/pikabot"
        }});
    } else if (message.content === `${prefix}patchnotes`) {
        message.channel.send({embed: {
            color: 3447003,
            description: "Patchnotes starting from 2.0.0"
          }});
    } else if (/<@!776092404720730112>|<@776092404720730112/.test(message.content)) {
    return message.reply(`You mentioned me, for commands please run ${prefix}help, the prefix is ${prefix}`);

    } else if (message.content === `${prefix}developers`) {
        message.channel.send({embed: {
            color: 3447003,
            description: "<@535235896530960395> is the main developer, people who contribute a lot get special mention here!\n<@436876982794452992> He is just the best and helped a lot ! :3"
          }});
    } else if (message.content === `${prefix}version`) {
        message.channel.send({embed: {
            color: 3447003,
            description: "The bots current version is 1.5.4"
          }});
    } else if (message.content === `${prefix}help`) {
        message.channel.send({embed: {
            color: 3447003,
            description: `MAKE SURE TO ONLY USE THIS COMMAND IN DESIGNATED BOT COMMANDS CHANNEL, RUN ${prefix}confirm TO RUN IT`
          }});
    } else if (message.content === `${prefix}confirm`) {
        (`${prefix}help - tells you all the commands`);
        (`${prefix}version - send the current version`);
        (`${prefix}ping - Responds with Pong!`);
        (`${prefix}pikapic - Sends a random pikachu picture`);
        (`${prefix}github - sends the github repository link`);
        (`${prefix}coinflip - flips a coin`);
        (`${prefix}developers - mentions the main developers`);
        (`${prefix}patchnotes - displays the patch notes`)
        message.channel.send({embed: {
            color: 3447003,
            description: `Here are the commands: \n${prefix}help - tells you all the commands\n ${prefix}version - send the current version\n ${prefix}ping - Responds with Pong!\n ${prefix}pikapic - Sends a random pikachu picture\n ${prefix}pokegif - sends a random pokemon gif\n ${prefix}github - sends the github repository link\n ${prefix}coinflip - flips a coin\n ${prefix}developers - mentions the main developers\n ${prefix}patchnotes - displays the patch notes`
          }});
    }
});

client.login(token)
