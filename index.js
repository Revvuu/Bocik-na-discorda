const Discord = require("discord.js");
const bot = new Discord.Client();
const TOKEN = 'NTA1NzM3MzU2MjgwODU2NTc2.DrYBig.iCsdQUrr-6W470L-LJvZccK0lsA';

bot.on('message', function (message) {
    if ((message.content != '!zarejestrowany') || (message.content != '!zarejestrowana')) {
        if (message.channel.id = '505489965681999874') {
            message.delete()
                .then(msg => console.log(`Deleted message from ${msg.author.username}`))
                .catch(console.error);
        }
    }
});

bot.on('ready', function () {
    console.log('Ready');
})

bot.login(TOKEN);