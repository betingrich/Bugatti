import "node-fetch";
import _0x1b4dfd from "axios";
import _0x247b7f from "yt-search";
import { youtubedl, youtubedlv2 } from "@bochilteam/scraper-sosmed";
import { bestFormat } from "../lib/y2dl.js";
import "fs";
const handler = async (_0x544af3, {
  conn: _0x6b339a,
  command: _0x27dd99,
  args: _0x5806bc,
  usedPrefix: _0x5e59f3
}) => {
  if (!_0x5806bc[0] && _0x544af3.quoted && _0x544af3.quoted.text) {
    _0x5806bc[0] = _0x544af3.quoted.text;
  }
  if (!_0x5806bc[0] && !_0x544af3.quoted) {
    throw mssg.example + "   *" + _0x5e59f3 + _0x27dd99 + "*  Bardo jholi meri Tahir Qadri Naat...";
  }
  try {
    _0x544af3.react("⏳");
    const _0x3cc30f = _0x5806bc[0];
    let _0x6541ab;
    if (_0x3cc30f.includes("youtube.com") || _0x3cc30f.includes("youtu.be")) {
      const _0x1e7ac4 = {
        "url": _0x3cc30f
      };
      _0x6541ab = [_0x1e7ac4];
    } else {
      _0x6541ab = await search(_0x3cc30f);
    }
    switch (_0x27dd99) {
      case "v360":
        await handleResolution(_0x544af3, _0x6b339a, _0x6541ab[0].url, "360p");
        break;
      case "v480":
        await handleResolution(_0x544af3, _0x6b339a, _0x6541ab[0].url, "480p");
        break;
      case "v720":
        await handleResolution(_0x544af3, _0x6b339a, _0x6541ab[0].url, "720p");
        break;
      case "v1080":
        await handleResolution(_0x544af3, _0x6b339a, _0x6541ab[0].url, "1080p");
        break;
      default:
        throw "Command " + _0x27dd99 + " is not supported.";
    }
  } catch (_0x2d12c3) {
    console.log(_0x2d12c3);
  }
};
const handleResolution = async (_0x1c4b6f, _0x13874b, _0x4b93e4, _0x2e7583) => {
  try {
    _0x1c4b6f.react("⏳");
    const _0xc23d3b = await youtubedl(_0x4b93e4)["catch"](async _0x445053 => await youtubedlv2(_0x4b93e4));
    const _0x1f3d62 = await _0xc23d3b.video[_0x2e7583].download();
    const _0x102830 = await _0xc23d3b.title;
    const _0xd228cb = await getBuffer(_0x1f3d62);
    const _0xa7f573 = _0xd228cb.byteLength;
    const _0xc510fa = _0xa7f573 / 1024;
    const _0x28bc1e = _0xc510fa / 1024;
    const _0x2d7824 = _0x28bc1e.toFixed(2);
    if (_0x2d7824 >= 400) {
      const _0x433120 = {
        "text": '' + _0x1f3d62
      };
      await _0x13874b.sendMessage(_0x1c4b6f.chat, _0x433120, {
        "quoted": _0x1c4b6f
      });
    } else {
      if (_0x2d7824 >= 100 && _0x2d7824 <= 400) {
        const _0x4f5a2d = {
          document: _0xd228cb,
          "mimetype": "video/mp4",
          "fileName": _0x102830 + ".mp4"
        };
        await _0x13874b.sendMessage(_0x1c4b6f.chat, _0x4f5a2d, {
          "quoted": _0x1c4b6f
        });
      } else {
        _0x1c4b6f.react("✅");
        const _0x30930e = {
          video: _0xd228cb,
          "mimetype": "video/mp4",
          "fileName": _0x102830 + ".mp4",
          caption: '' + vidcap
        };
        await _0x13874b.sendMessage(_0x1c4b6f.chat, _0x30930e, {
          "quoted": _0x1c4b6f
        });
      }
    }
  } catch {
    const _0x4af234 = await bestFormat(_0x4b93e4, "video");
    const _0xa98534 = await getBuffer(_0x4af234.url);
    const _0x381cdf = '' + (yt_play[0].title ? yt_play[0].title : "Tu_video_descargado");
    const _0x683867 = {
      "video": _0xa98534,
      "fileName": _0x381cdf + ".mp4",
      "mimetype": "video/mp4",
      caption: '' + vidcap
    };
    await _0x13874b.sendMessage(_0x1c4b6f.chat, _0x683867, {
      "quoted": _0x1c4b6f
    });
  }
};
handler.help = ["video"].map(_0x8fc57c => _0x8fc57c + " < query >");
handler.tags = ["downloader"];
handler.command = ["v360", "v480", "v720", "v1080"];
export default handler;
async function search(_0x2515ad, _0x30c3da = {}) {
  const _0x18be83 = {
    "query": _0x2515ad,
    "hl": "es",
    "gl": "ES",
    ..._0x30c3da
  };
  const _0x3bb1ac = await _0x247b7f.search(_0x18be83);
  return _0x3bb1ac.videos;
}
const getBuffer = async (_0x4f1da4, _0x3cf0da) => {
  if (_0x3cf0da) {
    _0x3cf0da;
  } else {
    ({});
  }
  const _0x4713c4 = {
    "DNT": 0x1,
    "Upgrade-Insecure-Request": 0x1
  };
  const _0x393bef = await _0x1b4dfd({
    "method": "get",
    "url": _0x4f1da4,
    "headers": _0x4713c4,
    ..._0x3cf0da,
    "responseType": "arraybuffer"
  });
  return _0x393bef.data;
};
