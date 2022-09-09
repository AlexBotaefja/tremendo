const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
    name: "feliz",
    description: "Reporta un bug del bot",
    category: "Utilidad",
    aliases: [],

    run: async (client, message, args) => {
        

        
        const reporte = args.join(" ")
        if(!reporte) return  message.reply({ content: 'Les desea un lindo Lunes <@&1013155456308494336> <:_:1013159594861789204>'})

        const embed = new MessageEmbed()
        .setTitle('❌ | ¡Nuevo Mensaje')
        .setDescription(`Descripcion del reporte \n${reporte}\n\nReporte publicada por ${message.author.tag}`)
        .setColor(Color)
        .setTimestamp()
        .setFooter({ text: 'Un Reporte más'})

        client.channels.cache.get("1011703953286774859").send({
            content: '<@&1012960400779780126> nuevo dia!',
            embeds: [embed]
        })

        message.reply(`Feliz dia`).then(msg => {
            setTimeout(() => msg.delete(), 4000)
})



   }  
}