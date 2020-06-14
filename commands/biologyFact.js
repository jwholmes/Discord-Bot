const Discord = require("discord.js");
const biology = require("../trivia/biology_facts.json");

module.exports = {
  name: "fact",
  description: "biology fact",
  execute(message, args) {
    var length = biology.facts.length;
    var randomNumber = Math.floor(Math.random() * length);
    var randomFact = biology.facts[randomNumber];
    var fact = randomFact.fact;
    var correctAnswer = randomFact.correctAnswer;
    var incorrectAnswers = randomFact.incorrectAnswer;

    // // The question and reactions
    const questionEmbed = new Discord.MessageEmbed()

      .setColor("#0099ff")
      .setDescription(
        `**${fact}** \n\n_True or false?_\n\nThe answer will show in 10 seconds`
      );

    const filter = (reaction, user) => {
      return reaction.emoji.name === correctAnswer;
    };

    message.channel.send(questionEmbed).then(async (message) => {
      await message.react("👍");
      await message.react("👎");

      const reactions = message
        .awaitReactions(filter, { time: 10000 })
        .then((collected) => {
          const reactions = collected;
          console.log(reactions);
          // console.log(reactions.users);

          const answerEmbed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setDescription(
              `The answer was ` +
                correctAnswer +
                `\n\nThere were ${
                  reactions.get(correctAnswer).count - 1
                } correct answers`
            );

          message.channel.send(answerEmbed);
        })

        .catch((collected) => {
          console.log("Error");
        });
    });
  },
};
