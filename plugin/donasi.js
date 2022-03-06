//Jangan Di Hapus Tapi kalo Di tambah Boleh

let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(thumbfoto)).buffer(), `
┌〔 Donasi • Pulsa 〕
├ Axis🗿: 6283139426854
├ Telkomsel🗿: --
├ DONASI BG, BIAR GW SEMANGAT🗿
├ GROUP RIEL BOT¹🥀
├ https://chat.whatsapp.com/HYr6cgrs7jmEmPMFtwviHW
├ GROUP RIEL BOT²✨
├ https://chat.whatsapp.com/F4mwyaFGBBR9UD4LFL3P1I
├ GROUP BOT han¹🥀
├ https://chat.whatsapp.com/H4pPY0xStH0AIKRZjNrx8z
├ GROUP BOT² han²✨
├ https://chat.whatsapp.com/H4pPY0xStH0AIKRZjNrx8z
├ JIKA LINK GRUB DI RESET SILA CHAT OWNER,KETIK #owner
└────
`.trim(), watermark, 'Menu', '.menu', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
