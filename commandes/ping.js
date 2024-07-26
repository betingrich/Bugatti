const { zokou } = require("../framework/zokou");
const moment = require("moment-timezone");
const { default: axios } = require('axios');
//const conf = require('../set');


zokou({ nomCom: 'ping',
    desc: 'To check ping',
    Categorie: 'General',
    reaction: '🏎️', 
    fromMe: 'true', 

       
  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;
    const { start} = new Date().getTime()
    return repondre('*𝑩𝒖𝒈𝒂𝒕𝒕𝒊 𝒓𝒆𝒔𝒑𝒐𝒏𝒔𝒆 𝑺𝒑𝒆𝒆𝒅*\n ```' + ▱▱▱▰▰▰▰ :0.0013 MS* + '``` *m/s*') 
    const { end } = new Date().getTime()
    await zok.sendMessage('*Pong!*\n ```' + (end - start) + '``` *ms*')
  }
)
