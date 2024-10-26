import { promises, readFileSync } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'

let groupmenu = `
 𖣘 ───『 *group* 』───𖣘
 𖣘 .getbio <@tag/reply>  Ⓛ
 𖣘 .animequote
 𖣘 .Setdesc <text>
 𖣘 .setname <text>
 𖣘 .add
 𖣘 .delete
 𖣘 .delwarn @user
 𖣘 .demote (@tag)
 𖣘 .infogp
 𖣘 .hidetag
 𖣘 .invite <917xxx>
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
  ╰──────────⳹`

let ownermenu = `
 𖣘 ───『 *owner* 』───𖣘
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
 𖣘 .reset <54xxx>
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
  ╰──────────⳹`

let funmenu = `
 𖣘 ───『 *fun* 』─── 𖣘
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
  ╰──────────⳹`

let reactmenu = `
 𖣘 ───『 *reaction* 』─── 𖣘
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
  ╰──────────⳹`

let dlmenu = `
 𖣘 ───『 *downloader* 』─── 𖣘
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
  ╰──────────⳹`

let gamemenu = `
 𖣘 ───『 *game* 』─── 𖣘
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
  ╰──────────⳹`
let logomenu = `
 𖣘 ───『 *maker* 』─── 𖣘
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
  ╰──────────⳹`

let stickermenu = `
 𖣘───『 *sticker* 』─── 𖣘
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
  ╰──────────⳹`

let audiomenu = `
 𖣘───『 *audio* 』───𖣘
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
  ╰──────────⳹`

let newsmenu = `
 𖣘 ───『 *news* 』─── 𖣘
 𖣘 .news
 𖣘 .technews
 𖣘 .ndtv
  ╰──────────⳹
  `
let economy = `
 𖣘 ───『 *economy* 』───𖣘
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
  ╰──────────⳹`
let animemenu = `
 𖣘───『 *anime* 』─── 𖣘
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
  ╰──────────⳹
  `
let nsfwmenu = `
 𖣘 ───『 *nsfw* 』─── 𖣘
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
  ╰──────────⳹`

let toolsmenu = `
 𖣘 ───『 *tools* 』───𖣘
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
 𖣘 .readvo
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
  ╰──────────⳹`

let Aimenu = `
 𖣘 ───『 *AI* 』─── 𖣘
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
  ╰──────────⳹
  `
let religionmenu = `
 𖣘 ───『 *religion* 』─── 𖣘
 𖣘 .gita [verse_number]
 𖣘 .quran [surah_number|surah_name]
 𖣘 .bible
  ╰──────────⳹`

let botmenu = `
 𖣘 ───『 *Bot Menu* 』─── 𖣘
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
  ╰──────────⳹
  `
let pluginmenu = `
 𖣘 ───『 *plugin* 』─── 𖣘
 𖣘 .plugins
 𖣘 .install <Gist URL>
  ╰──────────⳹
  `

const handler = async (m, { conn, command, text, args, usedPrefix }) => {
  let glb = global.db.data.users
  let usrs = glb[m.sender]
  let tag = `@${m.sender.split('@')[0]}`
  let mode = global.opts['self'] ? 'Private' : 'Public'

  let { age, exp, limit, level, role, registered, credit } = glb[m.sender]
  let { min, xp, max } = xpRange(level, global.multiplier)
  let name = await conn.getName(m.sender)
  let premium = glb[m.sender].premiumTime
  let prems = `${premium > 0 ? 'Premium' : 'Free'}`
  let platform = os.platform()

  let ucpn = `${ucapan()}`

  let _uptime = process.uptime() * 1000
  let _muptime
  if (process.send) {
    process.send('uptime')
    _muptime =
      (await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      })) * 1000
  }
  let muptime = clockString(_muptime)
  let uptime = clockString(_uptime)

  let totalfeatures = Object.values(global.plugins).filter(v => v.help && v.tags).length
  let totalreg = Object.keys(glb).length

  conn.gurumenu = conn.gurumenu ? conn.gurumenu : {}

  global.fcontact = {
    key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: 'status@broadcast' },
    message: {
      contactMessage: {
        displayName: `${name}`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
  }
  const infoText = `    
𖣘───『 *BUGATTI*』───𖣘
𖣘 *${ucpn}*
𖣘 *Bot Name:* ${botname}
𖣘 *Mode:* ${mode}
𖣘 *Platform:* ${platform}
𖣘 *Prefix:* [ *${usedPrefix}* ]
𖣘 *Uptime:* ${muptime}
╰──────────⳹
> © Bugatti by Marisel\n\n
╭───────⳹
│ *1.* Bot Menu
│ *2.* Owner Menu
│ *3.* Group Menu
│ *4.* Fun Menu
│ *5.* Reaction Menu
│ *6.* Downloader Menu
│ *7.* Game Menu
│ *8.* Logo Menu
│ *9.* Sticker Menu
│ *10.* Audio Menu
│ *11.* News Menu
│ *12.* Economy Menu
│ *13.* Anime Menu
│ *14.* NSFW Menu
│ *15.* Tools Menu
│ *16.* AI Menu
│ *17.* Religion Menu
│ *18.* Plugin Menu
╰───────⳹
 `
  const { result, key, timeout } = await conn.sendMessage(
    m.chat,
    { video: { url: menuvid }, caption: infoText.trim(),
    contextInfo: {
      mentionedJid: [m.sender],
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363299029326322@newsletter',
        newsletterName: 'Marisel',
        serverMessageId: -1,
      },
      forwardingScore: 999,
      externalAdReply: {
        title: 'Bugatti',
        body: 'ᴍᴇɴᴜ',
        thumbnailUrl: 'https://files.catbox.moe/wx45yv.jpg',
        sourceUrl: 'https://whatsapp.com/channel/0029VajYjMJJf05aRQXKx82W',
        mediaType: 1,
        renderLargerThumbnail: false,
      },
    },
    
    gifPlayback: true, gifAttribution: 0 },
    { quoted: fcontact }
  )

  // Save the menu options to Bugatti
  conn.Bugattimenu[m.sender] = {
    result,
    key,
    timeout: setTimeout(() => {
      conn.sendMessage(m.chat, {
        delete: key,
      })
      delete conn.gurumenu[m.sender]
    }, 150 * 1000),
  }
}

handler.before = async (m, { conn }) => {
  conn.Bugattimenu = conn.Bugattimenu ? conn.Bugattimenu : {}
  if (m.isBaileys || !(m.sender in conn.Bugattimenu)) return
  const { result, key, timeout } = conn.Bugattimenu[m.sender]
  if (!m.quoted || m.quoted.id !== key.id || !m.text) return
  const choice = m.text.trim()

  if (choice === '1') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://i.imgur.com/tStJm2M.jpeg' }, caption: botmenu },
      { quoted: fcontact }
    )
  } else if (choice === '2') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://i.imgur.com/tStJm2M.jpeg' }, caption: ownermenu },
      { quoted: fcontact }
    )
  } else if (choice === '3') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://i.imgur.com/tStJm2M.jpeg' }, caption: groupmenu },
      { quoted: fcontact }
    )
  } else if (choice === '4') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://i.imgur.com/tStJm2M.jpeg' }, caption: funmenu },
      { quoted: fcontact }
    )
  } else if (choice === '5') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://i.imgur.com/tStJm2M.jpeg' }, caption: reactmenu },
      { quoted: fcontact }
    )
  } else if (choice === '6') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://i.imgur.com/tStJm2M.jpeg' }, caption: dlmenu },
      { quoted: fcontact }
    )
  } else if (choice === '7') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://i.imgur.com/tStJm2M.jpeg' }, caption: groupmenu },
      { quoted: fcontact }
    )
  } else if (choice === '8') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://i.imgur.com/tStJm2M.jpeg' }, caption: logomenu },
      { quoted: fcontact }
    )
  } else if (choice === '9') {
    await conn.sendMessage(
      m.chat,
      {
        image: { url: 'https://i.imgur.com/tStJm2M.jpeg' },
        caption: stickermenu,
      },
      { quoted: fcontact }
    )
  } else if (choice === '10') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://i.imgur.com/tStJm2M.jpeg' }, caption: audiomenu },
      { quoted: fcontact }
    )
  } else if (choice === '11') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://i.imgur.com/tStJm2M.jpeg' }, caption: newsmenu },
      { quoted: fcontact }
    )
  } else if (choice === '12') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://i.imgur.com/tStJm2M.jpeg' }, caption: economy },
      { quoted: fcontact }
    )
  } else if (choice === '13') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://i.imgur.com/tStJm2M.jpeg' }, caption: animemenu },
      { quoted: fcontact }
    )
  } else if (choice === '14') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://i.imgur.com/tStJm2M.jpeg' }, caption: nsfwmenu },
      { quoted: fcontact }
    )
  } else if (choice === '15') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://i.imgur.com/tStJm2M.jpeg' }, caption: toolsmenu },
      { quoted: fcontact }
    )
  } else if (choice === '16') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://i.imgur.com/tStJm2M.jpeg' }, caption: Aimenu },
      { quoted: fcontact }
    )
  } else if (choice === '17') {
    await conn.sendMessage(
      m.chat,
      {
        image: { url: 'https://i.imgur.com/tStJm2M.jpeg' },
        caption: religionmenu,
      },
      { quoted: fcontact }
    )
  } else if (choice === '18') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://i.imgur.com/tStJm2M.jpeg' }, caption: pluginmenu },
      { quoted: fcontact }
    )
  } else {
    m.reply('Invalid choice. Please reply with a valid number.')
  }
}

handler.help = ['play']
handler.tags = ['downloader']
handler.command = /^(menu)$/i
handler.limit = true
export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}

function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [
    ye,
    ' *Years 🗓️*\n',
    mo,
    ' *Month 🌙*\n',
    d,
    ' *Days ☀️*\n',
    h,
    ' *Hours 🕐*\n',
    m,
    ' *Minute ⏰*\n',
    s,
    ' *Second ⏱️*',
  ]
    .map(v => v.toString().padStart(2, 0))
    .join('')
}

function ucapan() {
  const time = moment.tz('Africa/Lagos').format('HH')
  let res = 'Good morning ☀️'
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
