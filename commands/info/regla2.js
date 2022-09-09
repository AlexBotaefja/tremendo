const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "regla2",
  aliases: [],
  description: "hola!",
  usage: "hola",
  run: async (client, message, args) => {
    //Start
    message.delete();

    const embed = new MessageEmbed()
      .setTitle(`Regla 2 <:_:1014350082214211615>`)
      .setColor(Color)
      .setDescription(`No hagas spam de ningun tipo, si lo haces reciviras una advertencia, y si lo sigues haciendo seras baneado permanententemente del servidor, Lee las reglas <#1012880212524015650> <:_:1016362783933210716>`)
      .setFooter(`Solicitado por los Moderadores`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
