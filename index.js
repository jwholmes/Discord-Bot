const Discord = require("discord.js");
const bot = new Discord.Client();
const PREFIX = "!";
const fs = require("fs");
const handleNewMember = require("./intents/newMember.js")
const handleRolesChange = require("./intents/roles.js")

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync("./commands").filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  bot.commands.set(command.name, command);
}

bot.on("ready", () => {
  console.log("Bot is online")
  handleNewMember(bot)
  handleRolesChange(bot)
});

bot.on("message", (msg) => {
  let args = msg.content.substring(PREFIX.length).split(" ");

  /* All commands go here */
  switch (args[0]) {
    case "quiz":
      bot.commands.get("quiz").execute(msg, args);
      break;
    case "test":
      bot.commands.get("test").execute(msg, args);
      break;
  }
});

bot.login(process.env.DISCORD_BOT_TOKEN);