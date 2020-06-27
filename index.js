const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = '!';
const fs = require('fs');

bot.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync('./commands')
  .filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  bot.commands.set(command.name, command);
}

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
bot.on('ready', () => {
  console.log('Bot is online');
});

<<<<<<< HEAD
bot.on("message", (message) => {
  let args = message.content.substring(PREFIX.length).split(" ");
=======
bot.on('message', msg => {
  let args = msg.content.substring(PREFIX.length).split(' ');
>>>>>>> d4d1f8fe7569c04542b0aeb5fc04c5d2ad9627ce

  /* All commands go here */
  switch (args[0]) {
    // case "fact":
    //   bot.commands.get("fact").execute(msg, args);
    //   break;
<<<<<<< HEAD
    case "quiz":
      bot.commands.get("quiz").execute(message, args);
      break;
    case "test":
      bot.commands.get("test").execute(message, args);
=======
    case 'quiz':
      bot.commands.get('quiz').execute(msg, args);
      break;
    case 'test':
      bot.commands.get('test').execute(msg, args);
>>>>>>> d4d1f8fe7569c04542b0aeb5fc04c5d2ad9627ce
      break;
    // case "popquiz":
    //   bot.commands.get("popquiz").execute(msg, args);
    //   break;
    case "meme":
      bot.commands.get("meme").execute(message, args);
      break;
  }
});

bot.login(process.env.DISCORD_BOT_TOKEN);
