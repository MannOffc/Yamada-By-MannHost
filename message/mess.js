// akumah masih pemula
// setting in config.js
/*
• Team Tabrak Lurus
• MannHost-WhyDepin-Darwin-KiiCode
*/
require('../config')
const {
	downloadContentFromMessage,
	generateWAMessage,
	generateWAMessageFromContent,
	generateProfilePicture
} = require("@whiskeysockets/baileys")
const baileys = require("@whiskeysockets/baileys")
const fs = require("fs")
const chalk = require("chalk")
const axios = require("axios")
const path = require("path")
const { exec } = require("child_process")
const util = require("util")
var config = require("../config.js")
const func = require("../lib/function.js")

//singkat
let evalOwn = ['62896296205744@s.whatsapp.net', '62896296205744@s.whatsapp.net']
var icon = fs.readFileSync("./src/dep.jpg")

module.exports = async(MannHost, m, store) => {
try {
    if (!m) return
   if (m.isBaileys) return
 
const content = JSON.stringify(m.message)
const from = m.key.remoteJid
const chats = (m.type === 'conversation' && m.message.conversation) ? m.message.conversation : (m.type == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.type == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.type == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : '' 
if (MannHost.multi) {
var prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(chats) ? chats.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
} else {
if (MannHost.nopref) {
prefix = ''
} else {
prefix = MannHost.prefa 
}
}
const args = chats.split(' ')
const command = chats.toLowerCase().split(' ')[0] || ''
const isCmd = command.startsWith(prefix)
const quoted = m.isQuoted ? m.quoted : m
const q = chats.slice(command.length + 1, chats.length)
const botNumber = MannHost.user.id.split(':')[0] + '@s.whatsapp.net'
const isGroup = m.key.remoteJid.endsWith('@g.us')
const sender = isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const isOwner = global.owner == sender ? true : [`${global.owner}@s.whatsapp.net`].includes(sender) ? true : false
const groupMetadata = isGroup ? await MannHost.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.id : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const ppgc = await MannHost.profilePictureUrl(from, 'image')
const ppuser = await MannHost.profilePictureUrl(sender, 'image')
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender)
        
//baris function
const reply = (teks) => {
			MannHost.sendMessage(from, { text: teks }, { quoted: m })
	}
const sendContact = (jid, numbers, name, quoted, mn) => {
let number = numbers.replace(/[^0-9]/g, '')
const vcard = 'BEGIN:VCARD\n' 
			+ 'VERSION:3.0\n' 
			+ 'FN:' + name + '\n'
			+ 'ORG:;\n'
			+ 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
			+ 'END:VCARD'
			return MannHost.sendMessage(from, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions : mn ? mn : []},{ quoted: m })
		}
const sendMess = (hehe, teks) => {
	MannHost.sendMessage(hehe, { text: teks })
}

const sendText = (from, teks) => {
	MannHost.sendMessage(from, { text: teks })
}

if (chats.startsWith("=> ") && isOwner && evalOwn) {
		console.log(chalk.green('[EVAL]'), chalk.white(`Dari Owner aowkoakwoak`))
		  const ev = (sul) => {
            var sat = JSON.stringify(sul, null, 2)
            var bang = util.format(sat)
            if (sat == undefined) {
              bang = util.format(sul)
            }
            return reply(bang)
          }
          try {
           reply(util.format(eval(`;(async () => { ${chats.slice(2)} })()`)))
          } catch (e) {
           reply(util.format(e))
          }
		} else if (chats.startsWith("$ ") && isOwner) {
        console.log(chalk.green('[EXEC]'), chalk.white(`Dari Owner aowkoakwoak`))
          exec(chats.slice(2), (err, stdout) => {
		    if (err) return reply(`${err}`)
		    if (stdout) reply(`${stdout}`)
		  })
        } else if (chats.startsWith("> ") && isOwner && evalOwn) {
	    console.log(chalk.green('[EVAL]'), chalk.white(`Dari Owner aowkaokwoak`))
		 try {
	       let evaled = await eval(chats.slice(2))
		   if (typeof evaled !== 'string') evaled = require("util").inspect(evaled)
			reply(`${evaled}`)
		 } catch (err) {
		   reply(`${err}`)
		 }
		}

// log chat masuk
if (m.message && !m.isBaileys) {
console.log(chalk.white(chalk.bgBlue("DARI :")), chalk.white(m.pushName), chalk.black(chalk.yellow(sender)) + "\n" + chalk.white(chalk.bgBlue("DI :")), chalk.black(chalk.bgWhite(isGroup ? groupMetadata.subject : "Private Chat", m.from)) + "\n" + chalk.white(chalk.bgBlue("PESAN :")), chalk.black(chalk.bgWhite(m.body || m.type)))
        }
            
switch (command) {

case prefix+"menu": case prefix+"help": {
                let text = `
_*>Hello User<*_
_Bot ini masih dalam perkembangan, wajar jika fitur sedikit_

┌─────────────────────
│ _*Name:*_ _${m.pushName}_
│ _*Number:*_ _${sender.split('@')[0]}_
├─────────────────────
│ _*Bot Name:*_ _${global.botname}_
│ _*Created By:*_ _Team Tabrak Lurus_
└─────────────────────
_*•Owner:*_ ${global.owner}
_*•Show AllMenu:*_ .allmenu
_*•Show About:*_ .about
> (Eval)
$ (Exec)`

MannHost.sendMessage(from, {text: text, contextInfo: { externalAdReply: {  title: '${global.botname}', body: '© MannHost', thumbnailUrl: "https://telegra.ph/file/8305331c272fa4de38a7f.jpg", sourceUrl: 'https://tiktok.com/@hyugimura', mediaType: 1, showAdAttribution: true, renderLargerThumbnail: true }}}, {quoted: m})
}
break
case prefix+'allmenu':
let text = `
_*>Hello User<*_
_Bot ini masih dalam perkembangan, wajar jika fitur sedikit_

┌─────────────────────
│ _*Name:*_ _${m.pushName}_
│ _*Number:*_ _${sender.split('@')[0]}_
├─────────────────────
│ _*Bot Name:*_ _${global.botname}_
│ _*Created By:*_ _Team Tabrak Lurus_
└─────────────────────

_*-MAIN MENU-*_
${prefix}owner
${prefix}sc
${prefix}menfes

_*-OTHER MENU-*_
${prefix}menu
${prefix}about

_*-OWNER MENU-*_
${prefix}broadcast
> (Eval)
$ (Exec)`

MannHost.sendMessage(from, {text: text, contextInfo: { externalAdReply: {  title: '${global.botname}', body: '© MannHost', thumbnailUrl: "https://telegra.ph/file/8305331c272fa4de38a7f.jpg", sourceUrl: 'https://tiktok.com/@hyugimura', mediaType: 1, showAdAttribution: true, renderLargerThumbnail: true }}}, {quoted: m})
}
break
case prefix+'about':
let text = `
_*•BotName:*_ _*${global.botname}*_
_*•Author:*_ _*MannHost & Team Tabrak Lurus
_*This Simple Bot WhatsApp For You*_`
MannHost.sendMessage(from, {text: text, contextInfo: { externalAdReply: {  title: '${global.botname}', body: '© MannHost', thumbnailUrl: "https://telegra.ph/file/8305331c272fa4de38a7f.jpg", sourceUrl: 'https://tiktok.com/@hyugimura', mediaType: 1, showAdAttribution: true, renderLargerThumbnail: true }}}, {quoted: m})
}
break
case prefix+'sc': {
  reply('_*Script: https://github.com/MannOffc/Yamada-By-MannHost*_')
  break
}
 case prefix+"owner": {
   sendContact(from, `${global.owner}@s.whatsapp.net`, 'MannHost', m)
 }
 break
 
case prefix+'bc': case prefix+'broadcast':
if (!isOwner) return reply('only owner')
if (args.length < 2) return reply(`Masukkan isi pesannya`)
var data = await store.chats.all()
 for (let i of data) {
 MannHost.sendMessage(i.id, { text: `_*🚨Broadcast🚨*_\n\n${q}` })
await func.sleep(1000)
 }
break

case prefix+'menfes': case prefix+'confes': {
if (!q) return reply('Example : ${prefix + command} 62xxx|nama|pesan')
y = q.split('|')[0]
b = q.split('|')[1]
n = q.split('|')[2]
let txt = `_Hai, ada secret message nih_\nDari: _*${b}*_\nPesan: _*${n}*_`
MannHost.sendMessage(`${y}@s.whatsapp.net`, {text: txt}, {quoted:m})
reply('mess.success')
} 
break

}
 } catch (e) {
        console.log(util.format(e))
    }
}
