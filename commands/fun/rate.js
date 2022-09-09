const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "rate",
  aliases: [],
  description: "Bot Rate Your Given Thing!",
  usage: "Rate <Text>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    if(message.channel.id !== '1016402710309916777') return message.reply("No puedes usar este comando en un canal que no sea <#1016402710309916777>")
    let Content = args.join(" ");

    if (!Content)
      return message.channel.send(`Por favor, dame algo para calificar!`);

    let embed = new Discord.MessageEmbed()
      .setColor(Color)
      .setTitle(`I Rate`)
      .setDescription(`${Math.floor(Math.random() * 11)}/10 To ${Content}`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};