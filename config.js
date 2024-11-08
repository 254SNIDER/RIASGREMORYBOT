//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Nairobi, Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "2348086541281";
global.sudo = process.env.SUDO || "254740818798";
global.owner = process.env.OWNER_NUMBER || "254740818798";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/84a935261759d92084744.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT09ma0hpeW4yN3NhK2Q2c04weDlBYjIweFdtbDFyNzRHT2pCbmhYeXAzWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidndVQSszbjNKalFCdit1a3ZPSHJTM0gxYXJQZGphcDVwRGpIN2hlb1ZBVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNQWRDbHJja3ZqS0UwTVRmTWlYaFdJSTM5WlRxR0JuNkxmTFNia01nUG00PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnWmdtS3EzSGVFNGpqOUlwQWRQMWtXY1NlVS9BeTJkaDNtUEJ4WlBpT2lZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFQdGo4YkFRY0VZeFZ1d0prRlhKY1RPajd1ejIwazczL1JQLzRzcFpRblU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkMvM2g3TTlsUGgvNXE1OW1TS0VZZUYyckY5a2Zjb1M5VmhpQlJKVWh5a1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU9NSS8rK0RTd3NZOEdTK0hxTlFROVdHUGdpNWJvS21RajA4bUhreVVuUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoickU5VTQrVFo4V2RnLytFcUR1STJQWkVKNHFTMExyd3ZjSlduU0U2blprdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imd6U3R5MTRVcU5qMTV3WUh5MVRvZmowaDhWUzcwWjU4dmdwSGVKcEYrUnVwY2FieWVJVC9LcnFaSW50S2hlZk55dHR5dHNmREgwTjNRSjhWQk15b2p3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY3LCJhZHZTZWNyZXRLZXkiOiJWeG1aekY0U2lUN2RhbmxlTVdtNTJwcmJOR25MdE1wSzFPMDB1bHM4MCtzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJvUXh6WE43ZlNHZU9YcmtMWDdraHdnIiwicGhvbmVJZCI6ImQyZmM5YmZiLTdhNzAtNGQ5NS1hZmY3LTEyMTdkNjNiOGQxMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoSmVUcDN3c2VkdGhqMUhDcGJLMmVzemkxajA9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdMOXZ4SnFOR0l3T3Rzb2d6OHBOeFZ5WHVEOD0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xmOG5iMEhFTFBMdDdrR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImdzNlVMUUM3TWV5RlhIYkU4K1ExcnJNK25VOEZScDBNM2MyeEFLQ21ZMjg9IiwiYWNjb3VudFNpZ25hdHVyZSI6InBxOHY4amVOSVpYdG9BVmdXOHBZTEpXRGs5dk15ZmNCM0FrVkFSUWNjZ1A4NlhTSVY3RlRqR3FGTHl3cHUyRjFnNTg5ZHNLMnoxcFlpUUIvK0NLR0FRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJvbmoxc29xZHlhV2RUMkhMaURMK2YrSVpqK1ZJZ1ZZeTl5QXhFU0p2TGlYb0UzNGxLV2JLQWNmVmRxNDhXNE03dW9KcTd2bk5YVjJDMzFjdm1ZcUhpUT09In0sIm1lIjp7ImlkIjoiMjU0NzQwODE4Nzk4OjRAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxMDY0NTU2ODAxODQ0NjA6NEBsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzQwODE4Nzk4OjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWUxPbEMwQXV6SHNoVngyeFBQa05hNnpQcDFQQlVhZEROM05zUUNncG1OdiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMxMDYxMTg2LCJsYXN0UHJvcEhhc2giOiIxcnZ5UDMiLCJteUFwcFN0YXRlS2V5SWQiOiJBQU1BQUNjLyJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 DARKACE254",
  author: process.env.PACK_AUTHER || "Darkace254",
  packname: process.env.PACK_NAME || "Darkace254",
  botname: process.env.BOT_NAME || "TOXICAL☠☠☠",
  ownername: process.env.OWNER_NAME || "Waweru254",
  errorChat: process.env.ERROR_CHAT || "Hello motherfucker😂😂💀",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "TOXICAL☠☠☠",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
