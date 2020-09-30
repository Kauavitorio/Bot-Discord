const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  let user;
  
  if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else if (args[0]) {
    user = message.guild.members.cache.get(args[0]).user;
  } else {
    user = message.author;
  }
  
  let avatar = user.displayAvatarURL({size: 4096, dynamic: true});
  // 4096 is the new biggest size of the avatar.
  // Enabling the dynamic, when the user avatar was animated/GIF, it will result as a GIF format.
  // If it's not animated, it will result as a normal image format.
  const embed = new Discord.MessageEmbed()
  .setColor('#9c00ff')
  .setTitle(`${user.tag}`)
  .setDescription(`**Clique [aqui](${avatar}) para baixar o avatar!**`)
  .setColor(0x1d1d1d)
  .setImage(avatar)
  message.channel.bulkDelete(1)
  return message.channel.send(`${message.author}`,embed);
}

exports.help = {
  name: "avatar",
  category: 'Avatar',
  description: "Mostrar o avatar da pessoa desejada",
  usage: "-avatar [@user | user ID]",
}

exports.conf = {
  aliases: ["icon", "pfp", "ava"],
  cooldown: 5
}