const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");
const fetch = require("node-fetch");

module.exports = {
  name: "meme",
  aliases: [],
  description: "Send A Meme!",
  usage: "Meme",
  run: async (client, message, args) => {
    //Start
    message.delete();

    if(message.channel.id !== '1016402710309916777') return message.reply("No puedes usar este comando en un canal que no sea <#1016402710309916777>")
    fetch("https://meme-api.herokuapp.com/gimme")
      .then(res => res.json())
      .then(json => {
        let embed = new MessageEmbed()
          .setColor(Color)
          .setTitle(`${json.title}`)
          .setURL(json.postLink)
          .setImage(json.url)
          .setFooter(`From /r/${json.subreddit}`);

        message.channel.send(embed);
      });

    //End
  }
};