const Discord = require("discord.js");
const biology = require("../facts/bio-aqa-gcse-multiple-choice.json");

var length = biology.length;
var emojiArray = ["🇦", "🇧", "🇨", "🇩", "🇪"];

async function process(message) {
  const randomNumber = Math.floor(Math.random() * length);
  const randomQuestion = biology[randomNumber];
  const question = randomQuestion.content.question;
  const correctAnswer = randomQuestion.content.correctAnswer;
  const wrongAnswersArray = randomQuestion.content.wrongAnswers;
  const numberOfWrongAnswers = wrongAnswersArray.length;

  console.log(wrongAnswersArray);

  const indexToAddCorrectAnswer = Math.floor(
    Math.random() * numberOfWrongAnswers
  );

  wrongAnswersArray.splice(indexToAddCorrectAnswer, 0, `${correctAnswer}`);

  console.log(wrongAnswersArray);

  const newEmojiArray = emojiArray.slice(0, numberOfWrongAnswers + 1);
  // const emojiString = newEmojiArray.toString();
  console.log(newEmojiArray);

  // const editedArray = wrongAnswersArray.map((wrongAnswersItem) => {
  //   return emojiArray + ": " + wrongAnswersItem;
  // });

  const editedArray = [];
  wrongAnswersArray.forEach((i, idx) => {
    editedArray.push(emojiArray[idx] + " " + i);
  });
  console.log(editedArray);

  // var brk = wrongAnswersArray.split(",");
  // var res = brk.join(`\n`);
  // editedArray.split(",");
  const finalArray = editedArray.join("\n");

  var questionEmbed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setDescription(
      `**${question}**` +
        `\n\n${finalArray}` +
        "\n\n_The answer will be shown in 10 seconds_"
    );

  const botMessage = await message.channel.send(questionEmbed);
  // await Promise.all([botMessage.react("🇦"), botMessage.react(emojiArray[1])]);
  for (let i = 0; i < newEmojiArray.length; i++) {
    await botMessage.react(emojiArray[i]);
  }

  var filter = (reaction, user) => {
    return reaction.emoji.name === correctAnswer;
  };

  const reactions = await botMessage.awaitReactions(filter, { time: 5000 });
  // .then(async (collected) => {
  //   return (reactions = await collected);
  // });
  console.log(reactions);

  // const answerEmbed = new Discord.MessageEmbed()
  //   .setColor("#0099ff")
  //   .setDescription(
  //     `The answer was ` +
  //       correctAnswer +
  //       `\n\nThere were ${(await reactions.get(correctAnswer).count) - 1}
  //               correct answers`
  //   );

  // try {
  //   await message.channel.send(answerEmbed);
  // } catch (error) {
  //   message.channel.send("Seneca Bot is having a rough day");
  // }
}

module.exports = {
  name: "quiz",
  description: "biology quiz",
  async execute(message, args) {
    for (let i = 0; i < 1; i++) {
      await process(message);
      await new Promise((resolve) => setTimeout(resolve, 6000));
    }
  },
};
