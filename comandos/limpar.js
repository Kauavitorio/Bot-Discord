const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
  
    return message.channel.send(
      `**⛔️ | Calma ai ${message.author}**\n**Você não permissão para apagar mensagem nesse server**\n**Permissão necessaria:** \`Gerenciar mensagens\`**!** `);
  const deleteCount = parseInt(args[0], 10);
  if (!deleteCount || deleteCount < 2 || deleteCount > 99)
    return message.channel.send(
      `🛑 | ${message.author} Insira um número de 2 até 99 para que as mensagens sejam excluidas`
    );

  const fetched = await message.channel.messages.fetch({
    limit: deleteCount + 1
  });
  message.channel.bulkDelete(fetched);
  message.channel
    .send(`Chat foi limpo por ${message.author}.`).then(msg => msg.delete({timeout: 600000}))
    .catch(error =>
      console.log(`Não foi possível deletar mensagens devido a: ${error}`)
    );
};


/*exports.run = (bit,message,args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sem permissão");
    let mensagemDeletar = args.slice(1).join("1")
    if(mensagemDeletar < 2 || mensagemDeletar > 100)return message.reply("Eu só posso deletar de 2 a 100 mensagem!");

    if(args.legth === 0) return message.reply("Utilize love.limpar <numero de mensagem>.");
    if(isNaN(args[0])) return message.reply("Você deve colocar um numero!");

    try{
        message.channel.bulkDelete(mensagemDeletar)
        message.channel.send(`Chat foi limpo por ${message.author}.`)
    }catch(e){
        console.log(e);
    }
}*/

exports.help = {
    name: "limpar",
    category: 'Função',
    description: 'Apenas pode ser utilizado por um administrador para limpar o chat do discord',
}