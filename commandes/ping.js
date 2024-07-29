"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "ping", reaction: "🏎️", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '*𝑩𝒖𝒈𝒂𝒕𝒕𝒊 𝒊𝒔 𝒐𝒏𝒍𝒊𝒏𝒆*  \n\n ' + "𝑩𝒖𝒈𝒂𝒕𝒕𝒊 𝒊𝒔 𝒐𝒏 𝑮𝒐𝒐𝒅 𝒔𝒑𝒆𝒆𝒅";
    let d = '                                                                           𝑺𝒑𝒆𝒆𝒅 𝒔𝒕𝒂𝒕𝒖𝒔✨';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/609a52915d8c6dfbe5422.jpg';
    await zk.sendMessage(dest, { video: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon ping");
