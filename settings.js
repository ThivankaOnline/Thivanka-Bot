

const fs = require('fs')
const chalk = require('chalk')



//π if you need seen massage use " true "
global.READ_MASSAGE = 'false'
//π enable desable Girls Voice Reply
global.VOICE_REPLY =  'true'
// You Bots Owner Number 
global.owner = ['94768211424'] 
//π Your Bot Alive Logo ( alive image )
global.alivelogo = `https://telegra.ph/file/30ec9e93fa99d8d79bf53.jpg`
//π Your Caption ( Image Video )
global.cap = 'Β© Thivanka Nirmal'
//π Do you want show time on your bio use "on" want desable use "off"
global.AUTO_BIO = process.env.AUTO_BIO || 'off'
//π Inbox massage block PM block
global.INBOX_BLOCK = process.env.INBOX_BLOCK || 'on'
//π Auto react 
global.AUTO_REACT = process.env.AUTO_REACT || 'false'
//π Bad word Auto delete ( you must add bad words )
global.ANTI_BADWORD = process.env.ANTI_BADWORD || 'true'
//π Your Bot Name
global.botnma = process.env.BOT_NAME || 'Thivanka' 
//π Your name
global.ownernma = process.env.OWNER_NAME || 'Mr Thiva' 
//π Sticker package name
global.packname = process.env.STICKER_PACK_NAME || 'Thivanka' 
//π Sticker Author Name
global.author = process.env.STICKER_AUTHOR_NAME || 'Mr Thiva' 
//π Kick And Auto Delete Group link Senders
global.antilink = process.env.ANTI_LINK || 'true'
//π You Welcome Massage 
global.WELCOME_MSG = ''
//π You Good Bye Massage 
global.GOODBYE_MSG = ''
//π Inbox Block Massage 
global.INBOX_BLOCK_MSG = 'This Is Personal Account - BLOCK !!!'
//π Send welcome and goodbye massage 
global.SEND_WELCOME = 'true'
//π Owner React Imoji
global.OWNER_REACT =  'π»'
global.BAD_KICK_MSG = '*Bad word detect !*'
//π URL.button 1 name
global.BUTTON1 = 'ππΆππ΅ππ―'
//π URL button 2 name
global.BUTTON2 = 'πͺπ²π―ππΆππ²'
//π Button 1 url 
global.BUTTON1_URL = 'https://github.com/thivankaonline/'
//π Button 2 url
global.BUTTON2_URL = 'https://www.thivanka.lk'
//π Your Add Massage 
global.ADD_MSG = '*β Success add Group*' 
//π Your Kick Massage 
global.KICK_MSG = '*β Success Remove from Group*' 
//π Song Download Massage 
global.SONG_DOWN = '```β¬οΈ Downloading Your Song...```' 
//π Song Uplode massage 
global.SONG_UP = '```β¬οΈ Uploding Your Song...```'
//π 212 Number block
global.NUMBER_212_BLOCK = 'true'
//π Menu imoji 
global.MENU_IMOJI = 'πΈ|βΉοΈ'
//π Your time zone ( use correct time zone )
global.TIME_ZONE = process.env.TIME_ZONE || 'Asia/Colombo'
//π Removebg Api key
global.REMOVE_BG_API = ''
//π Pron Video Download 
global.SEX_VIDEO_DOWNLOAD = process.env.SEX_VIDEO_DOWNLOAD || 'false'
//π Change Bot Language 
global.LANG = 'SI'







//MORE
global.zenzapi = '01ABEB1E11'
global.tiktokthub = 'https://telegra.ph/file/30ec9e93fa99d8d79bf53.jpg'
//other
global.pemilik = ['94768211424'] //Change  it , ΰΆΰΆΆΰΆ§ ΰΆΰ·ΰΆΈΰΆ­ΰ· ΰΆ±ΰΆΈΰ· ΰ·ΰ·ΰΆ±ΰ·ΰ· ΰΆΰΆ»ΰΆ±ΰ·ΰΆ±
global.premium = ['94768211424'] //Change it ΰΆΰΆΆΰΆ§ ΰΆΰ·ΰΆΈΰΆ­ΰ·ΰΆ±ΰΆΈΰ· ΰ·ΰ·ΰΆ±ΰ·ΰ· ΰΆΰΆ»ΰΆ±ΰ·ΰΆ± 
global.pengguna = 'Thivanka' // Your name ΰΆΰΆΆΰ· ΰΆ±ΰΆΈ 
global.sessionName = 'session'
global.prefix = ['#','!','/',''] 
global.sp = 'π΅'


global.mess = {
    success: 'β Done!',
    admin: 'you must be admin to use this cmd!',
    botAdmin: 'Bot must be admin !',
    owner: 'This cmd is for Thiva bot owner only',
    group: 'oooh sorry this cmd is for groups only!',
    private: 'it can only used in dms!',
    bot: 'This cmd  its only for the bot host',
    wait: 'Wait Thiva is processing ',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
    global.rpg = {
        darahawal: 100,
        besiawal: 15,
        goldawal: 10,
        emeraldawal: 5,
        umpanawal: 5,
        potionawal: 1
     }    




//global api
global.fbapi = 'dd79-1aeb-21a3'
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

global.thumb = fs.readFileSync('./Media/image/Thiva.jpg')
global.imgalive = fs.readFileSync('./Media/image/Thiva.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
