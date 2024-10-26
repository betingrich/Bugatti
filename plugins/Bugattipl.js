import _0x76d472 from "yt-search";
let handler = async (_0x1ab3f5, {
  conn: _0x2c4709,
  command: _0x3cbd5f,
  text: _0x4ea001,
  usedPrefix: _0x4b3936
}) => {
  if (!_0x4ea001) {
    throw "🎻 " + mssg.example + " *" + (_0x4b3936 + _0x3cbd5f) + "* 𝙰𝚢𝚊𝚊 𝚑𝚊𝚒 𝚋𝚞𝚕𝚊𝚠𝚊 𝙽𝚊𝚊𝚝...";
  }
  let _0x3223aa = await _0x76d472(_0x4ea001);
  let _0x508bf3 = _0x3223aa.videos[0];
  if (!_0x508bf3) {
    throw "🤫Video/Audio not found";
  }
  let {
    title: _0x8281c9,
    description: _0x439249,
    thumbnail: _0x491f31,
    videoId: _0x10c17a,
    timestamp: _0x5cd0e7,
    views: _0x4847fb,
    ago: _0x2782d5,
    url: _0x25de76
  } = _0x508bf3;
  _0x1ab3f5.react("🎧");
  _0x1ab3f5.react(wait);
  let _0x358edd = "\n╭━━━⊱ *BUGATTI PLAYER* ⊱━━━╮\n┃ *" + mssg.title + ":* " + _0x508bf3.title + "\n┃ *" + mssg.aploud + ":* " + _0x508bf3.ago + "\n┃ *" + mssg.duration + ":* " + _0x508bf3.timestamp + "\n┃ *" + mssg.views + ":* " + _0x508bf3.views.toLocaleString() + "\n╰━━━━━━━━━━━━━━━━━╯";
  await _0x2c4709.sendButton2(_0x1ab3f5.chat, _0x358edd, "*Bugatti*", _0x491f31, [["🎵 ᴀᴜᴅɪᴏ 🎧",  + "song " + _0x4ea001], ["📹 ᴠɪᴅᴇᴏ 📽️", _0x4b3936 + "video " + _0x4ea001], ["🎼 ᴍᴘ3 🎶", + "yta " + _0x25de76], ["📼 ᴍᴘ4 🎬", + "ytv " + _0x25de76], ["💾 ᴀᴜᴅɪᴏᴅᴏᴄ 💿", + "ytadoc " + _0x25de76], ["💾 ᴠɪᴅᴇᴏᴅᴏᴄ 🎥", + "ytdl " + _0x25de76]], null, , _0x1ab3f5);
};
handler.help = ["play"];
handler.tags = ["dl"];
handler.command = ["play"];
handler.disabled = false;
export default handler;
