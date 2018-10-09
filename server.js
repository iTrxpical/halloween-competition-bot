const { RichEmbed, Client, Util, Discord } = require('discord.js');
const prefix = '.';
const { ErrorEmbedF, SucessEmbedF, PermissionIssueF, FourZeroFourErrorEmbedF, CurrancyNullEmbedF } = require('./embeds.js');
const client = new Client()

  setInterval(function() {
    var presences = ['at night..','alone in the dark!','in the noir nuit.','during halloween!']
    let status = presences[Math.floor(Math.random()*presences.length)];
    client.user.setPresence({ game: { name: status, type: 0 } });;
 }, 10000); 

client.on('warn', console.warn);

client.on('error', console.error);

client.on('ready', () => console.log('Yo this ready! (OFFICAL BOT)'));

client.on('disconnect', () => console.log('I just disconnected, making sure you know, I will reconnect now...'));

client.on('reconnecting', () => console.log('I am reconnecting now!'))

client.on('message', async msg => {
  
    const botmessage = msg.author.bot;
  
    if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) {
      return;
    } 
      
    let messageArray = msg.content.split(" ");
    let cmd = messageArray[0];
    cmd = cmd.slice(prefix.length);
    let args = messageArray.slice(1)

    try {

        let commandFile = require(`./commands/${cmd}.js`);
        commandFile.run(args, client, Util, prefix, msg, ErrorEmbedF, SucessEmbedF, PermissionIssueF, FourZeroFourErrorEmbedF, CurrancyNullEmbedF);

    } catch (e) {

        console.log(e);

    } finally {

        console.log(`${msg.author.username} ran the command: ${cmd} with it being passed onto the handler!`);

    }

}); 

client.login(process.env.TOKEN);