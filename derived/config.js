/*

# Owner ? : Marisel
!- do not delete this credit

*/

global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['254740007567']
global.ownMain = '254740007567'
global.NamaOwner = 'Marisel' //
global.sessionName = 'session'
global.connect = true // 
global.namabot = 'Bugatti' //
global.author = 'Marisel' //
global.packname = 'Bugatti' //
global.autoviewstatus = process.env.autoviewstatus || "TRUE"
global.welcome = false
global.url1 = 'https://whatsapp.com/channel/0029Vajvy2kEwEjwAKP4SI0x' //gausah diganti
global.url2 = 'https://whatsapp.com/channel/0029Vajvy2kEwEjwAKP4SI0x' //gausah diganti
global.linkgc = 'https://whatsapp.com/channel/0029Vajvy2kEwEjwAKP4SI0x'
global.delayjpm = 3500
global.domain = 'https://guru.sellerpanell.me' // your domian
global.apikey = 'ptla_aRq7aFBbQowvPwLChvjNLX5uE0rYZ6dUdGbFIhqUwUg' // Isi Apikey Plta Lu
global.capikey = 'ptlc_mI4q2CFLyxYSG9lqtpWVJSkqtxbQvZyheemGqW56VUH' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id egg
global.location = '1' // id location

global.mess = { // 
ingroup: 'This feature can only be used in groups.',
admin: 'This feature is specifically for group admins.',
notadmin: "The bot must be an admin first",
owner: 'You are not Marisel.',
premium: 'You are not a premium user.',
seller: 'This feature can only be used by resellers and owners.',
usingsetpp: `Setpp can only be used by the owner, do you think I'm stupid?`,
wait: '*Waiting for processing*',
success: 'Success sent by Bugatti',
bugrespon: `Processs.....`
}


global.autOwn = 'req(62-8S57547ms11).287p'
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})
