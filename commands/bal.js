const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (args, client, Util, prefix, msg, ErrorEmbedF, SucessEmbedF, PermissionIssueF, FourZeroFourErrorEmbedF, CurrancyNullEmbedF) => {

    msg.delete()

    let user = msg.author;
    let balance = await db.fetch(`candy_${msg.author.id}`)
    if (balance === null) {
        CurrancyNullEmbedF(msg);
    } else {
        const embed = new Discord.RichEmbed()
            .setAuthor("Balance Of " + msg.author.tag, msg.author.avatarURL)
            .setDescription(":candy: **" + balance + "**")
            .setColor("RANDOM")
        msg.channel.send(embed)
    }
}