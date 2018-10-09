const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms');

var embedColors = ['C10AD', '1BA52C', 'F15802', '000000', '3D3D3D']
let color3 = '#' + embedColors[Math.floor(Math.random() * embedColors.length)];

exports.run = async (args, client, Util, prefix, msg, ErrorEmbedF, SucessEmbedF, PermissionIssueF, FourZeroFourErrorEmbedF, CurrancyNullEmbedF) => {

    let balance = await db.fetch(`candy_${msg.author.id}`)
    if (balance === null) {
        CurrancyNullEmbedF(msg);
    } else {

        let cooldown = 8.64e+7;
        let candy = 250;

        let lastDaily = await db.fetch(`lastDaily_${msg.author.id}`);

        if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {

            let time = ms(cooldown - (Date.now() - lastDaily));

            const SetupFailEmbed = new Discord.RichEmbed()

                .setTitle("Error :warning:")
                .setDescription(`Your daily amount of candy has already been claimed! Please try again in **${time.hours}**h **${time.minutes}**m!`)
                .setFooter("Offical Embed | Noir Nuit", "https://cdn.discordapp.com/attachments/496933555570606081/497423275429986304/Logo.png")
                .setColor(color3)

            msg.channel.send(SetupFailEmbed)

        } else {

            db.set(`lastDaily_${msg.author.id}`, Date.now());
            db.add(`candy_${msg.author.id}`, 250);

            const SetupCompleteEmbed = new Discord.RichEmbed()

                .setTitle("Sucess :white_check_mark:")
                .setDescription("Your daily amount of candy has been claimed. Use your extra **250** candy wisely!")
                .setFooter("Offical Embed | Noir Nuit", "https://cdn.discordapp.com/attachments/496933555570606081/497423275429986304/Logo.png")
                .setColor(color3)

            msg.channel.send(SetupCompleteEmbed)

        }
    }
}