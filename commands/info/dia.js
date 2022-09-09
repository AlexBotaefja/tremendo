const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "dia",
    description: "Reporta un bug del bot",
    category: "info",
    aliases: [],

    run: async (client, message, args) => {
        message.delete();
        const embed = new Discord.MessageEmbed()
        .setTitle("Feliz Martes")
        .setDescription("Tengas un lindo dia")

        message.channel.send("Hola <@&1013155456308494336> tengan un lindo Jueves <:_:1013159594861789204>")


      }  

}      