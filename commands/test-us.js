const Discord = require("discord.js");
const biology = require("../trivia/us-bio-hs-multi-choice.json");
const chemistry = require("../trivia/us-chem-hs-multi-choice.json");
const physics = require("../trivia/us-phys-hs-multi-choice.json");

var emojiArray = ["🇦", "🇧", "🇨", "🇩", "🇪", "🇫"];
var incorrectGIFArray = [
  "https://tenor.com/view/jakeperalta-jake-peralta-b99-brooklynninenine-gif-8793716",
  "https://tenor.com/view/otter-relax-confidence-gif-5179813",
  "https://tenor.com/view/the-good-place-idk-idont-know-confused-sorry-gif-11820681",
  "https://tenor.com/view/homer-simpson-bush-disappear-awkward-dont-look-at-me-gif-14401816",
  "https://tenor.com/view/gorgeous-you-are-weve-got-this-finger-gun-gif-13180717",
  "https://tenor.com/view/so-close-dismay-gif-4821429",
  "https://tenor.com/view/kevin-hart-say-what-stare-blink-really-gif-12005301",
  "https://tenor.com/view/reaction-no-way-lies-idont-believe-you-anchorman-gif-5410485",
  "https://tenor.com/view/excuse-me-gif-9850982",
  "https://tenor.com/view/wow-what-no-way-oh-really-interesting-gif-16167900",
  "https://tenor.com/view/ohwell-forgetting-sarah-marshall-shrug-what-idk-gif-5281408",
  "https://tenor.com/view/shrug-what-huh-will-smith-it-is-what-it-is-gif-13198074",
  "https://tenor.com/view/confused-whitepersanguardian-why-gif-10312546",
  "https://tenor.com/view/chouette-pet-animal-bird-nature-gif-12522544",
];
var correctGIFArray = [
  "https://tenor.com/view/dancing-dance-zebra-moon-walk-shuffling-gif-7705463",
  "https://tenor.com/view/nice-gif-10653491",
  "https://tenor.com/view/well-done-despicable-me-minions-gif-4733480",
  "https://tenor.com/view/elf-will-ferrell-you-did-it-congratulations-happy-gif-4115640",
  "https://tenor.com/view/congratulations-congrats-congratulationdance-happydance-party-gif-13300531",
  "https://tenor.com/view/boom-annakendrick-pitchperfect-pitchperfect2-micdrop-gif-5143507",
  "https://tenor.com/view/will-ferrell-old-school-gif-5531028",
  "https://tenor.com/view/nailed-it-high-five-happy-anchor-news-gif-3661310",
  "https://tenor.com/view/nailedit-theoffice-nailed-gif-4929595",
  "https://tenor.com/view/steve-havey-funny-clapping-smile-genuine-happiness-gif-4975671",
  "https://tenor.com/view/dean-ambrose-wwe-seth-rollins-gif-9554279",
  "https://tenor.com/view/smart-so-sosmart-gif-15534259",
  "https://tenor.com/view/wisdom-wisdomous-intelligent-smart-gif-14536675",
  "https://tenor.com/view/genius-you-are-agenius-motivation-self-esteem-motivate-gif-6124403",
  "https://tenor.com/view/smart-hangover-alan-genius-zach-galifianakis-gif-5568438",
];
var startGIFArray = [
  "https://tenor.com/view/kevin-hart-its-about-to-go-down-calm-before-the-storm-gif-4420127",
  "https://tenor.com/view/fresh-prince-of-bel-air-carlton-carlton-dance-excited-lets-get-this-party-started-gif-15161860",
  "https://tenor.com/view/bugs-bunny-race-run-running-exercise-gif-4469250",
  "https://tenor.com/view/start-fail-bmx-race-falling-gif-16226982",
  "https://tenor.com/view/on-your-marks-bake-nodding-gif-14432251",
  "https://tenor.com/view/get-ready-prepare-grace-and-frankie-season1-netflix-gif-16105467",
  "https://tenor.com/view/here-we-go-jim-carrey-oh-boy-smile-happy-gif-15784141",
  "https://tenor.com/view/school-paper-exam-board-gif-8766184",
  "https://tenor.com/view/calm-down-meditate-josephina-deep-breaths-gif-15437684",
  "https://tenor.com/view/jimmy-fallon-brace-yourself-prepare-yourself-gif-4657301",
  "https://tenor.com/view/dance-off-brad-pitt-here-we-go-gif-13794894",
  "https://tenor.com/view/its-that-time-again-that-time-again-here-we-go-here-we-are-spl-gif-15581235",
  "https://tenor.com/view/trivia-gif-9621152",
  "https://tenor.com/view/sonic-pop-quiz-hotshot-pop-quiz-hotshot-sonic-movie-gif-17090768",
];
const randomReadyGIF = startGIFArray[Math.floor(Math.random() * startGIFArray.length)];

async function process(message, data) {
  const randomQuestion = data[Math.floor(Math.random() * data.length)];
  const randomIncorrectGIF = incorrectGIFArray[Math.floor(Math.random() * incorrectGIFArray.length)];
  const randomCorrectGIF = correctGIFArray[Math.floor(Math.random() * correctGIFArray.length)];
  const question = randomQuestion.content.question;
  const correctAnswer = randomQuestion.content.correctAnswer;
  const wrongAnswersArray = randomQuestion.content.wrongAnswers;
  const questionImagery = randomQuestion.content.imageURL;
  const numberOfWrongAnswers = wrongAnswersArray.length;

  const indexToAddCorrectAnswer = Math.floor(Math.random() * numberOfWrongAnswers);
  wrongAnswersArray.splice(indexToAddCorrectAnswer, 0, `${correctAnswer}`);

  const allAnswersArray = wrongAnswersArray;

  const newEmojiArray = emojiArray.slice(0, numberOfWrongAnswers + 1);

  const allAnswersString = wrongAnswersArray.map((i, idx) => emojiArray[idx] + " " + i).join("\n");

  var questionEmbed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setDescription(`**${question}**` + `\n\n${allAnswersString}`);

  const botMessage = await message.author.send(questionEmbed);
  for (let i = 0; i < newEmojiArray.length; i++) {
    await botMessage.react(emojiArray[i]);
  }

  try {
    await message.author.send(questionImagery);
  } catch (error) {
    console.log("No imageURL found", error);
  }

  const emojiAnswer = emojiArray[indexToAddCorrectAnswer];

  var filter = (reaction, user) => user.id === message.author.id;
  const reactions = await botMessage.awaitReactions(filter, { max: 1 });

  sendIncorrectGIF = () => {
    message.author.send(randomIncorrectGIF);
  };
  sendCorrectGIF = () => {
    message.author.send(randomCorrectGIF);
  };

  if (reactions.has(emojiAnswer)) {
    const correctReaction = reactions.get(emojiAnswer);
    await message.author.send(new Discord.MessageEmbed().setColor("#30E84E").setDescription(`You nailed it! 🥳 `));
    if (Math.random() > 0.5) {
      setTimeout(sendCorrectGIF, 2000);
    }
  } else {
    await message.author.send(
      new Discord.MessageEmbed().setColor("#F96F51").setDescription(`The answer was ${emojiAnswer}`)
    );
    if (Math.random() > 0.5) {
      setTimeout(sendIncorrectGIF, 2000);
    }
  }
}

sleep = async (milliseconds) => {
  await new Promise((resolve) => setTimeout(resolve, milliseconds));
};

module.exports = {
  name: "popquiz",
  description: "MCQ tests by subject",
  async execute(message, args) {
    const subjectMessage = await message.author.send(
      new Discord.MessageEmbed().setColor("#FFD800").setTitle("QUIZ TIME!").setDescription(`**Choose your subject 📚**
        \n🧬 Biology 
        \n🧪 Chemistry
        \n🔭 Physics`)
    );
    await subjectMessage.react("🧬");
    await subjectMessage.react("🧪");
    await subjectMessage.react("🔭");

    var filter = (reaction, user) => user.id === message.author.id;
    const subjectReaction = await subjectMessage.awaitReactions(filter, { max: 1 });

    await sleep(1000);
    await message.author.send(randomReadyGIF);
    await sleep(2000);

    if (subjectReaction.has("🧬")) {
      for (let i = 0; i < 8; i++) {
        await process(message, biology);
        await sleep(3000);
      }
    } else if (subjectReaction.has("🧪")) {
      for (let i = 0; i < 8; i++) {
        await process(message, chemistry);
        await sleep(3000);
      }
    } else if (subjectReaction.has("🔭")) {
      for (let i = 0; i < 8; i++) {
        await process(message, physics);
        await sleep(3000);
      }
    }

    await sleep(1000);
    await message.author.send(
      new Discord.MessageEmbed()
        .setColor("#9534eb")
        .setTitle("End of Quiz")
        .setDescription(`GG ${message.author.username}! 🔥`)
    );
  },
};
