const { zokou } = require('../framework/zokou');
const axios = require('axios');
const { translate } = require('@vitalets/google-translate-api');

const BASE_URL = 'https://bible-api.com';
const API_KEY = 'YOUR_API_KEY_HERE';  // Replace with your actual API key

zokou({
  nomCom: 'bible',
  desc: 'Fetch a Bible chapter and translate it',
  Categorie: 'general',
  reaction: '📖',
  fromMe: 'true',
}, 
async (dest, zk, commandeOptions) => {
  const { ms, arg, repondre } = commandeOptions;

  try {
    // Extract the chapter number or name from the command text.
    let chapterInput = arg.join(' ').trim();

    if (!chapterInput) {
      return repondre(`Please specify the chapter number or name. Example: -bible john 3:16`);
    }

    // Encode the chapterInput to handle special characters
    chapterInput = encodeURIComponent(chapterInput);

    // Make an API request to fetch the chapter information with API key
    let chapterRes = await axios.get(`${BASE_URL}/${chapterInput}?api_key=${API_KEY}`);

    if (!chapterRes.data) {
      return repondre(`Error fetching chapter data. Please specify the chapter number or name. Example: -bible john 3:16`);
    }

    let chapterData = chapterRes.data;

    // Translate the chapter to English, Swahili, and KJV
    let translatedChapterEnglish = await translate(chapterData.text, { to: 'en', autoCorrect: true });
    let translatedChapterSwahili = await translate(chapterData.text, { to: 'sw', autoCorrect: true });

    // Fetch the King James Version (KJV) translation
    let kjvRes = await axios.get(`${BASE_URL}/${chapterInput}?translation=kjv&api_key=${API_KEY}`);
    let kjvText = kjvRes.data.text;

    // Formatting the content with a smart border
    let maxLength = Math.max(
      '📖 *The Holy Bible*'.length,
      `📜 *Chapter ${chapterData.reference}*`.length,
      `Type: ${chapterData.translation_name}`.length,
      `Number of verses: ${chapterData.verses.length}`.length,
      `🔮 *Chapter Content (English):*`.length + translatedChapterEnglish.text.length,
      `🔮 *Chapter Content (Swahili):*`.length + translatedChapterSwahili.text.length,
      `🔮 *Chapter Content (King James Version):*`.length + kjvText.length
    );

    let border = '━'.repeat(maxLength + 2);

    let bibleChapter = `
┏${border}┓
┃ 📖 *The Holy Bible*                ┃
┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┃
┃ 📜 *Chapter ${chapterData.reference}*      ┃
┃ Type: ${chapterData.translation_name}      ┃
┃ Number of verses: ${chapterData.verses.length} ┃
┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┃
┃ 🔮 *Chapter Content (English):*    ┃
┃ ${translatedChapterEnglish.text.padEnd(maxLength - 3)}┃
┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┃
┃ 🔮 *Chapter Content (Swahili):*    ┃
┃ ${translatedChapterSwahili.text.padEnd(maxLength - 3)}┃
┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┃
┃ 🔮 *Chapter Content (King James Version):* ┃
┃ ${kjvText.padEnd(maxLength - 3)}┃
┗${border}┛`;

    await repondre(bibleChapter);
  } catch (error) {
    console.error(error);
    await repondre(`Error: ${error.message}`);
  }
});

export default bibleChapterHandler;
