import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
  try {
    let res = await fetch('https://fantox001-scrappy-api.vercel.app/technews/random');
    if (!res.ok) throw await res.text();
    let json = await res.json();
    if (!json.news) throw json;

    let techNews = `•───── ─────•
    ❖ Status: Active
    ㋡ Creator: Marisel
    ☞ News: ${json.news}
      •─────  ─────•
    `;
    
    conn.sendFile(m.chat, json.thumbnail, 'thumbnail.jpg', techNews, m);

   
    m.react(done);
  } catch (e) {
    
    m.react(error);
  } 
}
handler.help = ['technews'];
handler.tags = ['news'];
handler.command = ['technews'];

export default handler;
