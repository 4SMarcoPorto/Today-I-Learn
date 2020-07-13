const ipc = require('electron').ipcMain;
const qrcode  = require("qrcode");

const TrayWindow = require("electron-tray-window");
const { app } = require("electron");

const path = require("path");

app.on("ready", () => {
  TrayWindow.setOptions({
    trayIconPath: path.join("resources/assets/icon@3x.png"),
    windowUrl: `file://${path.join(__dirname, "resources/view.html")}`,
    width:300,
    height:350
  });
});


async function QrCodeGenerator(string) {
  qrcode.toFile('./resources/view-engine/qr.png', string, {
    color: {
      dark: '#000000ff',
      light: '#ffffffff' 
    }
  }, function (err) {
    if (err) throw err
    console.log('done')
  })
}

ipc.on('runQrCodeGenerator', (event, args) => {
 console.log(args);
 QrCodeGenerator(args).catch(error => console.error(error.stack));
 event.sender.send('QrCode200',true)
});

