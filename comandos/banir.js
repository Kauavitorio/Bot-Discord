const Discord = require('discord.js');

exports.run = (bot,message,args) => {

    var membro = message.mentions.members.first()|| message.guild.members.cache.get(args[0]);
    if(membro === message.member) return message.reply(`Você não pode banir você mesmo`)
    if(!membro) return message.reply(`Mencione um usuario!`)
    var motivo = args.slice(1).join("");
    if(!motivo) return message.reply(`Escreva o motivo!`)
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`Você não tem permissão para banir um usuário`)

    var canal = bot.channels.cache.get("753512941214498886");

    let user;
  
  if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else if (args[0]) {
    user = message.guild.members.cache.get(args[0]).user;
  } else {
    user = message.author;
  }
    let avatar = user.displayAvatarURL({size: 4096, dynamic: true});
    message.channel.send(`**Quer realmente BANIR esse usuário** **${membro}**?`).then(msg => {
        msg.react("✅")

        let filtro = (reaction,usuario) => reaction.emoji.name === "✅" && usuario.id === message.author.id;
        let coletor = msg.createReactionCollector(filtro,{max: 1})

        coletor.on("collect",cp => {
            const embed = new Discord.MessageEmbed()
    

    .setColor(bot.displayHexColor === '#000000' ? '#ffffff' : bot.displayHexColor)
      // .setThumbnail(message.guild.iconURL)
      .setColor('#9c00ff')
      .setThumbnail(`${avatar}`)
      .setAuthor(`🛑 Usuário BANIDO do servidor 🛑`,'https://cdn.discordapp.com/icons/476647620752703488/7e035d80a523369a0e510a3cc7edbb02.png?size=2048')
      .addField('**Nome**', membro.user.username, true)
      .addField('**👨🏽‍💻 ID**', membro.user.id, true)
      .addField('**🛡 Servidor**','Myepezinha')
      .setFooter('2020 © Myepezinha. 💜','https://cdn.discordapp.com/icons/476647620752703488/7e035d80a523369a0e510a3cc7edbb02.png?size=2048')
      .setTimestamp()
      message.channel.bulkDelete(2)
      membro.ban();

    message.channel.send(embed);

            /*cp.remove(message.author.id);
            canal.send(`**MEMBRO BANIDO COM SUCESSO**\n \nMembro: \`${membro.user.username}\`\nMotivo: ${motivo}`)
            membro.ban();*/
        })
    });
}

exports.help = {
    name: "banir",
    category: 'Função',
    description: "Apenas pode ser utilizado por um administrador para banir usuários",
  }