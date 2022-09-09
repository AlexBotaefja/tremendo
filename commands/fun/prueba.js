const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "redes",
  aliases: [],
  description: "Redes sociales de Gracie!",
  usage: ">>redes",
  run: async (client, message, args) => {
    //Start
    message.delete();

        const embed = new Discord.MessageEmbed()
           .setTitle('♡ REDES ♡')
           .setColor(0x5E9DE4)
           .setDescription('Sigue y apoya a GracieBon en todas sus redes sociales oficiales\n\n<a:_:1013294334717730867> **Instagram:**\nhttps://www.instagram.com/graciebon/\n\n<a:_:1013294385200373811> **Twitch:**\nhttps://www.twitch.tv/graciebon1\n\n<a:_:1013294306200670278> **TikTok:**\nhttps://www.tiktok.com/@graciebon1\n\n<a:_:1013294415135121438> **Youtube:**\nhttps://cutt.ly/nX2fbys\n\n<a:_:1013296517815222293> **Twitter:**\nhttps://twitter.com/graciebon1')
           .setAuthor(client.user.username, client.user.avatarURL())
           .setColor('#8423c2')
           .setThumbnail('https://cdn.discordapp.com/attachments/1011703953286774859/1012950950232735765/gracie.png')
           .setImage('https://cdn.discordapp.com/attachments/1011703953286774859/1012950950232735765/gracie.png')
           .setFooter('Solicitado por: '+message.member.displayName, message.author.avatarURL())
           .setTimestamp()
           //NOMBRE DEL BOT: client.user.username
           //AVALAR DE BOT: client.user.avatarURL()
           //NOMBRE DE USUARIO: message.member.displayName
           //AVATAR DE USUARIO: message.author.avatarURL()
         message.channel.send(embed);
        
        
       }
}
        