const Discord = require("discord.js");
const Airtable = require('airtable');
const base = new Airtable({ apiKey: 'keyBop3NKn0c5lDgX' }).base('appTigRgtCa5YFAQr');

async function roles(oldMember, newMember) {
    await base('Tutees').select({
        filterByFormula: `{Discord id} = ${newMember.id}`
    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function (record) {
            const recordToUpdate = record.getId()
            const allRoles = newMember._roles
            const roleNames = []

            for (let i = 0; i < allRoles.length; i++) {
                const roleArray = newMember.roles.cache.array()
                const newRole = roleArray[i]
                const roleName = newRole.name

                roleNames.push(roleName)
            }

            console.log(roleNames)

            base('Tutees').update(recordToUpdate, {
                "Roles": roleNames
            }, { typecast: true })
        });
        fetchNextPage();
    }, function done(err) {
        if (err) { console.error(err); return; }
    })
}

module.exports = bot => {
    bot.on('guildMemberUpdate', async function (oldMember, newMember) {
        await roles(oldMember, newMember)
    })
}