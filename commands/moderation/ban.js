const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "ban",
  aliases: [],
  description: "Ban A Member!",
  usage: "Ban <Mention Member>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(
        `<a:_:1016357640630177933> No tiene permiso para usar este comando <a:_:1016186347230343238>!`
      );

    let Member = message.mentions.users.first();

    if (!Member)
      return message.channel.send(
        `<a:_:1016357640630177933> Por favor, mencione a un miembro que desea banear <a:_:1016186347230343238>!`
      );

    if (!message.guild.members.cache.get(Member.id))
      return message.channel.send(`<a:_:1016357640630177933> Por favor, mencione un miembro válido! <a:_:1016186347230343238>`);

    if (Member.id === message.author.id)
      return message.channel.send(`<a:_:1016357640630177933> No puedes banearte a ti mismo <a:_:1016186347230343238>!`);

    if (Member.id === client.user.id)
      return message.channel.send(`<a:_:1016357640630177933> No se pueden banear los bots <a:_:1016186347230343238>!`);

    if (Member.id === message.guild.owner.user.id)
      return message.channel.send(`<a:_:1016357640630177933> No se puede banear el propietario del servidor <a:_:1016186347230343238>!`);

    let Reason = args.slice(1).join(" ");

    let User = message.guild.member(Member);

    if (!User.bannable) return message.channel.send(`<a:_:1016357640630177933> No puedo banear a ese miembro <a:_:1016186347230343238>!`);

    try {
      console.log(`✅ Miembro va a ser baneado!`);
      setTimeout(function() {
        User.ban({ reason: `${Reason || "No se proporciona ninguna razón!"}` });
      }, 2000);
      let embed = new Discord.MessageEmbed()
        .setColor(Color)
        .setTitle(`🔨 ¡Miembro baneado!`)
        .addField(`-Moderator`, `${message.author.tag} (${message.author.id}`)
        .addField(`-Banned Member`, `${Member.tag} (${Member.id})`)
        .addField(`-Reason`, `${Reason || "No se proporciona ninguna razón!"}`)
        .setFooter(`Requested by ${message.author.username}`)
        .setTimestamp();
      if (User && Member.bot === false)
        Member.send(
          `<a:_:1016358279938588672> Se le ha baneado **${message.guild.name}** por ${Reason ||
            "No se proporciona ninguna razón!"}`
        );
      message.channel.send(embed);
      console.log(
        `User: ${Member.tag} (${Member.id}) Acabo de ser baneado de ${
          message.guild.name
        } por ${Reason || "No se proporciona ninguna razón!"}`
      );
    } catch (error) {
      return message.channel
        .send(
          ` No puedo prohibir a ese miembro Tal vez el miembro tiene un papel más alto que yo y mi papel es más bajo que el miembro <:_:1013158601386360882>!`
        )
        .then(() => console.log(error));
    }

    //End
  }
};
