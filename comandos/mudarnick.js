const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  
  // You can make a single array to detect the user permissions.
  if (!message.member.hasPermission(["MANAGE_GUILD", "ADMINISTRATOR"])) {
    return message.channel.send({embed: {color: "RED", description: "Você não pode usar esse comando!!"}})
  }
  
  let user = message.mentions.users.first(); // You can mention someone, not only just user.
  if (!user) return message.channel.send({embed: {color: "RED", description: "Você precisa mencionar a pessoa"}});
  
  let nick = args.slice(1).join(" ");
  if (!nick) return message.channel.send({embed: {color: "RED", description: "Você precisa colocar o novo nickname!"}});
  
  let member = message.guild.members.cache.get(user.id);
  await member.setNickname(nick).catch(error => message.channel.send({embed: {color: "RED", description: `Error: ${error}`}}));
  return message.channel.send({embed: {color: "GREEN", description: `Mudado com sucesso **${user.tag}** novo nickname é **${nick}**`}});
}

exports.help = {
  name: "mudarnick",
  description: "Set a user nickname.",
  usage: "-setnickname <@user> <nick>",
  example: "-setnickname @ray#9999 hoisted"
}

exports.conf = {
  aliases: ["setnick"],
  cooldown: 5
}