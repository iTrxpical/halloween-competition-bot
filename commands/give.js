const Discord = require('discord.js');
const db = require('quick.db');

var embedColors = ['C10AD', '1BA52C', 'F15802', '000000', '3D3D3D']
let color3 = '#' + embedColors[Math.floor(Math.random() * embedColors.length)];

exports.run = async (args, client, Util, prefix, msg, ErrorEmbedF, SucessEmbedF, PermissionIssueF, FourZeroFourErrorEmbedF, CurrancyNullEmbedF) => {
  
    if (!msg.mentions.users.first()) {

        console.log(`1`)
        return ErrorEmbedF(msg);

    } else if (!args[1]) {

      ErrorEmbedF(msg);
      
    } else {
      
    let balanceg = await db.fetch(`candy_${msg.author.id}`)
    let balancer = await db.fetch(`candy_${msg.mentions.users.first().id}`)

    if (balanceg === null) {

        CurrancyNullEmbedF(msg);

    } else if (balancer === null) {

        const CurrancyNullEmbedR = new Discord.RichEmbed()

            .setTitle("Error :warning:")
            .setDescription(`It appears the user (${msg.mentions.first()}) hasn't got a balance set up. Please ask them to say **.setup** or contact **support@edevelopment-bots.freshdesk.com** if there is a further issue.`)
            .setFooter("Offical Embed | Noir Nuit", "https://cdn.discordapp.com/attachments/496933555570606081/497423275429986304/Logo.png")
            .setColor(color3)

        msg.channel.send(CurrancyNullEmbedR);

    } else {
        
      
      
      
    }
}
}