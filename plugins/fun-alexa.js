import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
  const name = conn.getName(m.sender)
  if (!text) {
    throw `Hi *${name}*, do you want to talk? Respond with *${usedPrefix + command}* (your message)\n\n📌 Example: *${usedPrefix + command}* Hi Marisel`
  }

  m.react('🗣️')

  const msg = encodeURIComponent(text)

  const res = await fetch(`https://ultimetron.guruapi.tech/rekha?prompt=${msg}`)

  const json = await res.json()

  let reply = json.result.response
  m.reply(reply)
}

handler.help = ['Marisel']
handler.tags = ['fun']
handler.command = ['boy', 'alexa']

export default handler
