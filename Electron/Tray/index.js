const ipc = require('electron').ipcMain;
const qrcode  = require("qrcode");
const path = require("path");

const TrayWindow = require("electron-tray-window");
const { app,BrowserWindow } = require("electron");

//render tray
app.on("ready", () => {
  


  TrayWindow.setOptions({
    trayIconPath: path.join("resources/assets/icon@3x.png"),
    windowUrl: `file://${path.join(__dirname, "resources/view.html")}`,
    width:300,
    height:350
  });
});


//Generate qrcode from string provide by ipc
async function QrCodeGenerator(string) {
  qrcode.toFile('./resources/view-engine/qr.png', string, {
    color: {
      dark: '#000000ff',
      light: '#ffffffff' 
    }
  }, function (err) {
    if (err) throw err
      console.log("[QR-Code]:",200)
  })
}


//ipc listen runQrCodeGenerator then calls QrCodeGenerator function
ipc.on('runQrCodeGenerator', (event, args) => {
 console.log('[String-Converted]:',args);

 QrCodeGenerator(args).catch(error => console.error(error.stack));
 event.sender.send('QrCode200',true)
});

