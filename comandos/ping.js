const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  /*await message.channel.send("\`Realizando os 5 calculos de latencia\`");
  await message.channel.send("|Calculo 1...");
  await message.channel.send("|Calculo 1...OK|");
  await message.channel.send("|Calculo 2...");
  await message.channel.send("|Calculo 2...OK|");
  await message.channel.send("|Calculo 3...");
  await message.channel.send("|Calculo 3...OK|");
  await message.channel.send("|Calculo 4...");
  await message.channel.send("|Calculo 4...OK|");
  await message.channel.send("|Calculo 5...");
  await message.channel.send("|Calculo 5...OK|");
  await message.channel.send("**Apresentando...**");  
  message.channel.bulkDelete(12)*/
  message.channel.bulkDelete(1)
  const m = await message.channel.send("🏓Pong?");
    m.edit(`🏓**| ${message.author} Pong!**\n📡**| Latencia: **\`${m.createdTimestamp - message.createdTimestamp}ms\`\n**🔌| Latencia da API:** \`${Math.round(client.ws.ping)}ms\``);
}
exports.help = {
  name: "ping",
  category: 'Função',
  description: "Informa o seu ping com o bot",
  usage: "!ping",
  example: "!ping"
};

exports.conf = {
  aliases: ["beep"],
  cooldown: 5 // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
}
