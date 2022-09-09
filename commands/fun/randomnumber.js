const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "randomnumber",
  aliases: ["rn"],
  category: "fun",
  description: "Get Random Number!",
  usage: "Randomnumber",
  run: async (client, message, args) => {
    //Start
    message.delete();
    if(message.channel.id !== '1016402710309916777') return message.reply("No puedes usar este comando en un canal que no sea <#1016402710309916777>")
    let result = Math.floor(Math.random() * 101);

    const embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Tu numero aleatorio es`)
      .setDescription([result])
      .setFooter(`1 - 100`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};