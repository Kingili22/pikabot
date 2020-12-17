// you can rename this to index.js if you want im to lazy to change it now
const { AkairoClient } = require('discord-akairo');
const { token } = require('../src/config/credentials.json')
const { prefix } = require('./config/botoptions.json')

class MyClient extends AkairoClient {
    constructor() {
        super({
            // ill let u put other shit here
            ownerID: [
                '464970779944157204',
                '535235896530960395'
            ]
        }, {
            disableMentions: 'everyone',
        });
    }
}

// i will add inhibitor and all the other shit later
this.commandHandler = new this.commandHandler(this, {
    directory: '../src/config/botoptions.json',
    prefix: prefix
})
this.commandHandler.loadAll()


const client = new MyClient();
client.login(token);