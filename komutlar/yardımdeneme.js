const Discord = require("discord.js");

exports.run = function(client, message) {
  let botismi = "Rolly Bot";
  const yardım = new Discord.MessageEmbed()
    .setColor("#010000")
    .addField(`${botismi} Yardım Menüsü`)
    .setDescription(
      `
r!moderasyon : moderasyon komutlarını gösterir
r!eglence : eglence komutlarını gösterir
r!uptime : uptime komutlarını gösterir
r!koruma : koruma komutlarını gösterir
r!kullanıcı : kullanıcı komutlarını gösterir
r!müzik : müzik komutlarını gösterir
vb. şekilde kafanıza göre yaparsınız burayı`
    )
    .setImage("");
  message.channel.send(yardım);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Yardım Menüsünü Gösterir",
  usage: "{prefix}yardım"
};
