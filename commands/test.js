const Discord = require("discord.js");
const biology = require("../trivia/bio-aqa-gcse-multiple-choice.json");
const business = require("../trivia/bus-aqa-gcse-multiple-choice.json");
const comsci = require("../trivia/comsci-aqa-gcse-multiple-choice.json");
const dt = require("../trivia/dt-aqa-gcse-multiple-choice.json");
const englishLanguage = require("../trivia/eng-aqa-gcse-language-multiple-choice.json");
const englishAIC = require("../trivia/eng-aqa-gcse-AIC-multiple-choice.json");
const french = require("../trivia/french-aqa-gcse-multiple-choice.json");
const geography = require("../trivia/geog-aqa-gcse-multiple-choice.json");
const historyGermany = require("../trivia/hist-aqa-gcse-germany-multiple-choice.json");
const physics = require("../trivia/phys-aqa-gcse-multiple-choice.json");
const spanish = require("../trivia/span-aqa-gcse-multiple-choice.json");

// const spanishTitles = [...new Set(spanish.map((x) => x.title))];
// console.log(spanishTitles);

const emojiArray = ["🇦", "🇧", "🇨", "🇩", "🇪", "🇫"];
const numbersArray = ["1️.", "2.", "3️.", "4️.", "5️.", "6️.", "7️.", "8.", "9.", "10.", "11.", "12.", "13."];
const incorrectGIFArray = [
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
const correctGIFArray = [
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
const startGIFArray = [
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
  name: "test",
  description: "MCQ tests by subject",
  async execute(message, args) {
    const subjectMessage = await message.author.send(
      new Discord.MessageEmbed().setColor("#FFD800").setTitle("QUIZ TIME!").setDescription(`**Choose your subject 📚**
        \n🧬 Biology 
        \n💰 Business
        \n💻 ComSci 
        \n⚒️ DT 
        \n🕵️ English Lit - An Inspector Calls
        \n📚 English Language
        \n🇫🇷 French
        \n🌍 Geography
        \n🇩🇪 History - Nazi Germany 
        \n🔭 Physics 
        \n🇪🇸 Spanish`)
    );
    await subjectMessage.react("🧬");
    await subjectMessage.react("💰");
    await subjectMessage.react("💻");
    await subjectMessage.react("⚒️");
    await subjectMessage.react("🕵️");
    await subjectMessage.react("📚");
    await subjectMessage.react("🇫🇷");
    await subjectMessage.react("🌍");
    await subjectMessage.react("🇩🇪");
    await subjectMessage.react("🔭");
    await subjectMessage.react("🇪🇸");

    const filter = (reaction, user) => user.id === message.author.id;
    const subjectReaction = await subjectMessage.awaitReactions(filter, { max: 1 });

    // const filter = (reaction, user) => user.id === message.author.id;
    // const subjectAnswer = await message.channel.awaitMessages(filter, { max: 1 }).then(console.log(subjectAnswer));

    // if (subjectAnswer.first().content === "Biology") {
    //   console.log("Bio test");

    await sleep(1000);
    await message.author.send(randomReadyGIF);
    await sleep(2000);

    // for (let i = 0; i < 5; i++) {
    //   await process(message, biology);
    //   await sleep(3000);
    // }

    if (subjectReaction.has("🧬")) {
      for (let i = 0; i < 5; i++) {
        await process(message, biology);
        await sleep(3000);
      }
    } else if (subjectReaction.has("💰")) {
      // const businessTitles = [...new Set(business.map((x) => x.title)), "All topics"];
      // const newNumbersArray = numbersArray.slice(0, businessTitles.length + 1);
      // const allTopicsString = businessTitles.map((i, idx) => numbersArray[idx] + " " + i).join("\n");
      // const subjectMessage = await message.author.send(
      //   new Discord.MessageEmbed().setColor("#FFD800").setTitle("QUIZ TIME!")
      //     .setDescription(`**Choose your subject by typing the correct number 📚**
      //     \n${allTopicsString}`)
      // );
      // const filter = (user) => user.id === message.author.id;
      // const reply = await message.channel.awaitMessages(filter, { max: 1 }).then((collected) => {
      //   console.log(collected);
      // });
      // console.log(reply);
      for (let i = 0; i < 5; i++) {
        await process(message, business);
        await sleep(3000);
      }
    } else if (subjectReaction.has("💻")) {
      for (let i = 0; i < 5; i++) {
        await process(message, comsci);
        await sleep(3000);
      }
    } else if (subjectReaction.has("⚒️")) {
      for (let i = 0; i < 5; i++) {
        await process(message, dt);
        await sleep(3000);
      }
    } else if (subjectReaction.has("🕵️")) {
      for (let i = 0; i < 5; i++) {
        await process(message, englishAIC);
        await sleep(3000);
      }
    } else if (subjectReaction.has("📚")) {
      for (let i = 0; i < 5; i++) {
        await process(message, englishLanguage);
        await sleep(3000);
      }
    } else if (subjectReaction.has("🇫🇷")) {
      for (let i = 0; i < 5; i++) {
        await process(message, french);
        await sleep(3000);
      }
    } else if (subjectReaction.has("🌍")) {
      for (let i = 0; i < 5; i++) {
        await process(message, geography);
        await sleep(3000);
      }
    } else if (subjectReaction.has("🇩🇪")) {
      for (let i = 0; i < 5; i++) {
        await process(message, historyGermany);
        await sleep(3000);
      }
    } else if (subjectReaction.has("🔭")) {
      for (let i = 0; i < 5; i++) {
        await process(message, physics);
        await sleep(3000);
      }
    } else if (subjectReaction.has("🇪🇸")) {
      for (let i = 0; i < 5; i++) {
        await process(message, spanish);
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
