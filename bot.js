const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '0'
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});





client.on('message', message => {

    if (message.author.bot) return;

            if(!message.channel.guild) return;

let args = message.content.split(' ').slice(1).join(' ');

if (message.content.startsWith('bc')){

 if(!message.author.id === '484056694477946892') return;

message.channel.sendMessage('**wa rani kansifat**')

client.users.forEach(m =>{

m.sendMessage(args)

})

}

});





client.login(process.env.BOT12_TOKEN);
