const Discord = require('discord.js')
const moment = require('moment')

moment.locale('pt-br')

module.exports = {

  run: function (bot, message, args) {
    const inline = true
    const botAvatar = ('https://cdn.discordapp.com/icons/476647620752703488/7e035d80a523369a0e510a3cc7edbb02.png?size=2048')
    const date = bot.user.createdAt
    const userName = bot.user.username
    const servsize = bot.guilds.size
    const usersize = bot.users.size
    const status = {
      online: '`🟢` Online',
      offline: '`⚫` Offline'
    }

    
    const embed = new Discord.MessageEmbed()
      .setColor(bot.displayHexColor === '#000000' ? '#ffffff' : bot.displayHexColor)
      .setColor('#9c00ff')
      .setThumbnail(botAvatar)
      .setAuthor('💜 Minhas Informações 💜')
      .addField('**Meu nick**', userName)
      .addField('**Meu ID**', bot.user.id)
      .addField('**Servidor**', `🛡 Myepezinha`, true)
      .addField('**Usuários**', `${message.guild.memberCount}`, inline)
      .addField('**Desenvolvedor**',`Kauã | Rui`, true)
      .setFooter(`2020 © ${bot.user.username}.💜`)
      .setTimestamp()
      message.channel.bulkDelete(1)

    if (bot.user.presence.status) {
      embed.addField(
        '**Status**',
        '🟢 | Online',
       // `${status[bot.user.presence.status]}`,
        inline,
        true
      )
    }

    message.channel.send(embed)
  },

  conf: {},

  get help () {
    return {
      name: 'botinfo',
      category: 'Info',
      description: 'Mostra informações do boot.',
      usage: 'botinfo'
    }
  }
}
/**
 * Formata a data passada para o padrão do Brasil.
 * @param {string} template
 * @param {Date=} [date]
 * @return {string}
 */
function formatDate (template, date) {
  var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
  date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
  return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
    return template.split(specs[i]).join(item)
  }, template)
}