"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "test", reaction: "🏎️", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = ' 𝒀𝒆𝒔 𝑰 𝒂𝒎 *𝑩𝒖𝒈𝒂𝒕𝒕𝒊* \n\n ' + "> 𝑻𝒉𝒆 𝑺𝒖𝒑𝒆𝒓 𝑭𝒂𝒔𝒕 𝑩𝒐𝒕";
    let d = '𝑩𝒚 *𝑲𝒊𝒏𝒈 𝑴𝒂𝒓𝒊𝒔𝒆𝒍*';
    let e = '𝒔𝒖𝒃𝒔𝒄𝒓𝒊𝒃𝒆''https://youtube.com/@wemacomic?si=PpRZNIc34qhnXiM6'
    let varmess = z + d + e;
    var img = 'https://telegra.ph/file/abc304e66c2a3e8b2a557.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["bugatti","b"]
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
