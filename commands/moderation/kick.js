const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "kick",
  aliases: [],
  description: "Kick A Member!",
  usage: "Kick <Mention Member>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("KICK_MEMBERS"))
      return message.channel.send(
        `:x: No tiene permiso para usar este comando <:_:1016188858175594668>!`
      );

    let Member = message.mentions.users.first();

    if (!Member)
      return message.channel.send(
        `Por favor, mencione a un miembro que desea patear <:_:1016188858175594668>!`
      );

    if (!message.guild.members.cache.get(Member.id))
      return message.channel.send(`Por favor, mencione un miembro válido <:_:1013165359920054304>!`);

    if (Member.id === message.author.id)
      return message.channel.send(`No puedes patearte a ti mismo <:_:1013165359920054304>!`);

    if (Member.id === client.user.id)
      return message.channel.send(`No puedes patear bots <:_:1013165359920054304>!`);

    if (Member.id === message.guild.owner.user.id)
      return message.channel.send(`Los <@&1012960400779780126> No pueden expulsar al propietario del servidor <:_:1013165359920054304>!`);

    let Reason = args.slice(1).join(" ");

    let User = message.guild.member(Member);

    if (!User.kickable)
      return message.channel.send(`No puedo patear a ese miembro <:_:1013165359920054304>!`);

    try {
      console.log(`✅ Miembro va a recibir patada <:_:1013165359920054304>!`);

      setTimeout(function() {
        User.kick({ reason: `${Reason || "No Reason Provided!"}` });
      }, 2000);
      let embed = new Discord.MessageEmbed()
        .setColor(Color)
        .setTitle(`👢 Member Kicked!`)
        .addField(`-Moderator`, `${message.author.tag} (${message.author.id}`)
        .addField(`-Kicked Member`, `${Member.tag} (${Member.id})`)
        .addField(`-Reason`, `${Reason || "No Reason Provided!"}`)
        .setFooter(`Requested by ${message.author.username}`)
        .setTimestamp();
      if (User && Member.bot === false)
        Member.send(
          `Te han echado **${message.guild.name}** por ${Reason ||
            "No se proporciona ninguna razón!"}`
        );
      message.channel.send(embed);
      console.log(
        `User: ${Member.tag} (${Member.id}) Acabo de ser expulsado de ${
          message.guild.name
        } Por ${Reason || "No se proporciona ninguna razón!"}`
      );
    } catch (error) {
      return message.channel
        .send(
          `No puedo patear a ese miembro Tal vez el miembro tiene un papel más alto que yo y mi papel es más bajo que el miembro <:_:1016188858175594668>!`
        )
        .then(() => console.log(error));
    }

    //End
  }
};
