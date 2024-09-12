const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/𝐀𝐘𝐀𝐍-𝐗𝐃";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.co/TgwRyHR/Ephoto360-com-16e03cd7.jpg" || "https://i.io/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923xxx Your Number";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "9234444060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_50_09_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTcwLFxuICAgICAgICA5MixcbiAgICAgICAgMjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNixcbiAgICAgICAgMjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgODgsXG4gICAgICAgIDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTYyLFxuICAgICAgICA1MixcbiAgICAgICAgMjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDczLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTczLFxuICAgICAgICA5NyxcbiAgICAgICAgMTgzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTMwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDc3LFxuICAgICAgICAxODAsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjU0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODcsXG4gICAgICAgIDksXG4gICAgICAgIDYwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI3LFxuICAgICAgICAyNCxcbiAgICAgICAgNSxcbiAgICAgICAgODYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTkzLFxuICAgICAgICA0MixcbiAgICAgICAgMjE5LFxuICAgICAgICA0MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDMsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgODIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDkyLFxuICAgICAgICA2MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTksXG4gICAgICAgIDIxNixcbiAgICAgICAgNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDgxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMSxcbiAgICAgICAgNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjA5LFxuICAgICAgICA1NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTU1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDM5LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJsSXJiT0NJMU1PUCt3eW1OcDNINlJrcitoQk5OOHI2MWlLaUN5dEpyaDZVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjE1NzkzMDAwOTg5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGRTIyRjk1RURERkM2NTMyNkI4Mzk5NUNFMERFNjdGOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjYxNTYyMTZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIxNTc5MzAwMDk4OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTEwNzk3RDMyRUJFQjEyREM5RTU2OEMzQTc0NTMwNDVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI2MTU2MjE2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMTU3OTMwMDA5ODlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQxNzY0QzVGODZCM0FBRUZGMUMxN0ExQzU0RjUzMTA3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNjE1NjIxOFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjE1NzkzMDAwOTg5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyRUIzOUFBMTJENzA0OUIxMTFCOUY2RUYwMzQwQTcxM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjYxNTYyMThcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicGZmX3cyWklSei1JMlRPVDk1Qndzd1wiLFxuICBcInBob25lSWRcIjogXCI4NWNmMGZiNC1mYjcwLTQ1MTYtOGEwZC05NTNiYTllZGM1NWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk5LFxuICAgICAgMTQyLFxuICAgICAgMTA0LFxuICAgICAgMTM4LFxuICAgICAgMyxcbiAgICAgIDEwNCxcbiAgICAgIDcsXG4gICAgICAyOSxcbiAgICAgIDg2LFxuICAgICAgMTEsXG4gICAgICAxMDIsXG4gICAgICAxMDEsXG4gICAgICA2MCxcbiAgICAgIDEyNixcbiAgICAgIDE3MSxcbiAgICAgIDIxMSxcbiAgICAgIDE3NSxcbiAgICAgIDEyMCxcbiAgICAgIDg4LFxuICAgICAgMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjgsXG4gICAgICAxOCxcbiAgICAgIDk0LFxuICAgICAgMTA2LFxuICAgICAgMjAsXG4gICAgICAzNSxcbiAgICAgIDE2OSxcbiAgICAgIDI1NSxcbiAgICAgIDIyNixcbiAgICAgIDExMSxcbiAgICAgIDIyOSxcbiAgICAgIDYsXG4gICAgICAxMDUsXG4gICAgICAxMjgsXG4gICAgICAxMTQsXG4gICAgICAxMzIsXG4gICAgICA3OCxcbiAgICAgIDI1MCxcbiAgICAgIDE3NSxcbiAgICAgIDEwN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTUzdEU05UWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMTU3OTMwMDA5ODk6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuGthPCdmYjwnZmN4a+T4bSu4bS8y6JzXCIsXG4gICAgXCJsaWRcIjogXCIxNTg1NTM1ODMxNjk2NzM6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPbk43OW9GRUxHYmpMY0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjlRaE55dllIbnJLVFAreXhOdUtMaVoyZ0c0aWNiNk9Vc0F6Z3R1SHpaMEk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiL3FLNHV6MjdxZkhuMmUrUmhwUEZVcmZIWFozQkdPUWg5amJucWJqVTl2TklzblhNOWovNEYvTGF6U0xsNlk4WmpWS3dRcEtraTByNGxDZWFVZUhSRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiN0JlZ0N2Wk5HbVNnTTA0djdlNmM0ZVJ5aS9Cb3pRaUJNZWozTmlqbzhEV213c0dOaVF2OURkUWRwN1gxU21kLzJlSnRiOTV3MnArWWhoTWZWUEJyRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMTU3OTMwMDA5ODk6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI2MTU2MjE0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRERLXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEREsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJick14b1ZmRzNDcEF3bktTekR4MmVsMExEUDMwSWc5S0tpWmZ0dVl6N2pJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MzI3NDk1NDUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyNjE1NjIxNDg2MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: 𝐀𝐘𝐀𝐍-𝐗𝐃 Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1 by AYYAN XD",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙖𝙮𝙮𝙖𝙣 𝙓𝙙 ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "𝐀𝐘𝐀𝐍-𝐗𝐃",
  packname: process.env.PACK_NAME || "𝐀𝐘𝐀𝐍-𝐗𝐃",
  botname : process.env.BOT_NAME  || "𝐀𝐘𝐀𝐍-𝐗𝐃",
  ownername:process.env.OWNER_NAME|| "𝐀𝐘𝐀𝐍-𝐗𝐃",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "𝐀𝐘𝐘𝐀𝐍𝐎"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
