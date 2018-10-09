const Discord = require('discord.js')

exports.run = (args, client, Util, prefix, msg, ErrorEmbedF, SucessEmbedF, PermissionIssueF, FourZeroFourErrorEmbedF, CurrancyNullEmbedF) => {

    function clean(text) {
        if (typeof (text) === "string")
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
    }

    if (msg.author.id !== '255048840615428107') return PermissionIssueF(msg);
    try {
        const code = args.join(" ");
        let evaled = eval(code);

        if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);
    } catch (err) {
        msg.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }

}