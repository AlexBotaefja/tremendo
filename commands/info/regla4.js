const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "regla4",
  aliases: [],
  description: "hola!",
  usage: "hola",
  run: async (client, message, args) => {
    //Start
    message.delete();

    const embed = new MessageEmbed()
      .setTitle(`Regla 4 <:_:1014350082214211615>`)
      .setColor(Color)
      .setDescription(`Evitemos hacer flood, es decir, el envío de mensajes sin sentido, el canto, el uso excesivo de emojis, el exceso de mayúsculas, etc. Para más información siempre puedes leer las <#1012880212524015650> <:_:1016362783933210716>`)
      .setFooter(`Solicitado por los Moderadores`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};