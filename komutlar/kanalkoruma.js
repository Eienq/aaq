const db = require("quick.db");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "prefixler!";
  
if (message.author.id !== "544635503950037019")
   if (message.author.id !== "715967448662147103")
   if (message.author.id !== "382514556595077122")return;
  
  if (!args[0]) {
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setTitle("Kanal Koruma sistemi!")
      .setDescription(
        "**Hatalı kullanım! örnek: -kanal-koruma aç && kapat**"
      );

    message.channel.send(embed);
    return;
  }
  let kanal = await db.fetch(`kanalk_${message.guild.id}`);
  if (args[0] == "aç") {
    if (kanal) {
      const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setTitle("Kanal Koruma sistemi!")
        .setDescription("**Dostum Zaten Kanal Koruma Sistemi Aktif !!**");

      message.channel.send(embed);
      return;
    } else {
      db.set(`kanalk_${message.guild.id}`, "acik");
      const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setTitle("Kanal Koruma sistemi!")
        .setDescription("**Kanal Koruma Sistemi Aktif Halde Silinen Kanalları Tekrar Açacağım Ve Size Bildiriceğim !**");

      message.channel.send(embed);
    }
  } else if (args[0] == "kapat") {
    db.delete(`kanalk_${message.guild.id}`);
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setTitle("Kanal Koruma sistemi!")
      .setDescription("**Kanal Koruma Sistemi Kapatıldı !**");

    message.channel.send(embed);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
  kategori: "koruma"
};

exports.help = {
  name: "kanal-koruma",
  description: "Rol koruma",
  usage: "kanal-koruma"
};   