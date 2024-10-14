let handler = async (m, { conn }) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/misc/lolice', {
    avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://files.catbox.moe/w5vpcm.jpg'),
    }), 'error.png', '*You only belong in jail*', m)
    }
    handler.help = ['lolicon']
    handler.tags = ['maker']
    handler.command = /^(lolicon)$/i
    export default handler
