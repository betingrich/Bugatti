import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Africa/Nairobi').format('HH')
let wib = moment.tz('Africa/Nairobi').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command }) => {
  let d = new Date(new Date() + 3600000)
  let locale = 'en'
  let week = d.toLocaleDateString(locale, { weekday: 'long' })
  let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime)
  let who = m.quoted
    ? m.quoted.sender
    : m.mentionedJid && m.mentionedJid[0]
      ? m.mentionedJid[0]
      : m.fromMe
        ? conn.user.jid
        : m.sender
  if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
  let pp = './Assets/Bugatti.jpg'
  let user = global.db.data.users[who]
  let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } =
    global.db.data.users[who]
  let { min, xp, max } = xpRange(user.level, global.multiplier)
  let username = conn.getName(who)
  let math = max - xp
  let prem = global.prems.includes(who.split`@`[0])
  let sn = createHash('md5').update(who).digest('hex')
  let totaluser = Object.values(global.db.data.users).length
  let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
  let more = String.fromCharCode(8206)
  let readMore = more.repeat(850)
  let greeting = ucapan()
  let quote = quotes[Math.floor(Math.random() * quotes.length)]

  let taguser = '@' + m.sender.split('@s.whatsapp.net')[0]
  let str = `
📜 *_Quote of the day: ${quote}_* 📜
┏━━𖣘 _*BUGATTI*:_𖣘━━┓
┃ 𖣘  *Bot Name:* ${botname} 
┃ 🚨  *Prefix:* ${usedPrefix} 
┃ 🕓  *Uptime:* ${uptime}
┃ 📆  *Today's Date:* ${date} 
┃ ⏲️  *Current Time:* ${wib}
┗━━━━━━━━━━━━━┛
    『 *group menu 』
 𖣘 .getbio <@tag/reply>  
 𖣘 .animequote
 𖣘 .Setdesc <text>
 𖣘 .setname <text>
 𖣘 .add
 𖣘 .delete
 𖣘 .delwarn @user
 𖣘 .demote (@tag)
 𖣘 .infogp
 𖣘 .hidetag
 𖣘 .invite <254xxx>
 𖣘 .kick @user
 𖣘 .link
 𖣘 .poll question|option|option
 𖣘 .profile
 𖣘 .promote
 𖣘 .resetlink
 𖣘 .setbye <text>
 𖣘 .group *open/close*
 𖣘 .setwelcome <text>
 𖣘 .simulate <event> @user
 𖣘 .staff
 𖣘 .tagall
 𖣘 .totag
 𖣘 .warn @user
 𖣘 .warns
 𖣘 .main
  
  『 *owner menu* 』
 𖣘 .addprem <@tag>
 𖣘 .addowner @user
 𖣘 .allow <@tag>
 𖣘 .HEROKU
 𖣘 .ban @user
 𖣘 .banchat
 𖣘 .tx
 𖣘 .broadcastgroup <text>
 𖣘 .bcgc <text>
 𖣘 .cleartmp
 𖣘 .delexpired
 𖣘 .delprem @user
 𖣘 .removeowner @user
 𖣘 .setppbotfull
 𖣘 .getplugin <name file>
 𖣘 .getfile <name file>
 𖣘 .join <chat.whatsapp.com> <dias>
 𖣘 .reset <254xxx>
 𖣘 .resetprefix
 𖣘 .restart
 𖣘 ..setprefix
 𖣘 ..setprefix [symbol]
 𖣘 .unban @user
 𖣘 .unbanchat
 𖣘 .update
 𖣘 .config
 𖣘 .listban
 𖣘 .deleteplugin <name>
  
   『 *fun menu* 』
 𖣘 .afk <reason>
 𖣘 .tomp3
 𖣘 .toav
 𖣘 .bot
 𖣘 .character @tag
 𖣘 .dare
 𖣘 .flirt
 𖣘 .gay @user
 𖣘 .pickupline
 𖣘 .question
 𖣘 .shayari
 𖣘 .ship
 𖣘 .yomamajoke
 𖣘 .truth
 𖣘 .waste @user
 𖣘 .image
 𖣘 .meme
 𖣘 .quote

───『 *reaction* 』─── 
 𖣘 .bully @tag
 𖣘 .cuddle @tag
 𖣘 .cry @tag
 𖣘 .hug @tag
 𖣘 .awoo @tag
 𖣘 .kiss @tag
 𖣘 .lick @tag
 𖣘 .pat @tag
 𖣘 .smug @tag
 𖣘 .bonk @tag
 𖣘 .yeet @tag
 𖣘 .blush @tag
 𖣘 .smile @tag
 𖣘 .wave @tag
 𖣘 .highfive @tag
 𖣘 .handhold @tag
 𖣘 .nom @tag
 𖣘 .bite @tag
 𖣘 .glomp @tag
 𖣘 .slap @tag
 𖣘 .kill @tag
 𖣘 .happy @tag
 𖣘 .wink @tag
 𖣘 .poke @tag
 𖣘 .dance @tag
 𖣘 .cringe @tag

───『 *downloader* 』─── 
 𖣘 .facebook <url>
 𖣘 .gdrive 🅟
 𖣘 .gitclone <url>
 𖣘 .igstalk
 𖣘 .instagram
 𖣘 .mediafire <url>
 𖣘 .mega
 𖣘 .modapk
 𖣘 .play <query>
 𖣘 .play2 <text>
 𖣘 .playvid <text>
 𖣘 .spotify
 𖣘 .tiktok <url>
 𖣘 .tiktokstalk
 𖣘 .twitter <url>
 𖣘 .ytmp3 <url>
 𖣘 .ytsearch
 𖣘 .ytmp4 <yt-link>
 𖣘 .wallpaper <query>

───『 *game* 』─── 
 𖣘 .slot <amount>
 𖣘 .chess [from to]
 𖣘 .chess delete
 𖣘 .chess join
 𖣘 .chess start
 𖣘 .delttt
 𖣘 .guessflag
 𖣘 .Maths <modes>
 𖣘 .ppt <rock/paper/scissors>
 𖣘 .tictactoe <tag number>

───『 *maker* 』─── 
 𖣘 .blur
 𖣘 .difuminar2
 𖣘 .hornycard
 𖣘 .hornylicense
 𖣘 .gfx1
 𖣘 .gfx2
 𖣘 .gfx3
 𖣘 .gfx4
 𖣘 .gfx5
 𖣘 .gfx6
 𖣘 .gfx7
 𖣘 .gfx8
 𖣘 .gfx9
 𖣘 .gfx10
 𖣘 .gfx11
 𖣘 .gfx12
 𖣘 .simpcard
 𖣘 .itssostupid
 𖣘 .iss
 𖣘 .stupid
 𖣘 .tweet <comment>
 𖣘 .lolicon
 𖣘 .ytcomment <comment>

───『 *sticker* 』─── 
 𖣘 .emojimix <emoji+emoji>
 𖣘 .getsticker
 𖣘 .smaker
 𖣘 .stickerwithmeme (caption|reply media)
 𖣘 .swmeme <url>
 𖣘 .swm(caption|reply media)
 𖣘 .sfull
 𖣘 .toimg <sticker>
 𖣘 .tovid
 𖣘 .trigger <@user>
 𖣘 .ttp
 𖣘 .ttp2
 𖣘 .ttp3
 𖣘 .ttp4
 𖣘 .ttp5
 𖣘 .attp
 𖣘 .attp2
 𖣘 .attp3
 𖣘 .take <name>|<author>

───『 *audio* 』───
 𖣘 .bass [vn]
 𖣘 .blown [vn]
 𖣘 .deep [vn]
 𖣘 .earrape [vn]
 𖣘 .fast [vn]
 𖣘 .fat [vn]
 𖣘 .nightcore [vn]
 𖣘 .reverse [vn]
 𖣘 .robot [vn]
 𖣘 .slow [vn]
 𖣘 .smooth [vn]
 𖣘 .tupai [vn]

───『 *news* 』─── 
 𖣘 .news
 𖣘 .technews
 𖣘 .ndtv

───『 *economy* 』───
 𖣘 .addgold <@user>
 𖣘 .addxp <@user>
 𖣘 .bank
 𖣘 .buych
 𖣘 .cock-fight <amount>
 𖣘 .buy
 𖣘 .buyall
 𖣘 .daily
 𖣘 .deposit
 𖣘 .gamble <amount> <color(red/black)>
 𖣘 .give credit [amount] [@tag]
 𖣘 .levelup
 𖣘 .rank
 𖣘 .rob
 𖣘 .roulette <amount> <color(red/black)>
 𖣘 .wallet
 𖣘 .withdraw
 𖣘 .work

───『 *anime* 』─── 
 𖣘 .anime
 𖣘 .akira
 𖣘 .akiyama
 𖣘 .anna
 𖣘 .asuna
 𖣘 .ayuzawa
 𖣘 .boruto
 𖣘 .chiho
 𖣘 .chitoge
 𖣘 .deidara
 𖣘 .erza
 𖣘 .elaina
 𖣘 .eba
 𖣘 .emilia
 𖣘 .hestia
 𖣘 .hinata
 𖣘 .inori
 𖣘 .isuzu
 𖣘 .itachi
 𖣘 .itori
 𖣘 .kaga
 𖣘 .kagura
 𖣘 .kaori
 𖣘 .keneki
 𖣘 .kotori
 𖣘 .kurumi
 𖣘 .madara
 𖣘 .mikasa
 𖣘 .miku
 𖣘 .minato
 𖣘 .naruto
 𖣘 .nezuko
 𖣘 .sagiri
 𖣘 .sasuke
 𖣘 .sakura
 𖣘 .manhwa
 𖣘 .waifu
 𖣘 .neko
 𖣘 .zerotwo
 𖣘 .loli
 𖣘 .pokedex <pokemon>
 𖣘 .trace

───『 *nsfw* 』─── 
 𖣘 .genshin
 𖣘 .swimsuit
 𖣘 .schoolswimsuit
 𖣘 .white
 𖣘 .barefoot
 𖣘 .touhou
 𖣘 .gamecg
 𖣘 .hololive
 𖣘 .uncensored
 𖣘 .sunglasses
 𖣘 .glasses
 𖣘 .weapon
 𖣘 .shirtlift
 𖣘 .chain
 𖣘 .fingering
 𖣘 .flatchest
 𖣘 .torncloth
 𖣘 .bondage
 𖣘 .demon
 𖣘 .wet
 𖣘 .pantypull
 𖣘 .headdress
 𖣘 .headphone
 𖣘 .tie
 𖣘 .anusview
 𖣘 .shorts
 𖣘 .stokings
 𖣘 .topless
 𖣘 .beach
 𖣘 .bunnygirl
 𖣘 .bunnyear
 𖣘 .idol
 𖣘 .vampire
 𖣘 .gun
 𖣘 .maid
 𖣘 .bra
 𖣘 .nobra
 𖣘 .bikini
 𖣘 .whitehair
 𖣘 .blonde
 𖣘 .pinkhair
 𖣘 .bed
 𖣘 .ponytail
 𖣘 .nude
 𖣘 .dress
 𖣘 .underwear
 𖣘 .foxgirl
 𖣘 .uniform
 𖣘 .skirt
 𖣘 .sex
 𖣘 .sex2
 𖣘 .sex3
 𖣘 .breast
 𖣘 .twintail
 𖣘 .spreadpussy
 𖣘 .tears
 𖣘 .seethrough
 𖣘 .breasthold
 𖣘 .drunk
 𖣘 .fateseries
 𖣘 .spreadlegs
 𖣘 .openshirt
 𖣘 .headband
 𖣘 .food
 𖣘 .close
 𖣘 .tree
 𖣘 .nipples
 𖣘 .erectnipples
 𖣘 .horns
 𖣘 .greenhair
 𖣘 .wolfgirl
 𖣘 .catgirl
 𖣘 .nsfw
 𖣘 .ass
 𖣘 .boobs
 𖣘 .lesbian
 𖣘 .pussy
 𖣘 .pack
 𖣘 .xvid
 𖣘 .xnxx

───『 *tools* 』───
 𖣘 .nowa
 𖣘 .qr <text>
 𖣘 .qrcode <text>
 𖣘 .style <key> <text>
 𖣘 .weather *<place>*
 𖣘 .dehaze
 𖣘 .recolor
 𖣘 .hdr
 𖣘 .length <amount>
 𖣘 .tinyurl <link>
 𖣘 .shorten <link>
 𖣘 .tempmail
 𖣘 .shazam
 𖣘 .cal <equation>
 𖣘 .carbon <code>
 𖣘 .define <word>
 𖣘 .element
 𖣘 .google
 𖣘 .itunes
 𖣘 .lyrics
 𖣘 .imdb
 𖣘 .course
 𖣘 .randomcourse
 𖣘 .readmore <text1>|<text2>
 𖣘 .vv
 𖣘 .removebg
 𖣘 .ss <url>
 𖣘 .ssf <url>
 𖣘 .subreddit
 𖣘 .telesticker  Ⓛ
 𖣘 .tourl
 𖣘 .translate <lang> <text>
 𖣘 .true
 𖣘 .tts <lang> <task>
 𖣘 .wa
 𖣘 .wikipedia

───『 *AI* 』─── 
 𖣘 .bing
 𖣘 .dalle
 𖣘 .chatgpt
 𖣘 .toanime
 𖣘 .gitagpt
 𖣘 .tocartoon
 𖣘 .ai
 𖣘 .bard
 𖣘 .alexa
 𖣘 .bingimg
 𖣘 .gemini

───『 *religion* 』─── 
 𖣘 .gita [verse_number]
 𖣘 .quran [surah_number|surah_name]
 𖣘 .bible

───『 *Bot Menu* 』─── 
 𖣘 .ping
 𖣘 .runtime
 𖣘 .script
 𖣘 .server
 𖣘 .blocklist
 𖣘 .alive
 𖣘 .info
 𖣘 .owner
 𖣘 .totalfeature
 𖣘 .list
 𖣘 .messi
 𖣘 .cristianoronaldo
 𖣘 .cr7
 𖣘 .ppcouple
 𖣘 .ppcp
 𖣘 .pinterest
 𖣘 .reg <name.age>
 𖣘 .mysn
 𖣘 .unreg 
 
───『 *plugin* 』─── 
 𖣘 .plugins
 𖣘 .install <Gist URL><

       *BUGATTI*
`

  conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, null, rpyt)
  m.react(done)
}
handler.help = ['main']
handler.tags = ['group']
handler.command = ['menu2', 'help2']

export default handler
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
  const time = moment.tz('Afica/Nairobi').format('HH')
  let res = 'happy early in the day☀️'
  if (time >= 4) {
    res = 'Good Morning 🌄'
  }
  if (time >= 10) {
    res = 'Good Afternoon ☀️'
  }
  if (time >= 15) {
    res = 'Good Afternoon 🌇'
  }
  if (time >= 18) {
    res = 'Good Night 🌙'
  }
  return res
}
const quotes = [
  "I'm not lazy, I'm just on my energy saving mode.",
  'Life is short, smile while you still have teeth.',
  'I may be a bad influence, but darn I am fun!',
  "I'm on a whiskey diet. I've lost three days already.",
  "Why don't some couples go to the gym? Because some relationships don't work out.",
  'I told my wife she should embrace her mistakes... She gave me a hug.',
  "I'm great at multitasking. I can waste time, be unproductive, and procrastinate all at once.",
  "You know you're getting old when you stoop to tie your shoelaces and wonder what else you could do while you're down there.",
  "I'm so good at sleeping, I can do it with my eyes closed.",
  'If you think nobody cares if you’re alive, try missing a couple of payments.',
  "I used to think I was indecisive, but now I'm not so sure.",
  "If you can't convince them, confuse them.",
  'I told my wife she was drawing her eyebrows too high. She looked surprised.',
  "I'm not clumsy, I'm just on a mission to test gravity.",
  "I told my wife she should do more push-ups. She said, 'I could do a hundred!' So I counted to ten and stopped.",
  "Life is like a box of chocolates; it doesn't last long if you're hungry.",
  "I'm not saying I'm Wonder Woman, I'm just saying no one has ever seen me and Wonder Woman in the same room together.", 
  'Why do they call it beauty sleep when you wake up looking like a troll?',
  "I don't always lose my phone, but when I do, it's always on silent.",
  'My bed is a magical place where I suddenly remember everything I was supposed to do.',
  'I love the sound you make when you shut up.',
  "I'm not arguing, I'm just explaining why I'm right.",
  "I'm not a complete idiot, some parts are missing.",
  'When life gives you lemons, squirt someone in the eye.',
  "I don't need anger management. You just need to stop making me angry.",
  "I'm not saying I'm Batman. I'm just saying no one has ever seen me and Batman in the same room together.",
  "I'm not saying I'm Superman. I'm just saying no one has ever seen me and Superman in the same room together.",
  "I'm not saying I'm Spider-Man. I'm just saying no one has ever seen me and Spider-Man in the same room together.",
  "I'm not saying I'm a superhero. I'm just saying no one has ever seen me and a superhero in the same room together.",
  'The early bird can have the worm because worms are gross and mornings are stupid.',
  'If life gives you lemons, make lemonade. Then find someone whose life has given them vodka and have a party!',
  'The road to success is always under construction.',
  "I am so clever that sometimes I don't understand a single word of what I am saying.",
  'Some people just need a high-five. In the face. With a chair.',
  "I'm not saying I'm perfect, but I'm pretty close.",
  'A day without sunshine is like, you know, night.',
  'The best way to predict the future is to create it.',
  "If you can't be a good example, then you'll just have to be a horrible warning.",
  "I don't know why I keep hitting the escape button. I'm just trying to get out of here.",
  "I'm not lazy. I'm on energy-saving mode.",
  "I don't need a hairstylist, my pillow gives me a new hairstyle every morning.",
  "I don't have a bad handwriting, I have my own font.",
  "I'm not clumsy. It's just the floor hates me, the table and chairs are bullies, and the walls get in my way.",
  "I'm not saying I'm Batman. I'm just saying no one has ever seen me and Batman in the same room together.",
  "I'm not saying I'm Wonder Woman. I'm just saying no one has ever seen me and Wonder Woman in the same room together.",
  "I'm not saying I'm Superman. I'm just saying no one has ever seen me and Superman in the same room together.",
  "I'm not saying I'm Spider-Man. I'm just saying no one has ever seen me and Spider-Man in the same room together.",
  "I'm not saying I'm a superhero. I'm just saying no one has ever seen me and a superhero in the same room together.",
]
