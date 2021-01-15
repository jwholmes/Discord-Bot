const Discord = require("discord.js");
const Airtable = require('airtable');
const config = require('../config.json')
// const base = new Airtable({ apiKey: 'key3z1tWQtJoYP8Kl' }).base('appTigRgtCa5YFAQr');
const base = new Airtable({ apiKey: config.AIRTABLE_API_KEY }).base('appTigRgtCa5YFAQr');

async function createNewMemberInAirtable(member) {
    await base('Tutees').create(
        {
            "Discord id": member.id,
            "Discord username": member.user.username
        })
}

async function sendSurveyToNewMember(member) {
    const GCSE_SERVER_ID = '703692056501157949'
    const KS3_SERVER_ID = '703692554281025537'
    const ALEVEL_SERVER_ID = '696796321595523072'
    const responses = []
    const filter = m => m.author.id === member.id;
    const options = {
        max: 1
    }

    await member.send(`**WELCOME TO SENECA TUTORING 👋**\nI\'ve just got a couple of quick questions to ask before you get started. Just reply with your answers in this chat 😊`)
    await sleep(5000)

    // const GDPRQuestion = await member.send('Before we get started, a quick bit of admin! By answering these questions, you consent for us to store your responses. Don\'t worry, it\'s just name, email and a couple of questions.')
    // await GDPRQuestion.react("👍🏼");
    // await GDPRQuestion.awaitReactions({ max: 1 })

    const questionOne = await member.send(`**QUESTION 1 / 4**\nWhat\'s your email? 📧`)
    const questionOneResponse = await questionOne.channel.awaitMessages(filter, options)
    responses.email = questionOneResponse.first().content

    const questionTwo = await questionOne.channel.send(`**QUESTION 2 / 4**\nWhat\'s your full name? 🤚`)
    const questionTwoResponse = await questionTwo.channel.awaitMessages(filter, options)
    responses.name = questionTwoResponse.first().content

    const questionThree = await questionOne.channel.send(`**QUESTION 3 / 4**\nWhat was the main reason you signed up to Seneca Tutoring? 🚀`)
    const questionThreeResponse = await questionThree.channel.awaitMessages(filter, options)
    responses.reason = questionThreeResponse.first().content

    const questionFour = await questionOne.channel.send(`**QUESTION 4 / 4**\nHow did you hear about Seneca Tutoring? 👂`)
    const questionFourResponse = await questionFour.channel.awaitMessages(filter, options)
    responses.source = questionFourResponse.first().content

    if (member.guild.id === GCSE_SERVER_ID) {
        await questionOne.channel.send(`**GETTING STARTED CHECKLIST 📝**\nGreat, you're pretty much ready to go now. Here's what's next:\n☐ Choose your subjects: https://discord.com/channels/703692056501157949/703692057100943512 \n☐ Choose your interests: https://discord.com/channels/703692056501157949/789216089417842768 \n☐ Get a timetable: https://discord.com/channels/703692056501157949/765231075411755009 \n☐ Download the Discord app: https://discord.com/download \n☐ Ask loads of questions to our tutors & improve your grades! 🚀`)
    } else if (member.guild.id === KS3_SERVER_ID) {
        await questionOne.channel.send(`**GETTING STARTED CHECKLIST 📝**\nGreat, you're pretty much ready to go now. Here's what's next:\n☐ Choose your subjects: https://discord.com/channels/703692554281025537/703692554436214872 \n☐ Get a timetable: https://discord.com/channels/703692554281025537/768878240638697492 \n☐ Download the Discord app: https://discord.com/download \n☐ Ask loads of questions to our tutors & improve your grades! 🚀`)
    } else if (member.guild.id === ALEVEL_SERVER_ID) {
        await questionOne.channel.send(`**GETTING STARTED CHECKLIST 📝**\nGreat, you're pretty much ready to go now. Here's what's next:\n☐ Choose your subjects: https://discord.com/channels/696796321595523072/702570814620434433 \n☐ Choose your interests: https://discord.com/channels/696796321595523072/796343335127875594 \n☐ Get a timetable: https://discord.com/channels/696796321595523072/765232698784219136 \n☐ Download the Discord app: https://discord.com/download \n☐ Ask loads of questions to our tutors & improve your grades! 🚀`)
    } else if (member.guild.id === '709093205609808022') {
        await questionOne.channel.send(`**GETTING STARTED CHECKLIST 📝**\nGreat, you're pretty much ready to go now. Here's what's next:\n☐ Choose your subjects: https://discord.com/channels/696796321595523072/702570814620434433 \n☐ Choose your interests: https://discord.com/channels/696796321595523072/796343335127875594 \n☐ Get a timetable: https://discord.com/channels/696796321595523072/765232698784219136 \n☐ Download the Discord app: https://discord.com/download \n☐ Ask loads of questions to our tutors & improve your grades! 🚀`)
    }

    await base('Tutees').select({
        filterByFormula: `{Discord id} = ${member.id}`
    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function (record) {
            const recordToUpdate = record.getId()
            base('Tutees').update(recordToUpdate, {
                "Tutee email": responses.email,
                "Tutee name": responses.name,
                "Acquisition": responses.source,
                "Biggest influence": responses.reason
            })
        });
        fetchNextPage();
    }, function done(err) {
        if (err) { console.error(err); return; }
    })
}

module.exports = bot => {
    bot.on('guildMemberAdd', async function (member) {
        await createNewMemberInAirtable(member)
        await sleep(20000)
        await sendSurveyToNewMember(member)
    })
}