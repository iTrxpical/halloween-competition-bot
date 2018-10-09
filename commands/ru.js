const Discord = require('discord.js')
const db = require('quick.db')

var embedColors = ['C10AD', '1BA52C', 'F15802', '000000', '3D3D3D']
let color3 = '#' + embedColors[Math.floor(Math.random() * embedColors.length)];

exports.run = async (args, client, Util, prefix, msg, ErrorEmbedF, SucessEmbedF, PermissionIssueF, FourZeroFourErrorEmbedF, CurrancyNullEmbedF) => {

    if (msg.author.id !== '255048840615428107') {
        PermissionIssueF(msg);
    } else {

        if (!msg.mentions.users.first()) {

            ErrorEmbedF(msg);

        } else {

            let balance = await db.fetch(`candy_${msg.mentions.users.first().id}`)

            if (balance === null) {
                ErrorEmbedF(msg);
            } else {

                let userID = msg.mentions.users.first().id
              
                db.delete(`candy_${userID}`);
                db.delete(`lastDaily_${userID}`);
                db.delete(`lastToT_${userID}`);

                const balanceReset = new Discord.RichEmbed()

                    .setTitle("Balance Reset :white_check_mark:")
                    .setDescription(`${msg.mentions.users.first()}` + "'s balance has been reset sucesfully!")
                    .setFooter("Offical Embed | Noir Nuit", "https://cdn.discordapp.com/attachments/496933555570606081/497423275429986304/Logo.png")
                    .setColor(color3)

                msg.channel.send(balanceReset);

            }
        }
    }
}