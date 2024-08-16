const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS05KTldHZ2xaWWZRTzlmd1JMcXZDQ3J3Snl5Q0ZLeGtBd0pGZXdnaldFdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWThjZ3pzcUh5N1JnRWgveFlMOVkrdkdyNnQ3aGRIZ3FkOC9WTm1YYnBqOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPUGhjQVpDTG44WE10SXB1MnFxd0dIMjdoNFAxTXZDTVc2L0FPeUk5b0VNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5ZEZXZVl2MnlrMjVJSy9MOWx3b0xZcGphTGVrTHRvZGIya1NpM3llN2hNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZMVEtya0dubkEzTitFZ0FubGNwSFcyMzJhRlJaRmsxVzNYZXJkOS9LbEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJVbUd0UUpOZDYrd1hxeTFWSC9RazkwaGh3eVNmenVZZkpnZ3AwbEVpQXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU1sWS9pbUdQNUNkVy9qNHU3YVNVQ3J1VGlsQTQ0QXFoc3NnUGhUbEMyVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSENiQWVDR0p5Wmk2eDFCVWw0MEw2MnRQVkxyN1VJQmJuSTAwRFJ0bDJCdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxDZmd0MnpxRW1oZUQ3b1JkS1h5TWd2cmhaeUROY1U1SHJaOGxId3RYVDJ0RXFucVNFVHdRdm14TnVTR0V1bXZCSmVhSjRhcklvdWhHQm1xR2dPWUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY3LCJhZHZTZWNyZXRLZXkiOiJkYVlCdVJtd2V0OUxKZ1ZseTJwalJSU2ViSSt6QmlrOTliWi9kd1plWlpZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJXTHpBU256YlRnU2hiRnVZR3R5cm5BIiwicGhvbmVJZCI6IjFhOTI3MmE1LWQxM2EtNDM0ZC05MGQ1LWQyNjcxYWUzY2Y3ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyNnFnbmJKN01KemV3bWZNa3d2U2YydVpIRUE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN2NnS0t1RWppMkpwbktjNnJhSWZIQVJkcm44PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkRQVEtQNkFKIiwibWUiOnsiaWQiOiIyNTQ3NDM5ODIyMDY6NzZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoifmBgYEJFUkEgVEVDSGBgYH4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01qeDlOb0dFSzJpL2JVR0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImRPcVVvc3MwUjZWeUpFOWtNSWM2ZzBrV3duUkhGaHp3RUR3akZMZU9weEE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlYyNmxmQk1IU0VCc2ZxU1pKbkF5akVEb1RrMS9zUE1sMVVJbGtyQW5PY3hJd2cwcmFqaWowekU1WklxVzRyMW9XdWRtdlpEQUFBenYxVUFtVitmZkRRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJmSHhnZnl0RHN0YXFKa0psSFJZNUZsYTlkUHZHN2VDL1J3OEQ0U3gyWk1Ldi9OWngvNGNwQ241RHlSeUtzc05HUHlJR0NDSVUxYlRVbTlWdjVsd1FCQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc0Mzk4MjIwNjo3NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYVHFsS0xMTkVlbGNpUlBaRENIT29OSkZzSjBSeFljOEJBOEl4UzNqcWNRIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzODE0MjA0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUxjbiJ9',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "BRUCE BERA",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "254743982206",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    BOT : process.env.BOT_NAME || '𝑩𝑼𝑮𝑨𝑻𝑻𝑰',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/c425b0fd9ec4ab130c8f9.jpg.https://telegra.ph/file/0d3b89f01e8fccb260b45.jpg.https://telegra.ph/file/abc304e66c2a3e8b2a557.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
                  
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
