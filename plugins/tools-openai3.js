import fetch from 'node-fetch'

let handler = async (m, { text, conn, usedPrefix, command }) => {
  if (!text && !(m.quoted && m.quoted.text)) {
    throw `Please provide some text or quote a message to get a response.`
  }

  if (!text && m.quoted && m.quoted.text) {
    text = m.quoted.text
  }

  try {
    m.react(rwait)
    
    conn.sendPresenceUpdate('composing', m.chat)
    const prompt = encodeURIComponent(text)
    const senderNumber = m.sender.replace(/[^0-9]/g, '')
    const session = `GURU_BOT_${senderNumber}`
    const guru1 = `https://gpt4.guruapi.tech/user?username=${session}&query=${prompt}`

    try {
      let response = await fetch(guru1)
      let data = await response.json()
      let result = data.result

      if (!result) {
        throw new Error('No valid JSON response from the first API')
      }

      await conn.sendButton2(m.chat,result, author, '', [['📚Chatgpt💟', `.gpt ${text}`]], null, [['Follow Us🪀', `https://whatsapp.com/channel/0029Vajvy2kEwEjwAKP4SI0x`]], m)
      m.react('✅')
    } catch (error) {
      console.error('Error from the first API:', error)

      //const model = 'llama'
     // const senderNumber = m.sender.replace(/[^0-9]/g, '')
      //const session = `GURU_BOT_${senderNumber}`
      const guru2 = `https://ultimetron.guruapi.tech/gpt3?prompt=${prompt}`

      let response = await fetch(guru2)
      let data = await response.json()
      let result = data.completion

      await conn.sendButton2(m.chat,result, author, '', [['📚 Chatgpt 💟', `.gpt ${text}`]], null, [['Follow 🪀', `https://whatsapp.com/channel/0029Vajvy2kEwEjwAKP4SI0x`]], m)
      m.react('✅')
    }
  } catch (error) {
    console.error('Error:', error)
    throw `*ERROR*`
  }
}
handler.help = ['chatgpt']
handler.tags = ['AI']
handler.command = ['gds']

export default handler
