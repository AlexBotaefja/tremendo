const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix, BotName } = require("../../config.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Help Command!",
  usage: "Help | <Command Name>",
  run: async(client, message, args) => {
    
    message.delete();

    
    let embed = new MessageEmbed()
    .setColor(Color)
    .setTitle(`<a:_:1016355794226249819> Lista de comandos:`)
    .setAuthor(`${BotName} - Menú de Ayuda`, 'https://media.discordapp.net/attachments/922145225491767346/922539704996491264/2021-12-20_18_11_11-Window.png', 'https://discord.gg/7zrFC2NPrd')
    .setDescription(`**Commands:**Use ${Prefix}Help <Command Name> Para obtener más información sobre los comandos <:_:1013171440348049458>!` + `\n\n**Prefix:** ${Prefix}` + "\n\n<a:_:1013161121324212364> __Entretenimiento:__\n```yml\nascii: Generar un texto ascii divertido!\navatar: Muestra tu avatar de discord!\nsay: El bot copia lo que escribes\ncloinflip: Cabeza o colas?\nhack: Hackear a alguien!\nhowgay: Pruebe a un usuario qué tan gay es!\nmeme: Mostrar un meme aleatorio!\nrandomnumber: Acaba de aparecer un número aleatorio!\nrate: El bot calificará algo!\n```" + "\n\n" + "<a:_:1016186347230343238> __Moderacion:__\n```yml\nban: Banear a alguien en el servidor!\nclear: Clear/Eliminar una serie de mensajes!\nkick: Patear a un miembro!\nmute: Silenciar un interruptor de reglas!\nunban: Desbanear a alguien del servidor!\nunmute: Deje que el miembro vuelva a chatear!\nwarn: En mantenimiento ⚒!\nwarnings: En mantenimiento ⚒!\n```" + "\n\n"+
    "<:_:1014350082214211615> __Informacion:__\n```yml\nhelp: Mostrar el menu de ayuda!\nping: Comprobar el estado de respuesta del bot!\nserverinfo: Leer la información del servidor!\nredes: Apareceran las redes sociales de Gracie\nuserinfo: Leer la información del usuario!\nweather: Consulta el tiempo en tu país!\n```")
    .setFooter(`Solicitado por ${message.author.username}`)
    .setTimestamp();
    
    if (!args.length) return message.channel.send(embed);

    let cmd =
      client.commands.get(args[0].toLowerCase()) ||
      client.commands.get(client.aliases.get(args[0].toLowerCase()));

    let embed2 = new MessageEmbed()
      .setColor(Color)
      .setTitle(`${cmd.name} Informacion!`)
      .addField(`Aliases`, cmd.aliases || "None!")
      .addField(`Usage`, cmd.usage || "No Usage")
      .addField(`Description`, cmd.description || "No Description!")
      .setTimestamp();

    if (cmd) {
      return message.channel.send(embed2);
    } else {
      return message.channel.send(embed);
    }
  }
};
