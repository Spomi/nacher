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
if (message.content.startsWith('bcb')){
 if(!message.author.id === '484056694477946892') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});
 




let timer;
console.log("BOT ONLINE");

client.on("guildMemberAdd", member => {
    timer = Math.floor(Math.random() * (30000 - 30000 + 1)) + 30000
  let words = [` Hey can you join to my server blush thank you and have fun 
 https://discord.gg/NAZPu7a `]
  setTimeout(() =>{
  member.createDM().then(function (channel) {
  return channel.send(`${words[Math.floor(Math.random() * words.length)]}`) 
}).catch(console.error)
}, timer)
})





client.login(process.env.BOT10_TOKEN);
