const Discord = require("discord.js");
const biology = require("../facts/bio-aqa-gcse-multiple-choice.json");

var length = biology.length;
var emojiArray = ["🇦", "🇧", "🇨", "🇩", "🇪", "🇫"];

async function process(message) {
  const randomNumber = Math.floor(Math.random() * length);
  const randomQuestion = biology[randomNumber];
  const question = randomQuestion.content.question;
  const correctAnswer = randomQuestion.content.correctAnswer;
  const wrongAnswersArray = randomQuestion.content.wrongAnswers;
  const imagery = randomQuestion.content.imageURL;
  const numberOfWrongAnswers = wrongAnswersArray.length;

  const indexToAddCorrectAnswer = Math.floor(
    Math.random() * numberOfWrongAnswers
  );
  wrongAnswersArray.splice(indexToAddCorrectAnswer, 0, `${correctAnswer}`);

  const newEmojiArray = emojiArray.slice(0, numberOfWrongAnswers + 1);
  const editedArray = [];
  wrongAnswersArray.forEach((i, idx) => {
    editedArray.push(emojiArray[idx] + " " + i);
  });
  const finalArray = editedArray.join("\n");

  var questionEmbed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setDescription(
      `**${question}**` +
        `\n\n${finalArray}` +
        "\n\n_The answer will be shown in 15 seconds_"
    );

  const botMessage = await message.channel.send(questionEmbed);
  for (let i = 0; i < newEmojiArray.length; i++) {
    await botMessage.react(emojiArray[i]);
  }

  try {
    await message.channel.send(imagery);
  } catch (error) {
    console.log("error");
  }

  const emojiAnswer = emojiArray[indexToAddCorrectAnswer];

  var filter = (reaction, user) => {
    return reaction.emoji.name === emojiAnswer;
  };
  const reactions = await botMessage.awaitReactions(filter, { time: 7000 });
  console.log(reactions);

  try {
    await message.channel.send(
      new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setDescription(
          `The answer was ` +
            emojiAnswer +
            `\n\nThere were ${
              reactions.get(emojiAnswer).count - 1
            } correct answers! 🥳`
        )
    );
  } catch (error) {
    await message.channel.send(
      new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setDescription(
          `The answer was ` + emojiAnswer + `\n\nThere were 0 correct answers`
        )
    );
    message.channel.send(
      "https://tenor.com/view/jakeperalta-jake-peralta-b99-brooklynninenine-gif-8793716",
      2000
    );
  }
}

module.exports = {
  name: "quiz",
  description: "biology quiz",
  async execute(message, args) {
    for (let i = 0; i < 10; i++) {
      await process(message);
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }
    await message.channel.send(
      new Discord.MessageEmbed().setColor("#0099ff").setDescription("Game over")
    );
  },
};
