const {
  zokou 
} = require("../framework/zokou");
const axios = require("axios");
const Genius = require("genius-lyrics");
const Client = new Genius.Client("jKTbbU-6X2B9yWWl-KOm7Mh3_Z6hQsgE4mmvwV3P3Qe7oNa9-hsrLxQV5l5FiAZO");
zokou({
  'nomCom': "bible",
  'reaction': '🎎',
  'categorie': "General"
}, async (_0x4cf29d, _0x20141d, _0x220f4b) => {
  const {
    repondre: _0x367c6f,
    arg: _0x3ef7d3,
    ms: _0x428b1c
  } = _0x220f4b;
  const _0xeccdd8 = _0x3ef7d3.join(" ");
  if (!_0xeccdd8) {
    return _0x367c6f("Please specify the book, the chapter and the verse you want to read. Example: bible Romans 6:23");
  }
  let _0x13c9ce = await fetch("https://bible-api.com/" + _0xeccdd8);
  if (!_0x13c9ce.ok) {
    return _0x367c6f("Please specify the chapter number or name. Example: bible john 3:16");
  }
  let _0x5a4afb = await _0x13c9ce.json();
  let _0x5aeaed = "📖 *THE HOLY BIBLE*\n\n📜 *_WE'RE READING:_* " + _0x5a4afb.reference + "\n\n🔢 *_NUMBER OF VERSES:_* " + _0x5a4afb.verses.length + "\n\n🤍 *_NOW READ:_* " + _0x5a4afb.text + "\n\n🌍 *_LANGUAGE_:* " + _0x5a4afb.translation_name + "\n\n\n╭────────────────◆\n│ *_Engine by Marisel._*\n╰─────────────────◆";
  await _0x367c6f(_0x5aeaed);
});
zokou({
  'nomCom': "poll",
  'reaction': '✨',
  'categorie': "General"
}, async (_0x13de1a, _0x43a162, _0x3a3288) => {
  const {
    repondre: _0x36b7af,
    arg: _0x48d16b,
    ms: _0x9c015f
  } = _0x3a3288;
  const _0x276531 = _0x48d16b.join(" ");
  let [_0x2f164b, _0x223126] = _0x276531.split('/');
  if (_0x276531.split('/') < 2) {
    return _0x36b7af("Incorrect format.\nExample: poll what is 1+1/2, 3, 4");
  }
  let _0xc69d5 = [];
  for (let _0x15e20e of _0x223126.split(',')) {
    _0xc69d5.push(_0x15e20e);
  }
  await _0x43a162.sendMessage(_0x13de1a, {
    'poll': {
      'name': _0x2f164b,
      'values': _0xc69d5
    }
  });
});
zokou({
  'nomCom': "fact",
  'reaction': '✌️',
  'categorie': "User"
}, async (_0x5b46b3, _0x5a76cb, _0x462673) => {
  const {
    repondre: _0x28655b,
    arg: _0x44b82f,
    ms: _0x361925
  } = _0x462673;
  const _0x1cf8e3 = await fetch("https://nekos.life/api/v2/fact");
  const _0x2bced7 = await _0x1cf8e3.json();
  _0x28655b("◆━━━━━━✦FACT✦━━━━━━◆ \n*◇* " + _0x2bced7.fact + "\n\n\n\n\n*◇* Engine by *Marisel*\n\n╔═════◇\n║◇ *KEEP USING BUGATTI*\n╚════════════════════> ");
});
zokou({
  'nomCom': "quotes",
  'reaction': '🗿',
  'categorie': "User"
}, async (_0x4e827e, _0x12093a, _0x38c7a4) => {
  const {
    repondre: _0x54c703,
    arg: _0x32e279,
    ms: _0x2019ab
  } = _0x38c7a4;
  const _0x49b2b2 = await fetch("https://favqs.com/api/qotd");
  const _0x298432 = await _0x49b2b2.json();
  const _0x2e83bd = "\n◆━━━━━━✦QUOTE✦━━━━━━◆ \n◇ _" + _0x298432.quote.body + "_\n\n\n◇ *AUTHOR:* " + _0x298432.quote.author + "\n\n\n\n\n◇ _Engine by:_ *Marisel*\n\n\n╔═════◇\n║◇ *KEEP USING BUGATTI*\n╚════════════════════> ";
  _0x54c703(_0x2e83bd);
});
zokou({
  'nomCom': "define",
  'reaction': '😁',
  'categorie': "Search"
}, async (_0xc23d93, _0x48a764, _0x543dbd) => {
  const {
    repondre: _0x283df3,
    arg: _0x2a306b,
    ms: _0x5ea53a
  } = _0x543dbd;
  if (!_0x2a306b || _0x2a306b.length === 0) {
    return _0x283df3("provide a term");
  }
  const _0x2d09a4 = _0x2a306b.join(" ");
  try {
    let {
      data: _0x132b0d
    } = await axios.get("http://api.urbandictionary.com/v0/define?term=" + _0x2d09a4);
    var _0x3e7eae = "\n Word: " + _0x2d09a4 + "\n Definition: " + _0x132b0d.list[0].definition.replace(/\[/g, '').replace(/\]/g, '') + "\n Example: " + _0x132b0d.list[0].example.replace(/\[/g, '').replace(/\]/g, '');
    return _0x283df3(_0x3e7eae);
  } catch {
    return _0x283df3("No result for " + _0x2d09a4);
  }
});
zokou({
  'nomCom': "lyrics",
  'reaction': '✨',
  'categorie': "Search"
}, async (_0x2c525a, _0x320466, _0x2b4e5d) => {
  const {
    repondre: _0x4f14e6,
    arg: _0x38e2b0,
    ms: _0x2552bf
  } = _0x2b4e5d;
  try {
    if (!_0x38e2b0 || _0x38e2b0.length === 0) {
      return _0x4f14e6("please provide me the song name");
    }
    const _0x7cc1aa = _0x38e2b0.join(" ");
    const _0x2ea02b = await Client.songs.search(_0x7cc1aa);
    const _0x18db38 = _0x2ea02b[0];
    console.log(_0x18db38);
    const _0xf7fa0f = await _0x18db38.lyrics();
    const _0x293b10 = await _0x18db38.artist.name;
    const _0x50fc19 = await _0x18db38.title;
    const _0x1020ca = "*BUGATTI LYRICS FINDER*\n\n*TITLE* - " + _0x50fc19 + "\n\n*ARTIST* - " + _0x293b10 + "\n\n" + _0xf7fa0f;
    await _0x320466.sendMessage(_0x2c525a, {
      'image': {
        'url': "./media/lyrics.jpg"
      },
      'caption': _0x1020ca
    }, {
      'quoted': _0x2552bf
    });
  } catch (_0x249c4f) {
    _0x4f14e6("Error occured" + _0x249c4f);
    console.log(_0x249c4f);
  }
});
