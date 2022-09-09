const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "nuevo",
  aliases: [],
  description: "hola!",
  usage: "hola",
  run: async (client, message, args) => {
    //Start
    message.delete();

    const embed = new MessageEmbed()
      .setTitle(`Bienvenida <:_:1014350082214211615>`)
      .setColor(Color)
      .setDescription(`¡Hola! Te invito a que por favor leas las <#1012880212524015650> para tener una mejor convivencia en el servidor.<a:_:1013316019936296980>`)
      .setFooter(`Solicitado por los Moderadores`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
