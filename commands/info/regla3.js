const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "regla3",
  aliases: [],
  description: "hola!",
  usage: "hola",
  run: async (client, message, args) => {
    //Start
    message.delete();

    const embed = new MessageEmbed()
      .setTitle(`Regla 3 <:_:1014350082214211615>`)
      .setColor(Color)
      .setDescription(` Los nombres y Avátares (foto de perfil) deben seguir las reglas de contenido del servidor. Esto significa que no deben romper ninguna otra regla, además de que no pueden ser invisibles, Lee las reglas <#1012880212524015650> <:_:1016362783933210716>`)
      .setFooter(`Solicitado por los Moderadores`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
