const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "clear",
  aliases: ["purge", "clearmsgs"],
  description: "Clear Your Messages!",
  usage: "Clear <Message Amount>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        "No tiene permiso para usar este comando <:_:1016188858175594668>!"
      );

    if (!args[0])
      return message.channel.send(`Por favor, dame cantidades de mensajes <:_:1016188858175594668>!`);

    if (isNaN(args[0]))
      return message.channel.send(`Por favor, dame el valor del número <:_:1016188858175594668>!`);

    if (args[0] < 4)
      return message.channel.send(
        `<a:_:1016357640630177933> Puede eliminar ${args[0]} Por ti mismo no son demasiados mensajes!`
      );

    if (args[0] > 100)
      return message.channel.send(
        `No puedo eliminar ${args[0]} Debido al límite de discord <:_:1016188858175594668>!`
      );

    let Reason = args.slice(1).join(" ") || "No se proporciona ninguna razón!";

    message.channel.bulkDelete(args[0]).then(Message => {
      let embed = new Discord.MessageEmbed()
        .setColor(Color)
        .setTitle(`<a:_:1016359199350992987> Messages Deleted!`)
        .addField(`-Moderator`, `${message.author.tag} (${message.author.id}`)
        .addField(`-Channel`, `${message.channel.name} (${message.channel.id}`)
        .addField(`-Deleted Messages`, `${Message.size}`)
        .addField(`-Reason`, `${Reason}`)
        .setFooter(`Requested by ${message.author.username}`)
        .setTimestamp();
      return message.channel
        .send(embed)
        .then(msg => msg.delete({ timeout: 1000 }));
    });

    //End
  }
};