const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "howgay",
  aliases: [],
  description: "Mostrar cómo es el miembro gay!",
  usage: "Howgay <Mention Member>",
  run: async (client, message, args) => {
    //Start
    message.delete();

    if(message.channel.id !== '1016402710309916777') return message.reply("No puedes usar este comando en un canal que no sea <#1016402710309916777>")
    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let Result = Math.floor(Math.random() * 101);

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Maquina Gay 🙈`)
      .setDescription(`${Member.user.username} es ${Result}% Gay 🏳️‍🌈`)
      .setFooter(`Solicitado por ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};