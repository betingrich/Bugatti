import 'api-dylux';
let handler = async (_0x53cdc1, {
  conn: _0x438d07,
  text: _0x26f3a5,
  args: _0x4e41a0,
  usedPrefix: _0x21a5e0,
  command: _0x236120
}) => {
  if (!_0x4e41a0[0x0]) {
    throw "✳️ " + mssg.noLink("Facebook") + "\n\n📌 " + mssg.example + " :\n*" + (_0x21a5e0 + _0x236120) + "* past your fb link here";
  }
  _0x53cdc1.react(rwait);
  try {
    let _0x18e2ac = await fetch(global.API("fgmods", "/api/downloader/fbdl", {
      'url': _0x4e41a0[0x0]
    }, "apikey"));
    let _0x3358dc = await _0x18e2ac.json();
    _0x438d07.sendFile(_0x53cdc1.chat, _0x3358dc.result.HD, "fb.mp4", '' + vidcap, _0x53cdc1);
    _0x53cdc1.react(done);
  } catch (_0x297e46) {
    _0x53cdc1.reply(mssg.error);
  }
};
handler.help = ["facebook"].map(_0x2de97c => _0x2de97c + " <url>");
handler.tags = ['dl'];
handler.command = /^((facebook2|fb2)(downloder|dl)?)$/i;
handler.diamond = false;
export default handler;
