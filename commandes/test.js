"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "test", reaction: "🏎️", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = ' 𝑻𝒉𝒊𝒔 𝒊𝒔 *𝑩𝑼𝑮𝑨𝑻𝑻𝑰* \n\n ' + "> 𝑻𝒉𝒆 𝑺𝒖𝒑𝒆𝒓 𝑭𝒂𝒔𝒕 𝑩𝒐𝒕";
    let d = '> by *𝑲𝒊𝒏𝒈 𝑴𝒂𝒓𝒊𝒔𝒆𝒍*';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/ee29736dc8aa587cdf145.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *Zokou* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *Djalega++*'
      let varmess=z+d
      var img='https://telegra.ph/file/ee29736dc8aa587cdf145.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
