const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "oa",
    description: "Reporta un bug del bot",
    category: "info",
    aliases: [],

    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setTitle("Es Hola no oa")
        .setDescription("Tengas un lindo dia")

        message.channel.send("Es Hola no oa <:_:1013158462236143728>")


      }  

}      