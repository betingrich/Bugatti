const { zokou } = require('../framework/zokou');
const traduire = require("../framework/traduction") ;
const { default: axios } = require('axios')

zokou({ nomCom: "bible",
        reaction: "📖",
        categorie: "General" }, async (dest, zk, commandeOptions) => {
    
    const { repondre, arg, ms } = commandeOptions; 

const verse = arg.join(' ');

if (!verse) return repondre(`Please specify the book, the chapter and the verse you want to read. Example: bible john 3:16`);

let VerseRes = await fetch(`https://bible-api.com/${verse}`);

if (!VerseRes.ok) return repondre(`Please specify the chapter number or name. Example: bible john 3:16`);

let verseData = await VerseRes.json();

let bibleChapter = `📖 *𝐓𝐇𝐄 𝐇𝐎𝐋𝐘 𝐁𝐈𝐁𝐋𝐄*\n
📜 *_𝑩𝒐𝒐𝒌:_* ${verseData.reference}\n
🔢 *_𝑽𝒆𝒓𝒔𝒆𝒔:_* ${verseData.verses.length}\n
🤍 *_𝑾𝒐𝒓𝒅:_* ${verseData.text}\n
🌍 *_𝑳𝒂𝒏𝒈𝒖𝒂𝒈𝒆_:* ${verseData.translation_name}
__________________________________
    𝐇𝐎𝐋𝐘 𝐁𝐈𝐁𝐋𝐄 𝐁𝐘 𝐁𝐔𝐆𝐀𝐓𝐓𝐈
      \n\n`

await repondre(bibleChapter);

});
