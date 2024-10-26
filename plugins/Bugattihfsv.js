import _0x62fb05 from "yt-search";
import { youtubedl, youtubedlv2 } from "@bochilteam/scraper-sosmed";
let handler = async (_0xca88e1, {
  conn: _0x5209bb,
  command: _0x381b1a,
  text: _0x2da32e,
  usedPrefix: _0x349963
}) => {
  if (!_0x2da32e) {
    throw "Example: \n" + (_0x349963 + _0x381b1a) + " Aya hai bulawa naat";
  }
  let _0x2acc5e = await _0x62fb05(_0x2da32e);
  let _0x313951 = _0x2acc5e.videos[0];
  if (!_0x313951) {
    throw "Couldn’t find, try another name";
  }
  const _0x4e9f31 = "https://www.youtube.com/watch?v=" + _0x313951.videoId;
  _0xca88e1.react("⏰");
  try {
    const _0x398d53 = await youtubedl(_0x4e9f31);
    const _0x5ec336 = await _0x398d53.audio["128kbps"].download();
    const _0x6ef352 = {
      url: _0x5ec336
    };
    const _0xf12c22 = {
      audio: _0x6ef352,
      mimetype: "audio/mp4",
      fileName: _0x313951.title + ".mp4"
    };
    _0xca88e1.react("🔒");
    return _0x5209bb.sendMessage(_0xca88e1.chat, _0xf12c22, {
      "quoted": _0xca88e1
    });
  } catch (_0x9e35d7) {
    try {
      const _0x285f10 = await youtubedlv2(_0x4e9f31);
      const _0x3a1270 = await _0x285f10.audio["128kbps"].download();
      const _0x4b34f9 = {
        url: _0x3a1270
      };
      const _0xa17c48 = {
        audio: _0x4b34f9,
        mimetype: "audio/mp4",
        fileName: _0x313951.title + ".mp4"
      };
      _0xca88e1.react("🎻");
      return _0x5209bb.sendMessage(_0xca88e1.chat, _0xa17c48, {
        "quoted": _0xca88e1
      });
    } catch (_0x1f1771) {
      throw "Error downloading audio. Please try again later.";
    }
  }
};
handler.help = ["song"];
handler.tags = ["downloader"];
handler.command = /^song$/i;
export default handler;
function pickRandom(_0x44960a) {
  return _0x44960a[Math.floor(_0x44960a.length * Math.random())];
  }
