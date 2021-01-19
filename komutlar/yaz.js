const rolly = require('discord.js');

exports.run = (client, message, args) => {
  let rolly = args.slice(0).join(' ');
if (rolly.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
  message.delete();
  message.channel.send(rolly);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yaz', 'söyle'],
  permLevel: 3
};

exports.help = {
  name: 'yaz',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};
