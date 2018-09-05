const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '0'
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});





client.on('message',async message => {
  if(message.content.startsWith(prefix + "bc")) {
    let filter = m => m.author.id === message.author.id;
    let thisMessage;
    let thisFalse;
    message.channel.send('regional_indicator_bregional_indicator_c| ارسل الرسالة الان').then(msg => {

    let awaitM = message.channel.awaitMessages(filter, {
      max: 1,
      time: 20000,
      errors: ['time']
    })
    .then(collected => {
      collected.first().delete();
      thisMessage = collected.first().content;
      msg.edit('regional_indicator_bregional_indicator_c| هل انت متأكد؟');
      let awaitY = message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
        max: 1,
        time: 20000,
        errors: ['time']
      })
      .then(collected => {
        if(collected.first().content === 'لا') {
          msg.delete();
          message.delete();
          thisFalse = false;
        }
        if(collected.first().content === 'نعم') {
          if(thisFalse === false) return;
        message.guild.members.forEach(member => {
          msg.edit('regional_indicator_bregional_indicator_c| جاري الارسال');
          collected.first().delete();
          member.send(${thisMessage}\n\n${member} ,\nتم الارسال من : ${message.guild.name}\n تم الارسال بواسطة : ${message.author.tag});
        });
        }
      });
    });
    });
  }
});





client.login(process.env.BOT12_TOKEN);
