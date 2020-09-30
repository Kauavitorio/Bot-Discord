const Discord = require('discord.js');

exports.run = (bot,message,args) => {
    let prefix = config.prefix;
    let splitarg = args.join(" ").split(" /");
    if(!message.content.startsWith(prefix)) return;
    if(!message.member.hasPermission("MANAGE_MESSAGES")){
        return message.reply("🛑Você não tem permissão🛑");
    }
    if(args.length === 0){
        return message.reply("❗️ Utilize !anunciar **Titulo**  **anúncio** ❗️ ");
    }
    let aTitle = splitarg[0];
    let aAnnouncement = splitarg[0];
    if(!aAnnouncement){
        return message.reply("Coloque o anuncio!")
    }

    const aEmbed = new Discord.MessageEmbed()

    .setTimestamp()
    .setTitle(aTitle)
    .setColor("RAMDOM")
    .setDescription(aAnnouncement)
    .setFooter(`Enviando por: ${message.author.username}`,message.author.avatarURL);

    let aChannel = bot.channels.cache.get("753512941214498886");
    try{
    aChannel.send(aEmbed);
    }catch(error){
        console.log(error);
        message.channel.send(error);
    }
}

exports.help = {
    name: "anunciar",
    category: 'Função',
    description: 'Apenas pode ser utilizado por um administrador para fazer um anuncio',
}