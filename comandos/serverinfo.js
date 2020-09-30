const Discord = require('discord.js');
const moment = require('moment');
moment.locale('pt-br')

exports.run = (bot,message,args) => {
    let gAvatar = message.guild.iconURL;
    const embed = new Discord.MessageEmbed()
    

    .setColor(bot.displayHexColor === '#000000' ? '#ffffff' : bot.displayHexColor)
      // .setThumbnail(message.guild.iconURL)
      .setColor('#9c00ff')
      .setThumbnail('https://cdn.discordapp.com/icons/476647620752703488/7e035d80a523369a0e510a3cc7edbb02.png?size=2048')
      .setAuthor(`💜 Informações do servidor ${message.guild.name} 💜`,'https://cdn.discordapp.com/icons/476647620752703488/7e035d80a523369a0e510a3cc7edbb02.png?size=2048')
      .addField('**Nome**', message.guild.name, true)
      .addField('**👨🏽‍💻ID**', message.guild.id, true)
      .addField('**👑Dona**', `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
      .addField('**🛡Servidor**','Myepezinha')
      .addField('**🌌Região**', message.guild.region, true)
      .addField('**Humanos | Bots**',message.guild.memberCount,true)
      .addField('**📜Canais**','**21** [Texto]\n**16** [Voz]')
      .addField('**Cargos**', true)
      .addField('**📅Criado em**',`8 de Aug, 2018 às 04:07`,true)
      .addField('**🏮Meu canal da Twitch foi criado em **',`Ainda estou levantando esta informação...`)
      //.addField('**Você entrou em**', moment(message.member.joinAt).format('LLL'))
      .setFooter('2020 © Myepezinha.💜','https://cdn.discordapp.com/icons/476647620752703488/7e035d80a523369a0e510a3cc7edbb02.png?size=2048')
      .setTimestamp()

    message.channel.send(embed);
}

exports.help = {
    name: "serverinfo",
    category: 'Ajuda',
      description: 'Mostra todas informaçoes do servidor.',
      usage: 'help'
}