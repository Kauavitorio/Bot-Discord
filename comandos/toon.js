const Discord = require('discord.js');

exports.run = (bot, message,args) => {
   //message.channel.send(`Oi, eu sou o bot ${bot.user.username}!`);
   if(!message.member.hasPermission("MANAGE_MESSAGES")){
    return message.reply("❌ Você não tem permissão ❌");
}
    message.channel.bulkDelete(1)
   message.channel.send(`💜 To on chega maiiis: https://www.twitch.tv/myepe @everyone`)
   //message.channel.send(`QQ ta acontecendo aqui doido?`);

}

exports.help = {
    name: "toon",
    category: 'Informação',
    description: 'Apenas pode ser utilizado por um administrador para notificar quando a live estiver começado',
}