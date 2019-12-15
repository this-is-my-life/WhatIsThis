const { app, BrowserWindow } = require('electron')

app.on('ready', () => {
  const win = new BrowserWindow({ autoHideMenuBar: true })
  const inter = setInterval(() => {
    if (!win.isDestroyed) clearInterval(inter)

    win.setSize(Math.floor(Math.random() * 1000), Math.floor(Math.random() * 800))
    win.setPosition(Math.floor(Math.random() * 1000), Math.floor(Math.random() * 800))
  }, 100)
})
