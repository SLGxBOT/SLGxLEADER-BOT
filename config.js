const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : '94742657120';
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://LEADERBOT:LEADERbot@cluster0.6peo9jz.mongodb.net/" ;
global.port= false // Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000  ; 
global.audio = '' ; 
global.video = '' ;
global.blockJids = process.env.BLOCK_JID ||'120363023983262391@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363022922797633@g.us' ;
global.email = 'samsamsun789@gmail.com' ;
global.location = 'Lahore Pakistan' ;
global.timezone  = process.env.TIME_ZONE || 'Asia/Negombo'
global.gurl = 'https://youtube.com/@SLGxLEADER' ; // add your username
global.sudo =  process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : '94742657120'; ;
global.devs = "94742657120"; //Dont change it From here
global.github  = process.env.YOUR_GITHUB || 'https://github.com/SLGxBOT/SLGxLEADER-BOT';
global.scan  = process.env.QR_URL || 'https://replit.com/@LEADERlionbot/LEADER-BOT-1?v=1';
global.website = 'https://github.com/SLGxBOT/SLGxLEADER-BOT' ; //wa.me/+94742657120
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.imgur.com/FfBybSI.jpg' ;
module.exports = {
  sessionName: process.env.SESSION_ID || "LEADER-BOT;;;ThawedLevel
",      //Put Your Session Id Here
  botname: process.env.BOT_NAME || 'SLG BOT',
  botbgm: process.env.BOT_BGM || 'false',
  ownername:  process.env.OWNER_NAME || `It'x POORNA`,
  author:  process.env.PACK_AUTHER || '',
  errorChat : process.env.ERROR_CHAT|| '', // put 'chat' here to send error in chat ,where it accures
  read_status : process.env.AUTO_READ_STATUS || 'false',
  save_status : process.env.AUTO_SAVE_STATUS || 'false',
  packname:  process.env.PACK_NAME || "\t   𓅋 𝕊𝕃𝔾 𝕩𝕋𝔼𝔸𝕄 𝟚𝟘𝟚𝟛 𓃮 \n\nᴋɪss ʍᴇ...💋\n\nᴄʟօsᴇ ყσυɾ ᴇყᴇs...👁️🙈\n\nʍɪss ʍᴇ...♥️\n\n\n   -ᴘʟᴇᴀsᴇ ᴅᴏɴ'ᴛ ᴛᴀӄᴇ 🚮 \n\n--- ρυвʟɪᴄ вσт нᴇʀᴇ ---" ,
  autoreaction: process.env.AUTO_REACTION || 'true',  //  | 'cmd' | 'true' | 'all' |
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokeyuntillYouPutAnWordHere',
  alwaysonline: process.env.WAPRESENCE || '', // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
  antifake : 'null', // process.env.FAKE_COUNTRY_CODE ||'212',
  readmessage: process.env.READ_MESSAGE || 'false',   //  | 'false' | 'true' | 
  readcmds : process.env.READ_COMMANDS || 'false',    //  | 'false' | 'true' | 
  HANDLERS: process.env.PREFIX || ',',
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "true",   
  MsgsInLog:process.env.MSGS_IN_LOG ||'false',
  pmMsgsInLog:process.env.PM_MSGS_IN_LOGS ||'false',
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',  //  | 'false' | 'true' | 
  antilink_values: process.env.ANTILINK_VALUES || 'https://,chat.whatsapp.com',
  //antilinkaction: process.env.BRANCH || 'remove',
  BRANCH: process.env.BRANCH || 'main',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  caption :process.env.CAPTION || "```ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝕊𝕃𝔾 𝕩𝕋𝔼𝔸𝕄 𝟚𝟘𝟚𝟛```"
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ||'' ,
  VERSION: process.env.VERSION || 'v.1.0.0',
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : 'PODII',
  menu : process.env.MENU || '', /**  Available @MENU @Schemes 1: : SLGxLEADER Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || 'public',
  KOYEB_API : process.env.KOYEB_API || ''
};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
