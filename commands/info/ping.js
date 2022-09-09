const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "ping",
  aliases: [],
  description: "Pong!",
  usage: "Ping",
  run: async (client, message, args) => {
    //Start
    message.delete();

    if(message.channel.id !== '1016402710309916777') return message.reply("No puedes usar este comando en un canal que no sea <#1016402710309916777>")


    const embed = new MessageEmbed()
      .setColor(Color)
      .setDescription(`🏓 Pong - ${client.ws.ping}`)
      .setFooter(`Requested By ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
