const Discord = require("discord.js");

module.exports = {
    name: "say",
    aliases: [],
    description: "!",
    usage: ">>say (texto)",
    run: async (client, message, args) => {

        const escribe = args.slice(0).join(' ')
        if(!escribe) return message.channel.send("No especificastes el texto a decir <:_:1014350082214211615>")
        message.delete()
        message.channel.send(escribe)

        }
    }