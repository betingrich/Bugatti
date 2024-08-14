const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUZUMjRNbEpTQzM2ZkZCNTZvWWRGbW5ldVhVUnUrSHFVckdLL1JPZHAxdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMDZrK1dNRU5RdlppNGFHbnJjU05sR1dDTFhZT2V5OENJek1RdUN4b3hYST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtQU0xTnc2aEx4Z0FiZ0l3Z0pGYnJwN3JCOTk1OWRvTnNhdnJzMjZQajAwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvOXg1OEt0L0ZmbWF6NERLM1NxK242b25YVDlscy90ZUNRRDZnb3NzNWdRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBGQTNsTHN4T2phbnIwM2lmKyt6L2NkcGgrem9hRVhrc3NDbnNiQzdjbGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhyMDgwTlhtQlRNbENaQ1NVNnRIYW5QWmFzSWg4NUxVK1pNMzd1TUsrWFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU9ZSVlWVitwNXFlaWVoZHNxMWFHZ2hWR2FOaVdSdERidDlTcUxVRjNWaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVllNndlZG0vNzlsZ3U5RXB5WFBBMVluWElnV01Xd3pnNTdZeHN3M21qUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlKKzQ1R0QzMWNrM0swMkxxbkQzZjBKZWxqQU5OVjd4UHAvNm9Rc28wdEhJZ2hOUjgxQi82NFp4VTRxMlBkN1llY215Z2pzaU1NVHNUNDdtbEJFNUJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc2LCJhZHZTZWNyZXRLZXkiOiJMd3ExUWkyODBzMVVTZStDcGV3WU9xYXgzRDIyV3MwYWQ1c3ZEQ3RzQ2E0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJUbnVnclRIdVNIU0JWeXZyNUtVLXdBIiwicGhvbmVJZCI6IjA3ZTcyMWFmLTc1NmMtNDcxOS05OTQ1LWQ0NGRhYmE3ZTBkZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTdDZWVkZGaGxyYUwvcXBqU0VYeGl3YVpVdDA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTEx6TUNUbERLYVNETUtsSXVSOUorZUlqS0ZvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlpDTkZMN1RTIiwibWUiOnsiaWQiOiIxODczMzAwMjcyMToxOEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJDcmlzdGFsRSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnJnOS9FTkVJZko4YlVHR0FjZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiclhMZDRLVmRBQjNVYUhuRmxwMWJFRUJJSlJGc2hzWmdIYm5JQXA4YUVEUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoia0M3bnA3L0xuWnpLK2plTm5LL2hHM0YyMUpBS0FzUWNXRm41UVdJaWxsL3ZPVXRDUFJnZ1FQUDZVRXArbEFvWXJSUmdaYXZQWWNKNkw1aEQyakhnQXc9PSIsImRldmljZVNpZ25hdHVyZSI6InlZdGgydHpUM0g4K25zeWVsREI0dHBDMm9lSHRsUStNYlJnM2xzVG4zSHFiWlprWUZ2Z0xKRHNlL2JLK2szQUZpcmlER0hnbERaN2xGNVhsNjZUTEJ3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTg3MzMwMDI3MjE6MThAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYTF5M2VDbFhRQWQxR2g1eFphZFd4QkFTQ1VSYkliR1lCMjV5QUtmR2hBMCJ9fV0sInBsYXRmb3JtIjoic21iaSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzYyMjU0OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIT1MifQ==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "King Marisel",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "254740007567",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "non",
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
