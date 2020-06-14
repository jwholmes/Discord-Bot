const Discord = require("discord.js");
const biology = require("../facts/biology_facts.json");

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

/* The question and reactions */
// var questionEmbed = new Discord.MessageEmbed()

//   .setColor("#0099ff")
//   .setDescription(`**${fact}**` + "\n\n_True or false?_");

// const filter = (reaction, user) => {
//   return reaction.emoji.name === correctAnswer;
// };

// const reactions = message
//   .awaitReactions(filter, { time: 3000 })
//   .then((collected) => {
//     const reactions = collected;
//     console.log(reactions);
//     console.log(reactions.users);
//   });
//       const answerEmbed = new Discord.MessageEmbed()
//         .setColor("#0099ff")
//         .setDescription(
//           `The answer was ` +
//             correctAnswer +
//             `\n\nThere were ${
//               reactions.get(correctAnswer).count - 1
//             } correct answers`
//         );

//       message.channel.send(answerEmbed);
//     })

//     .catch((collected) => {
//       console.log("Error");
//     });
// });

//       var randomNumber = Math.floor(Math.random() * length);
//       var randomFact = biology.facts[randomNumber];
//       var fact = randomFact.fact;
//       var correctAnswer = randomFact.correctAnswer;
//       var incorrectAnswers = randomFact.incorrectAnswer;

//       // // The question and reactions
//       const questionEmbed = new Discord.MessageEmbed()

//         .setColor("#0099ff")
//         .setDescription(`**${fact}**` + "\n\n_True or false?_");

//       const filter = (reaction, user) => {
//         return reaction.emoji.name === correctAnswer;
//       };

//       message.channel.send(questionEmbed).then(async (message) => {
//         await message.react("👍");
//         await message.react("👎");

//         const reactions = message
//           .awaitReactions(filter, { time: 3000 })
//           .then((collected) => {
//             const reactions = collected;
//             console.log(reactions);
//             console.log(reactions.users);

//             const answerEmbed = new Discord.MessageEmbed()
//               .setColor("#0099ff")
//               .setDescription(
//                 `The answer was ` +
//                   correctAnswer +
//                   `\n\nThere were ${
//                     reactions.get(correctAnswer).count - 1
//                   } correct answers`
//               );

//             message.channel.send(answerEmbed);
//           })

//   // if (reactions.get(correctAnswer).count === 1) {
//   //   msg.channel.send(`There were 0 correct answers`);
//   // } else if (reactions.get(correctAnswer).count === 2) {
//   //   msg.channel.send(`There was 1 correct answer`);
//   // } else {
//   //   msg.channel.send(
//   //     `There were ${
//   //       reactions.get(correctAnswer).count - 1
//   //     } correct answers`
//   //   );
//   // }
// })

//           .catch((collected) => {
//             console.log("Error");
//           });
//       });
//     }
//   },
// };
//   },
// };
/* Generate random unique numbers */
// var length = biology.facts.length;
// var arr = [];
// while (arr.length < length) {
//   var r = Math.floor(Math.random() * length);
//   if (arr.indexOf(r) === -1) arr.push(r);
// }
// console.log(arr);

/* For loop that works without delay */
// bot.on("message", (msg) => {
//   if (msg.content === "quiz") {
//     var i;
//     for (i = 0; i < length; i++) {
//       var randomNumber = Math.floor(Math.random() * length);
//       var randomFact = biology.facts[randomNumber];
//       var fact = randomFact.fact;
//       var correctAnswer = randomFact.correctAnswer;

//       msg.channel.send(fact + "\n\n_True or false?_").then(function (message) {
//         message.react("👍");
//         message.react("👎");
//       });

//       // Tell the bot how to reply
//       (answer) => {
//         msg.channel.send("The answer was " + correctAnswer);
//       };

//       // Tell the bot how long to delay before replying
//       setTimeout(() => {
//         msg.channel.send("The answer was " + correctAnswer);
//       }, 10000);

//       // console.log(randomNumber);
//       // console.log(fact);
//     }
//   }
// });

// bot.on("message", async (msg) => {
//   if (msg.content === "fact") {
//     var i;
//     for (i = 0; i < length; i++) {
//       var length = biology.facts.length;
//       var randomNumber = Math.floor(Math.random() * length);
//       var randomFact = biology.facts[randomNumber];
//       var fact = randomFact.fact;
//       var correctAnswer = randomFact.correctAnswer;
//       var incorrectAnswers = randomFact.incorrectAnswer;

//       // // The question and reactions
//       const questionEmbed = new Discord.MessageEmbed()

//         .setColor("#0099ff")
//         .setDescription(fact + "\n\n_True or false?_");

//       const filter = (reaction, user) => {
//         return reaction.emoji.name === correctAnswer;
//       };

//       msg.channel.send(questionEmbed).then(async (message) => {
//         await message.react("👍");
//         await message.react("👎");

//         const reactions = message
//           .awaitReactions(filter, { time: 5000 })
//           .then((collected) => {
//             const reactions = collected;
//             console.log(reactions);

//             const answerEmbed = new Discord.MessageEmbed()
//               .setColor("#0099ff")
//               .setDescription(
//                 `The answer was ` +
//                   correctAnswer +
//                   `\n\nThere were ${
//                     reactions.get(correctAnswer).count - 1
//                   } correct answers`
//               );

//             msg.channel.send(answerEmbed);
//           })
//           .catch((collected) => {
//             console.log("Error");
//           });
//       });
//     }
//   }
// });

// /* For loop that works with delay but no function within /*
// (function theLoop(i) {
//   setTimeout(function () {
//     console.log("hello");
//     if (--i) {
//       // If i > 0, keep going
//       theLoop(i); // Call the loop again, and pass it the current value of i
//     }
//   }, 3000);
// })(length);

// (function theLoop(i) {
//   setTimeout(function () {
//     var randomNumber = Math.floor(Math.random() * length);
//     var randomFact = biology.facts[randomNumber];
//     var fact = randomFact.fact;
//     var correctAnswer = randomFact.correctAnswer;

//     console.log(fact + "\n\n_True or false?_").then(function (message) {
//       message.react("👍");
//       message.react("👎");
//     });

//     // Tell the bot how to reply
//     (answer) => {
//       msg.channel.send("The answer was " + correctAnswer);
//     };

//     // Tell the bot how long to delay before replying
//     setTimeout(() => {
//       msg.channel.send("The answer was " + correctAnswer);
//     }, 10000);
//     if (--i) {
//       // If i > 0, keep going
//       theLoop(i); // Call the loop again, and pass it the current value of i
//     }
//   }, 3000);
// })(length);

/* Tell the bot how to reply and when to reply */
//   const answerEmbed = new Discord.MessageEmbed()
//     .setColor("#0099ff")
//     .setDescription(answerMessage);
//   setTimeout(() => {
//     msg.channel.send(answerEmbed);
//   }, 5000);
// }
