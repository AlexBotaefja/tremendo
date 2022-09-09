const Discord = require("discord.js");

module.exports = {
    name: "md",
    aliases: [],
    description: "!",
    usage: "manda md",
    run: async (client, message, args) => {

        message.delete();

        if(message.author.id !== "946204623490912256") return message.channel.send("<a:_:1016357640630177933> Tu no eres el developer del bot")
        const userID = args[0]
        if(!userID) return message.channel.send("<a:_:1016357640630177933> Pon un ID valido o menciona a un usuario")
        const user = message.mentions.members.first() || message.guild.members.cache.get(userID)
        const mensaje = args.slice(1).join(" ")
        if(!mensaje) return message.reply("Porfavor pon texto <:_:1014350082214211615>")
        if(!user) return message.reply("No se encontro el usuario <a:_:1016358279938588672>")

        user.send(mensaje)
        message.channel.send("Mensaje enviado correctamente <a:_:1016359199350992987>")
    }

}    