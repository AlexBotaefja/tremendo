const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "regla1",
  aliases: [],
  description: "hola!",
  usage: "hola",
  run: async (client, message, args) => {
    //Start
    message.delete();

    const embed = new MessageEmbed()
      .setTitle(`Regla 1 <:_:1014350082214211615>`)
      .setColor(Color)
      .setDescription(`Usa los canales para sus respectivas funciones no uses <#1012986282311434310> como si fuera un chat general lee las <#1012880212524015650> <:_:1016362783933210716>`)
      .setFooter(`Solicitado por los Moderadores`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
