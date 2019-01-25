const Discord = require("discord.js");
const botconfig = require("./botconfig.json");
const bot = new Discord.Client();

bot.on("ready", async () => {
    console.log(`${bot.user.username} is working`);

    bot.user.setActivity("Watching My Tutorials", {type: "WATCHING"});
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${prefix}ping`){
    message.channel.send("Pong");
  }
});

bot.login(botconfig.token);
