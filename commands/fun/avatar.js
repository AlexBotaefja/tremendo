const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "avatar",
  aliases: ["icon", "pfp"],
  description: "Show Member Avatar!",
  usage: "Avatar | <Mention Member>",
  run: async (client, message, args) => {
    //Start
    message.delete();

    if(message.channel.id !== '1016402710309916777') return message.reply("No puedes usar este comando en un canal que no sea <#1016402710309916777>")
    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let embed = new Discord.MessageEmbed()
      .setColor(Color)
      .addField(
        "Links",
        `[png](${Member.user.displayAvatarURL({
          format: "png",
          dynamic: true
        })}) | [jpg](${Member.user.displayAvatarURL({
          format: "jpg",
          dynamic: true
        })}) | [webp](${Member.user.displayAvatarURL({
          format: "webp",
          dynamic: true
        })})`
      )
      .setImage(Member.user.displayAvatarURL({ dynamic: true }))
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};