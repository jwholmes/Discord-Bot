const { Client, Attachment } = require("discord.js");
const bot = new Client();

module.exports = {
  name: "meme",
  description: "study meme",
  execute(message, args) {
    const Attachment = new Attachment(
      "seneca-image-cdn:///courseImages/biology/5.3.2-%20Control%20of%20water%20balance/5.3.3%20Water%20control%20system-min.jpg"
    );
    message.channel.send(Attachment);
  },
};
