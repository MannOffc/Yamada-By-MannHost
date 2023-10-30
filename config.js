const fs = require('fs')
const chalk = require('chalk')

global.ownername = 'MannHost'
global.botname = 'Yamada - MD'
global.namabot = 'Yamada - MD'//setting bot name
global.owner = ["62896296205744"]//setting owner
global.prefix =   "/^[°•π÷×¶∆£¢€¥®™+✓_=|/~!?@#%^&.©^]/i"
global.pairingNum = "62896296205744"//contoh: 62xxxx
global.versisc = "1.0.0"
global.tiktok = "tiktok.com/@hyugimura"
global.gopay = "6289509419214"
global.dana = "nobody"
global.pulsa = "6289509419214"
global.thumbnail = "https://telegra.ph/file/8305331c272fa4de38a7f.jpg"

global.lol = 'haikalgans'
global.xzn = 'haikalgans'
global.APls = {
	alfa: 'https://api.zahwazein.xyz'
}
global.APIkeys = {
	'https://api.zahwazein.xyz': 'zenkey_ae110e5bf705',
}

global.lol = 'haikalgans' // : https://api.lolhuman.xyz 
global.keyopenai = "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" // : https://platform.openai.com
global.apikey = "zenzkey_ae110e5bf705" // : https://api.zahwazein.xyz

global.themeemoji = '✨'
global.wm = "Yamada"
global.packname = "Created By"
global.author = "MannHost"

global.mess = {
done: 'Done✅',
success: 'Done✅',
admin: 'Fitur Ini Khusus Admin Grup Kak!',
botAdmin: 'Jadikan Bot Admin Terlebih Dahulu Kak!',
owner: 'Fitur Ini Khusus Owner Bot Kak!',
group: 'Cuma Bisa Di Gunakan, Di Dalam Grup Kak!',
endLimit: 'Kehabisam Limit Kak!',
prem: 'Fitur Khusus User Prem Kak!',
wait: 'Mohon Tunggu Kak!',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.yellow(`'${__filename}' telah di update`))
    delete require.cache[file]
    require(file)
})
