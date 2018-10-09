const Discord = require('discord.js');
const msg = require('./server.js');

function ErrorEmbedF(msg) {

    var embedColors = ['C10AD', '1BA52C', 'F15802', '000000', '3D3D3D']
    let color3 = '#' + embedColors[Math.floor(Math.random() * embedColors.length)];

    const ErrorEmbed = new Discord.RichEmbed()

        .setTitle("Unknown Error :warning:")
        .setDescription("If this is the first error you have encounted, please try running the command again. If there is still an error please contact our support team at **support@edevelopment-bots.freshdesk.com**.")
        .setFooter("Offical Embed | Noir Nuit", "https://cdn.discordapp.com/attachments/496933555570606081/497423275429986304/Logo.png")
        .setColor(color3)

    msg.channel.send(ErrorEmbed)

    .then(message => {
        message.delete(10000)
    })

}

function PermissionIssueF(msg) {

    var embedColors = ['C10AD', '1BA52C', 'F15802', '000000', '3D3D3D']
    let color3 = '#' + embedColors[Math.floor(Math.random() * embedColors.length)];

    const PermissionIssueEmbed = new Discord.RichEmbed()

        .setTitle("Permission Issue Error :warning:")
        .setDescription("If this is the first error you have encounted, please try running the command again. If there is still an error please contact our support team at **support@edevelopment-bots.freshdesk.com** or try asking a server admin to change your permissions!")
        .setFooter("Offical Embed | Noir Nuit", "https://cdn.discordapp.com/attachments/496933555570606081/497423275429986304/Logo.png")
        .setColor(color3)

    msg.channel.send(PermissionIssueEmbed)

    .then(message => {
        message.delete(10000)
    })

}

function SucessEmbedF(msg) {

    var embedColors = ['C10AD', '1BA52C', 'F15802', '000000', '3D3D3D']
    let color3 = '#' + embedColors[Math.floor(Math.random() * embedColors.length)];

    const SuccessEmbed = new Discord.RichEmbed()

        .setTitle("Sucess :white_check_mark:")
        .setDescription("All setup and ready. Enjoy using Noir Nuit!")
        .setFooter("Offical Embed | Noir Nuit", "https://cdn.discordapp.com/attachments/496933555570606081/497423275429986304/Logo.png")
        .setColor(color3)

    msg.channel.send(SuccessEmbed)

    .then(message => {
        message.delete(10000)
    })

}

function FourZeroFourErrorEmbedF(msg) {

    var embedColors = ['C10AD', '1BA52C', 'F15802', '000000', '3D3D3D']
    let color3 = '#' + embedColors[Math.floor(Math.random() * embedColors.length)];

    const FourZeroFourErrorEmbed = new Discord.RichEmbed()

        .setTitle("404 Error :warning:")
        .setDescription("If this is the first error you have encounted, please try running the command again. If there is still an error please contact our support team at **support@edevelopment-bots.freshdesk.com**.")
        .setFooter("Offical Embed | Noir Nuit", "https://cdn.discordapp.com/attachments/496933555570606081/497423275429986304/Logo.png")
        .setColor(color3)

    msg.channel.send(FourZeroFourErrorEmbed)

    .then(message => {
        message.delete(10000)
    })

}

function CurrancyNullEmbedF(msg) {

    var embedColors = ['C10AD', '1BA52C', 'F15802', '000000', '3D3D3D']
    let color3 = '#' + embedColors[Math.floor(Math.random() * embedColors.length)];

    const CurrancyNullEmbed = new Discord.RichEmbed()

        .setTitle("Setup :clipboard:")
        .setDescription("It's brilliant to see you here using **Noir Nuit**'s economy commands! It appears you haven't trick or treated yet, please say **.setup** to claim your free reward and set up your candy storage!")
        .setFooter("Offical Embed | Noir Nuit", "https://cdn.discordapp.com/attachments/496933555570606081/497423275429986304/Logo.png")
        .setColor(color3)

    msg.channel.send(CurrancyNullEmbed)

        .then(message => {
            message.delete(10000)
        })

}

module.exports = { CurrancyNullEmbedF, FourZeroFourErrorEmbedF, PermissionIssueF, SucessEmbedF, ErrorEmbedF };