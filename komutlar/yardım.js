const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('BLACK')
.setAuthor(`Rolly Code Guard Altyapısı`)
.setDescription(`
\`r!rol-koruma\` : **Rol Koruma Aç/Kapat**
\`r!küfür-engel\`:  **Küfür Engel Aç/Kapat**
\`r!reklam-engel\` :  **Reklam Engel Aç/Kapat**
\`r!ban\`: **Etiketlediginiz Kişiyi Sunucudan Atar**
\`r!ban-log\`: **Ban Log Kanalını Ayarlar**
\`r!ban-limit\`: **Banlama Yetkisine Sahip Kişiler Limitden Fazla Kişi Banlayamazlar**
\`r!unban\`:  **Belirttiğiniz Kişinin Banını Kaldırırsınız**
\`r!sil\`:  **Belirttiğiniz Sayıda Mesajı Siler**
\`r!ping\`:  **Pinginizi Ölçüp Atar**
\`r!avatar\`:  **Avatarınızı Atar**`)
.setImage("")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};
exports.help = {
  name: "yardım",
  description: 'yardım menüsü',
  usage: 'yardım'
};