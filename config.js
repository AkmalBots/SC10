const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'Your Key',
}

//api
global.xteam = 'apivproject'
global.lolhuman = 'yourkey'

// Other
global.owner = ['6281269734000']
global.premium = ['6281269734000']
global.ownername = 'Akmal'
global.botname = 'Nebotz•MD'
global.packname = '© Subs Holer GTPS'
global.gc = 'https://github.com/AzzBott679'
global.linkyt = 'https://youtube.com/channel/UCTmcFqM5DUtRzVbkYr6pENA'
global.linkgc = 'https://chat.whatsapp.com/JTeGBeurcJD2RbBj8MzhDU'
global.limitawal = '10'
global.author = '@Akmal\n@Nebotz'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⌕'
global.mess = {
    success: 'Berhasil',
    admin: 'Fitur Itu Buat Admin Jamall❕',
    botAdmin: 'Jadiin Bot Admin Baru Bisa 🤡',
    owner: 'Eitss Fitur Itu Untuk Owner Aja✨',
    group: 'Make Fitur Itu Di Grup❕',
    private: 'Private Chat Aja Kalo Make Fitur Itu 🙏',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Tunggu sebentar, Jangan Lupa Subscribe Holer GTPS',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 500
}
global.sc = fs.readFileSync('./media/sc.jpg')
global.tq = fs.readFileSync('./media/tq.jpg')
global.menu = fs.readFileSync('./media/menu.jpg')
global.allmenu = fs.readFileSync('./media/allmenu.jpg')
global.thumb = { url: 'https://i.pinimg.com/736x/d0/f8/b8/d0f8b804a908ce4aaee63d54035d2192.jpg' }
global.visoka = { url: 'https://telegra.ph/file/769d88bb8c8357546a149.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
