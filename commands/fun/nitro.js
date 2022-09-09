const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "nitro",
  aliases: [],
  description: "nitro fake!",
  usage: ">>nitro",
  run: async (client, message, args) => {
    //Start
    message.delete();

    if(message.channel.id !== '1016402710309916777') return message.reply("No puedes usar este comando en un canal que no sea <#1016402710309916777>")

        const embed = new Discord.MessageEmbed()
           .setTitle('Here is your Nitro')
           .setColor(0x5E9DE4)
           .setDescription('https://discord.gg/Kz8vTNtEJw')
           .setImage('https://cdn.discordapp.com/attachments/716917641209708647/748945266979242106/IMG_20200828_215650.jpg')

           message.channel.send(embed);
        
        
        }
 }
 