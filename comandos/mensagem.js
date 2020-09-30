const Discord = require('discord.js');

exports.run = (bot, message,args) => {
   //message.channel.send(`Oi, eu sou o bot ${bot.user.username}!`);
   message.channel.bulkDelete(1)
   message.channel.send(`💜 https://www.twitch.tv/myepe 💜`);
   //message.channel.send(`QQ ta acontecendo aqui doido?`);
}

exports.help = {
    name: "tw",
    category: 'Aleatorio',
    description: 'Utilizado para gerar uma mensagem automáticaa',
}