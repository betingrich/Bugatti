let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
let chat = global.db.data.chats[m.chat]
chat.welcome = false
await conn.reply(id, `*${botname} Twas great being part of you all bye 👋🏻*`) 
await conn.groupLeave(id)
try {  
chat.welcome = true
} catch (e) {
await m.reply(`error`) 
return console.log(e)
}}
handler.command = /^(left|leavegc|exit|leave)$/i
handler.group = true
handler.rowner = true
export default handler
