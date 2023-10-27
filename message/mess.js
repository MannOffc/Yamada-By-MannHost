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
var icon = fs.readFileSync("./src/yamada.jpg")

module.exports = MannHost = async (MannHost, m, chatUpdate, store) => {
try {
    if (!m) return
   if (m.isBaileys) return
const { type, quotedMsg, mentioned, now, fromMe } = m
const gakbisaowner = `${ownernumber}@s.whatsapp.net`
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const content = JSON.stringify(m.message)
const from = m.key.remoteJid
const chats = (m.type === 'conversation' && m.message.conversation) ? m.message.conversation : (m.type == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.type == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.type == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : '' 
if (sock.multi) {
var prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(chats) ? chats.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
} else {
if (sock.nopref) {
prefix = ''
} else {
prefix = sock.prefa
}
}
const args = chats.split(' ')
const command = chats.toLowerCase().split(' ')[0] || ''
const isCmd = command.startsWith(prefix)
const quoted = m.isQuoted ? m.quoted : m
const q = chats.slice(command.length + 1, chats.length)
const botNumber = sock.user.id.split(':')[0] + '@s.whatsapp.net'
const isGroup = m.key.remoteJid.endsWith('@g.us')
const sender = isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const isOwner = global.owner == sender ? true : [`${global.owner}@s.whatsapp.net`].includes(sender) ? true : false
const groupMetadata = isGroup ? await sock.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.id : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const ppgc = await conn.profilePictureUrl(from, 'image')
const ppuser = await conn.profilePictureUrl(sender, 'image')
const isBotGroupAdmins = groupAdmins.includes(botNumber) : false
const isGroupAdmins = groupAdmins.includes(sender)
const MannTheCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const MannTheDeveloper = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const isImage = (type == 'imageMessage')
const isVideo = (type == 'videoMessage')
const isAudio = (type == 'audioMessage')
const isSticker = (type == 'stickerMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
	
//baris function
const reply = (teks) => {
			sock.sendMessage(from, { text: teks }, { quoted: m })
	}
const sendContact = (jid, numbers, name, quoted, mn) => {
let number = numbers.replace(/[^0-9]/g, '')
const vcard = 'BEGIN:VCARD\n' 
			+ 'VERSION:3.0\n' 
			+ 'FN:' + name + '\n'
			+ 'ORG:;\n'
			+ 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
			+ 'END:VCARD'
			return sock.sendMessage(from, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions : mn ? mn : []},{ quoted: m })
		}
const sendMess = (hehe, teks) => {
	sock.sendMessage(hehe, { text: teks })
}

const sendText = (from, teks) => {
	sock.sendMessage(from, { text: teks })
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
│ _*Bot Name:*_ _Yamada_
│ _*Created By:*_ _MannHost_
└─────────────────────
Show AllMenu: ${prefix}allmenu
About Me: ${prefix}about`

sock.sendMessage(from, {text: text, contextInfo: { externalAdReply: {  title: 'Bens - MD', body: '© Team Tabrak Lurus', thumbnail: fs.readFileSync("./src/dep.jpg"), sourceUrl: 'https://youtube.com/playlist?list=RDwjWmfnvIrDw&playnext=1&si=MgY1RAkwmw43y80B', mediaType: 1, showAdAttribution: true, renderLargerThumbnail: true }}}, {quoted: m})
}
break
case prefix+"allmenu": case prefix+"menuall": {
                let text = `
_*>Hello User<*_
_Bot ini masih dalam perkembangan, wajar jika fitur sedikit_

┌─────────────────────
│ _*Name:*_ _${m.pushName}_
│ _*Number:*_ _${sender.split('@')[0]}_
├─────────────────────
│ _*Bot Name:*_ _Yamada_
│ _*Created By:*_ _MannHost_
│ _*Baileys: Multi Baileys
│ _*Version Bot: ${global.versisc}
└─────────────────────

_*-GROUP MENU-*_
${prefix}liston
${prefix}promote
${prefix}demote
${prefix}hidetag
${prefix}tagall

_*-OWNER MENU-*_
${prefix}bc
${prefix}broadcast
${prefix}listpc
${prefix}listgc
${prefix}manntag
> (Eval)
$ (Exec)`

sock.sendMessage(from, {text: text, contextInfo: { externalAdReply: {  title: 'Bens - MD', body: '© Team Tabrak Lurus', thumbnail: fs.readFileSync("./src/dep.jpg"), sourceUrl: 'https://youtube.com/playlist?list=RDwjWmfnvIrDw&playnext=1&si=MgY1RAkwmw43y80B', mediaType: 1, showAdAttribution: true, renderLargerThumbnail: true }}}, {quoted: m})
}
break
case prefix+'sc': {
  reply('_*Script: https://github.com/WhyDepin/baileys-bot-whatsapp*_')
  break
}
 case prefix+"owner": {
   sendContact(from, `${global.owner}@s.whatsapp.net`, 'WhyDepin', m)
 }
 break
 
case prefix+'bc': case prefix+'broadcast':
if (!isOwner) return reply('only owner')
if (args.length < 2) return reply(`Masukkan isi pesannya`)
var data = await store.chats.all()
 for (let i of data) {
 sock.sendMessage(i.id, { text: `_*🚨Broadcast🚨*_\n\n${q}` })
await func.sleep(1000)
 }
break

case prefix+'menfes': case prefix+'confes': {
if (!q) return reply('Example : ${prefix + command} 62xxx|nama|pesan')
y = q.split('|')[0]
b = q.split('|')[1]
n = q.split('|')[2]
let txt = `_Hai, ada secret message nih_\nDari: _*${b}*_\nPesan: _*${n}*_`
sock.sendMessage(`${y}@s.whatsapp.net`, {text: txt}, {quoted:m})
reply('success')
} 
break

////FiturGcOnly////

case prefix+'listpc': {
if (!MannTheCreator) return reply(mess.owner)
let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let teks = `*🔒 LIST PERSONAL CHAT*\n\n`
teks += `*📱 Total Chat :* ${anulistp.length} Chat\n\n`
for (let i of anulistp) {
let nama = store.messages[i].array[0].pushName
teks += `📛 *Nama :* ${nama}\n`
teks += `👤 *User :* @${i.split('@')[0]}\n`
teks += `🔗 *Link Chat :* https://wa.me/${i.split('@')[0]}\n\n`
teks += `────────────────────────\n\n`
}
MannHost.sendTextWithMentions(m.chat, teks, m)
}
break
case prefix+'listgc': {
if (!MannTheCreator) return reply(mess.owner)
let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `👥 *LIST GROUP CHAT*\n\n`
teks += `📱 Total Group : ${anulistg.length} Group\n\n`
for (let i of anulistg) {
let metadata = await MannHost.groupMetadata(i)
teks += `📛 *Name :* ${metadata.subject}\n`
teks += `👤 *Owner Grup :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}\n`
teks += `🌱 *ID :* ${metadata.id}\n`
teks += `⏰ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n`
teks += `👥 *Member :* ${metadata.participants.length}\n\n`
teks += `────────────────────────\n\n`
}
MannHost.sendTextWithMentions(m.chat, teks, m)
l}
break
case prefix+'listonline': case prefix+'liston': {
if (!isGroup) return m.reply(mess.group)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
MannHost.sendText(m.chat, '⏰ List Online:\n\n' + online.map(v => '🌱 @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
break
case prefix+'promote': {
if (!isGroup) return m.reply(mess.group)
if (!isGroupAdmins && !MannTheCreator) return m.reply(mess.admin)
if (!isBotGroupAdmins) return m.reply(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await MannHost.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case prefix+'demote': {
if (!isGroup) return m.reply(mess.group)
if (!isGroupAdmins && !MannTheCreator) return m.reply(mess.admin)
if (!isBotGroupAdmins) return m.reply(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await MannHost.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case prefix+'hidetag': {
if (!isGroup) return m.reply(mess.group)
if (!isGroupAdmins && !MannTheCreator) return m.reply(mess.admin)
if (!isBotGroupAdmins) return m.reply(mess.botAdmin)
MannHost.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case prefix+'manntag': {
if (!MannTheCreator) return reply(mess.owner)
if (!isGroup) return m.reply(mess.group)
if (!isPrem) return m.reply(mess.prem)
MannHost.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case prefix+'tagall': {
if (!isGroup) return m.reply(mess.group)
if (!isGroupAdmins && !MannTheCreator) return m.reply(mess.admin)
if (!isBotGroupAdmins) return m.reply(mess.botAdmin)
me = m.sender
let teks = `╚»˙·٠👥 Tag All By Admin 👥٠·˙«╝ 
 
 🏷️ *Tagger :*  @${me.split('@')[0]}
 ✉️️ *Message : ${q ? q : 'no message'}*\n\n`
for (let mem of participants) {
teks += `@${mem.id.split('@')[0]}\n`
}
MannHost.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case prefix+'linkgroup': case prefix+'linkgc': {
if (!isGroup) return m.reply(mess.group)
if (!isBotGroupAdmins) return m.reply(mess.botAdmin)
let response = await MannHost.groupInviteCode(m.chat)
MannHost.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n👾 Link Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case prefix+'join': {
if (!MannTheCreator) return m.reply(mess.owner)
if (!text) return m.reply(`Contoh ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await MannHost.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break

}
 } catch (e) {
        console.log(util.format(e))
    }
}
