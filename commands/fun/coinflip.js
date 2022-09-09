const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "coinflip",
  aliases: ["toss", "flip"],
  description: "Flip A Coin!",
  usage: "Coinflip",
  run: async (client, message, args) => {
    //Start
    message.delete();
    if(message.channel.id !== '1016402710309916777') return message.reply("No puedes usar este comando en un canal que no sea <#1016402710309916777>")
    const coins = ["Cara", "Cruz", "Centro"];

    let result = Math.floor(Math.random() * coins.length);

    const embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Coin es`)
      .setDescription(coins[result])
      .setFooter(`Volteado por ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};