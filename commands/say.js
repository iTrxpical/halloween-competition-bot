const Discord = require('discord.js')

exports.run = (args, client, Util, prefix, msg, ErrorEmbedF, SucessEmbedF, PermissionIssueF, FourZeroFourErrorEmbedF, CurrancyNullEmbedF) => {
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) return PermissionIssueF;
    msg.delete().catch();
    let botmessage = args.join(" ");
    msg.channel.send(botmessage);
}