const Discord = require('discord.js')
const db = require('quick.db')

var embedColors = ['C10AD', '1BA52C', 'F15802', '000000', '3D3D3D']
let color3 = '#' + embedColors[Math.floor(Math.random() * embedColors.length)];

exports.run = async (args, client, Util, prefix, msg, ErrorEmbedF, SucessEmbedF, PermissionIssueF, FourZeroFourErrorEmbedF, CurrancyNullEmbedF) => {

    let balance = await db.fetch(`candy_${msg.author.id}`)

    if (balance !== null) {
        ErrorEmbedF(msg);
    } else {

        const SetupCompleteEmbed = new Discord.RichEmbed()

            .setTitle("Setup Complete :clipboard:")
            .setDescription("The setup is now fully complete and **100** candy has been added onto your balance! The commands **.TrickOrTreat**, **.Daily** and **.Bal** as well as **.Give** have now been enabled on your account.")
            .setFooter("Offical Embed | Noir Nuit", "https://cdn.discordapp.com/attachments/496933555570606081/497423275429986304/Logo.png")
            .setColor(color3)

        msg.channel.send(SetupCompleteEmbed);

        db.set(`candy_${msg.author.id}`, 100);


    }
}