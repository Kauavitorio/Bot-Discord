const Discord = require('discord.js');
const config = require("./config.json");
const fs = require("fs");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();


fs.readdir("./comandos/", (err,files) => {
    if(err) console.log(err);
    let arquivosjs = files.filter(f => f.split(".").pop() == "js");
    arquivosjs.forEach((f,i) => {
        let props = require(`./comandos/${f}`);
        console.log(`| Comando ${f} ✅|`);
        bot.commands.set(props.help.name,props);
    });
});



bot.on("ready",() => {
    let activities = [
        `Devs: Kauã|Rui`,
        ` ${config.prefix}help para ver a lista de comandos.`,
        `💜 Myepe`,
        //`${bot.users.cache.size} Usuários.`,
        `${config.prefix}tw para pegar o link da twitch de nossa querida MYEPE`,
        `🔨Site em desenvolvimento🔨`
        //`|🔴LIVEEE ON🔴|`
    ]
    i = 0;
    setInterval(() => bot.user.setActivity(`${activities[i++ % activities.length]}`,{
        type: "PLAYING",
        url: "https://www.twitch.tv/myepe"
    }), 7000); //WATCHING, LISTENING, PLAYING STREAMING
    bot.user
    .setStatus("online") //idle, dnd, online, invible
    console.log(`|🟢 ${bot.user.username} Esta online🟢|`);
});


/*bot.on('ready', () => {
    console.log(`|🟢 ${bot.user.username} Esta online🟢|`);
    bot.user.setActivity("Devs: Kauã|Rui ", {
        type: "DND",
        url: "https://www.twitch.tv/myepe"
      });
});*/


//STREAMING = para ficar em live
//PlAYING = para jogar


bot.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!message.content.startsWith(prefix)) return;
    let arquivocmd = bot.commands.get(command.slice(prefix.length));
    if(arquivocmd) arquivocmd.run(bot,message,args);

    
    //if(!message.content.startsWith(prefix)) return;
    /*if(command = `Salve`){
        message.channel.send(`Calmaaaa, ja estou ligando para o SAMU`);
    }*/

    

});

bot.login(config.token)
