const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "scan", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
𝙷𝙴𝙻𝙻𝙾𝚆 : ${ms.pushName}
*𝙳𝙴𝙿𝙻𝙾𝚈 𝚈𝙾𝚄𝚁 𝙾𝚆𝙽 𝙱𝚄𝙶𝙰𝚃𝚃𝙸 𝙾𝚁 𝚃𝙴𝚂𝙻𝙰 𝙷𝙴𝚁𝙴*
*𝚈𝙾𝚄𝚁 𝙳𝙴𝙿𝙻𝙾𝚈𝙴𝚁* : ${s.OWNER_NAME}
*𝚈𝙾𝚄𝚁 𝙽𝙰𝙼𝙴* : ${ms.pushName}
*𝚃𝙾𝚃𝙰𝙻 𝚄𝚂𝙴𝚁𝚂* : 
*𝙱𝙾𝚃 𝙳𝙴𝙾𝙻𝙾𝚈𝙴𝙳* : 𝟷𝟹𝟿+ 𝚊𝚙𝚙𝚜 𝚍𝚎𝚙𝚕𝚘𝚢𝚎𝚍 𝚝𝚘𝚍𝚊𝚢

*𝚂𝚃𝙴𝙿𝚂 𝚃𝙾 𝙶𝙴𝚃 𝚂𝙴𝚂𝚂𝙸𝙾𝙽 𝙸𝙳*
*𝟷.𝙾𝙿𝙴𝙽 𝙻𝙸𝙽𝙺 𝙱𝙴𝙻𝙾𝚆*
https://bugatti-session.onrender.com
*𝟸.𝙴𝙽𝚃𝙴𝚁 𝚈𝙾𝚄𝚁 𝚆𝙷𝙰𝚃𝚂𝙰𝙰𝙿 𝙽𝚄𝙼𝙱𝙴𝚁 𝚆𝙸𝚃𝙷 𝙲𝙾𝚄𝙽𝚃𝚈 𝙲𝙾𝙳𝙴 𝙴𝚐. 𝟸𝟻4𝟽4000𝚡𝚡𝚡*
*𝟹.𝙱𝚄𝙶𝙰𝚃𝚃𝙸 𝚆𝙸𝙻𝙻 𝚂𝙴𝙽𝙳 𝚈𝙾𝚄 𝙰 𝙲𝙾𝙳𝙴 𝙲𝙾𝙿𝚈 𝚃𝙷𝙰𝚃 𝙲𝙾𝙳𝙴,𝚃𝙷𝙴𝙽 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝚆𝙸𝙻𝙻 𝚂𝙴𝙽𝙳 𝙽𝙾𝚃𝙸𝙵𝙸𝙲𝙰𝚃𝙸𝙾𝙽.*
*𝟺.𝚃𝙾𝙿 𝙾𝙽 𝚃𝙷𝙰𝚃 𝙽𝙾𝚃𝙸𝙵𝙸𝙲𝙰𝚃𝙸𝙾𝙽 𝚃𝙷𝙴𝙽 𝙴𝙽𝚃𝙴𝚁 𝚃𝙷𝙴 𝙲𝙾𝙳𝙴 𝚃𝙷𝙰𝚃 𝙱𝚄𝙶𝙰𝚃𝚃𝙸 𝚂𝙴𝙽𝚃 𝚈𝙾𝚄*
*𝟻.𝙸𝚃 𝚆𝙸𝙻𝙻 𝙻𝙾𝙰𝙳 𝙵𝙾𝚁 𝚂𝙾𝙼𝙴𝚃𝙸𝙼𝙴 𝚃𝙷𝙴𝙽 𝙱𝚄𝙶𝙰𝚃𝚃𝙸 𝙾𝚁 𝚃𝙴𝚂𝙻𝙰 𝚆𝙸𝙻𝙻 𝚂𝙴𝙽𝙳 𝚈𝙾𝚄 𝙰 𝚂𝙴𝚂𝚂𝙸𝙾𝙽 𝙸𝙳 𝙸𝙽 𝚈𝙾𝚄𝚁 𝙸𝙽𝙱𝙾𝚇 𝙸𝙽 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙰𝚃 𝚈𝙾𝚄𝚁 𝙾𝚆𝙽 𝙽𝚄𝙼𝙱𝙴𝚁*
*6.𝙲𝙾𝙿𝚈 𝚃𝙷𝙴 𝚂𝙴𝚂𝚂𝙸𝙾𝙽 𝙸𝙳 𝙰𝙽𝙳 𝚂𝙴𝙽𝙳 𝚃𝙾 𝚈𝙾ur 𝙳𝙴𝙿𝙻𝙾𝚈𝙴𝚁*
   
   𝗡𝗼𝘁𝗲:𝗕𝗼𝘁𝘀 𝗮𝗿𝗲𝗻'𝘁 𝗳𝗼𝗿 𝗳𝗿𝗲𝗲. 𝗛𝗲𝗿𝗼𝗸𝘂 𝗶𝘀 𝗽𝗮𝗶𝗱 𝗳𝗼𝗿
 `;
    
let menuMsg = `
> Made by : ® Marisel™
`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Bugatti*, déveloper Marisel" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Bugatti*, déveloper Marisel" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

}); 

                    
