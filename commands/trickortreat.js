const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms');
const ToTQ = ['Treat', 'Trick']

var embedColors = ['C10AD', '1BA52C', 'F15802', '000000', '3D3D3D']
let color3 = '#' + embedColors[Math.floor(Math.random() * embedColors.length)];

const treat = [
    { s: 'You visited a mansion and got :candy: **500**!', a: 500 },
    { s: 'Your friend dropped his candy and you stole :candy: **100**!', a: 100 },
    { s: 'Someone left some sweets on the side of the pavement and you decided to collect it! You gained :candy: **300**!', a: 300 },
    { s: 'You visited your school and they gave you :candy: **100**!', a: 100 },
    { s: 'Your parents gave you some of the sweets in your house and you took :candy: **700**!', a: 700 },
    { s: 'Your friend had too much candy in his bucket and gave you :candy: **50**!', a: 50 },
    { s: 'You visited a house and got :candy: **300**!', a: 300 },
    { s: 'You visited a house and got :candy: **500**!', a: 500 },
    { s: 'You visited a house and got :candy: **400**!', a: 400 },
    { s: 'You visited a house and got :candy: **100**!', a: 100 },
    { s: 'You visited a house and got :candy: **150**!', a: 150 },
    { s: 'You visited a house and got :candy: **75**!', a: 75 },
    { s: 'You visited a house and got :candy: **50**!', a: 50 },
    { s: 'You visited a house and got :candy: **200**!', a: 200 },
    { s: 'A homeless person gave you his last :candy: **80**!', a: 80 },
    { s: 'TheReal (my creator) gave you :candy: **1000**!', a: 1000 },
    { s: 'The child who was just at your house left their bucket! You took :candy: **600**!', a: 600 },
    { s: 'You saw your crush and she gave you :candy: **10**!', a: 10 },
    { s: 'The queen was up your street giving candy and she gave you :candy: **800**!', a: 800 },
    { s: 'You took part in the candy giveaway from Noir Nuit and won :candy: **650**!', a: 650 },
    { s: 'A creepy man gave you some candy, you did not want to take it but your friend told you to. You made :candy: **50** profit!', a: 50 },
    { s: 'The emergency services were giving out candy. You were given :candy: **500**!', a: 500 },
    { s: 'You submitted a survey and got :candy: **300** as a reward!', a: 300 },
    { s: 'You visited a shop and bought :candy: **150**!', a: 150 },
    { s: 'A random car driver threw :candy: **500** infront of you and your friend. You split it equally and got :candy: **250**!', a: 250 },
    { s: 'Someone gave you :candy: **500** but did not realise it was actually :candy: **700**!', a: 700 },
    { s: 'You entered a halloween sweet hunt and found :candy: **800**!', a: 800 },
    { s: 'At an event you attended, they threw sweets in the air and you caught :candy: **100**!', a: 100 },
    { s: 'You stole :candy: **200** from a friend.. what a nice friend you are!', a: 200 }
]

const trick = [
    { s: 'You were spooked by a decoration and lost :candy: **500**!', a: 500 },
    { s: 'You dropped some candy and your friend took it. You lost :candy: **100**!', a: 100 },
    { s: 'You were texting a friend and did not watch your candy, it was pickpocketed and you lost :candy: **300**!', a: 300 },
    { s: 'You were squirted by water and dropped :candy: **100**... rip!', a: 100 },
    { s: 'You were chased by a dog and left your bucket behind! You forgot to bring :candy: **700** with you!', a: 700 },
    { s: 'Your friend had too much candy in his bucked and gave you :candy: **50**!', a: 50 },
    { s: 'A bird swooped down and took :candy: **300**!', a: 300 },
    { s: 'A bird swooped down and took :candy: **500**!', a: 500 },
    { s: 'A bird swooped down and took :candy: **400**!', a: 400 },
    { s: 'A bird swooped down and took :candy: **100**!', a: 100 },
    { s: 'A bird swooped down and took :candy: **150**!', a: 150 },
    { s: 'A bird swooped down and took :candy: **75**!', a: 75 },
    { s: 'A bird swooped down and took :candy: **50**!', a: 50 },
    { s: 'A bird swooped down and took :candy: **200**!', a: 200 },
    { s: 'A homeless person stole :candy: **80** from you!', a: 80 },
    { s: 'TheReal (my creator) took :candy: **1000**! How cheeky!', a: 1000 },
    { s: 'You ran out of sweets at your house and had to use your own... in the end you lost :candy: **600**!', a: 600 },
    { s: 'You lost a bet and lost :candy: **10**!', a: 10 },
    { s: 'You lost a bet and lost :candy: **20**!', a: 20 },
    { s: 'You lost a bet and lost :candy: **40**!', a: 40 },
    { s: 'You lost a bet and lost :candy: **50**!', a: 50 },
    { s: 'You lost a bet and lost :candy: **100**!', a: 100 },
    { s: 'The queen was up your street giving candy and she gave you :candy: **800**!', a: 800 },
    { s: 'You took part in the candy giveaway from Noir Nuit and won :candy: **650**!', a: 650 },
    { s: 'A creepy man jumped out infront of you and you lost :candy: **50**!', a: 50 },
    { s: 'The emergency services were giving out candy. You were given :candy: **500**!', a: 500 },
    { s: 'A dog ran out of the house when you were getting candy and you left your whole bucket! You lost :candy: **300**!', a: 300 },
    { s: 'You slip in mud and you are really muddy ( :eyes: ) and as a punishment, your parents take away :candy: **150**!', a: 150 },
    { s: 'In someones garden, a spider drops from their window, wiping out :candy: **500**!', a: 500 },
    { s: 'A voice box in your neighbours garden triggered and you dropped :candy: **800**! The next child picked it up and you lost it.', a: 800 },
    { s: 'You got home and laid your sweets on the floor. Your *brilliant* dog came and ate them all. All :candy: **800** went!', a: 800 },
    { s: 'Your friend stole :candy: **200** from you.. what a nice friend!', a: 200 }
]

exports.run = async (args, client, Util, prefix, msg, ErrorEmbedF, SucessEmbedF, PermissionIssueF, FourZeroFourErrorEmbedF, CurrancyNullEmbedF) => {

    let balance = await db.fetch(`candy_${msg.author.id}`)

    if (balance === null) {
        CurrancyNullEmbedF(msg);
    } else {

        let cooldown = 3.6e+6;

        let lastToT = await db.fetch(`lastToT_${msg.author.id}`);

        if (lastToT !== null && cooldown - (Date.now() - lastToT) > 0) {

            let time = ms(cooldown - (Date.now() - lastToT));

            const SetupFailEmbed = new Discord.RichEmbed()

                .setTitle("Error :warning:")
                .setDescription(`Hold up! You can't go trick or treating again for **${time.hours}**h **${time.minutes}**m!`)
                .setFooter("Offical Embed | Noir Nuit", "https://cdn.discordapp.com/attachments/496933555570606081/497423275429986304/Logo.png")
                .setColor(color3)

            msg.channel.send(SetupFailEmbed)

        } else {

            const ToTQR = ToTQ[Math.floor(Math.random() * ToTQ.length)];
            db.set(`lastToT_${msg.author.id}`, Date.now());

            if (ToTQR === 'Trick') {

                const itemtri = trick[Math.floor(Math.random() * trick.length)];

                const tricke = new Discord.RichEmbed()

                    .setTitle("Trick! :skull:")
                    .setDescription(itemtri.s)
                    .setFooter("Offical Embed | Noir Nuit", "https://cdn.discordapp.com/attachments/496933555570606081/497423275429986304/Logo.png")
                    .setColor(color3)

                msg.channel.send(tricke)

                db.subtract(`candy_${msg.author.id}`, itemtri.a);

            } else if (ToTQR === 'Treat') {

                const itemtre = treat[Math.floor(Math.random() * treat.length)];

                const treate = new Discord.RichEmbed()

                    .setTitle("Treat! :tada:")
                    .setDescription(itemtre.s)
                    .setFooter("Offical Embed | Noir Nuit", "https://cdn.discordapp.com/attachments/496933555570606081/497423275429986304/Logo.png")
                    .setColor(color3)

                msg.channel.send(treate)

                db.add(`candy_${msg.author.id}`, itemtre.a);

            } else {

                FourZeroFourErrorEmbedF(msg);

            }
        }
    }
}