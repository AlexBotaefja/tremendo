const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
    name: "reportbug",
    description: "Reporta un bug del bot",
    category: "Utilidad",
    aliases: [],

    run: async (client, message, args) => {
        

        
        const reporte = args.join(" ")
        if(!reporte) return  message.reply({ content: 'Debes decir tu reporte'})

        const embed = new MessageEmbed()
        .setTitle('❌ | ¡Nuevo Reporte!')
        .setDescription(`Descripcion del reporte \n${reporte}\n\nReporte publicada por ${message.author.tag}`)
        .setColor(Color)
        .setTimestamp()
        .setFooter({ text: 'Un Reporte más'})

        client.channels.cache.get("1011703953286774859").send({
            content: '<@&1012960400779780126> ha llegado un nuevo reporte!',
            embeds: [embed]
        })

        message.reply(`Gracias por tu reporte los desarolladores lo van a mirar`).then(msg => {
            setTimeout(() => msg.delete(), 4000)
})



   }  
}
