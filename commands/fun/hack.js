const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "hack",
  aliases: [],
  description: "Hack Member!",
  usage: "Hack <Mention Member>",
  run: async (client, message, args) => {
    //Start
    message.delete();

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    if (!Member)
      return message.channel.send(
        `Por favor, mencione un miembro que desea hackear!`
      );

    if (Member.user.id === message.author.id)
      return message.channel.send(`No puedes hackearte a ti mismo <:_:1013165359920054304>!`);

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Estado del hackeo: Completado`)
      .setDescription(
        `Name: ${Member.user.username} | ID: ${
          Member.user.id
        }`
      )
      .setFooter(`Jk no te lo tomes en serio sus cadenas generadas al azar!`)
      .setTimestamp();

    await message.channel.send(`¡Comenzó la piratería! Hacking ${Member.user.username}`);

    await message.channel.send(`Estado del hackeo: 10%`);

    await message.channel.send(`Estado del hackeo: 20%`);

    await message.channel.send(`Estado del hackeo: 30%`);

    await message.channel.send(`Estado del hackeo: 40%`);

    await message.channel.send(`Estado del hackeo: 50%`);

    await message.channel.send(`Estado del hackeo: 60%`);

    await message.channel.send(`Estado del hackeo: 70%`);

    await message.channel.send(`Estado del hackeo: 80%`);

    await message.channel.send(`Estado del hackeo: 90%`);

    setTimeout(function() {
      message.channel.send(embed);
    }, 5000);

    //End
  }
};