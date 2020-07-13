const ipc = require('electron').ipcMain;
const qrcode  = require("qrcode");
const TrayWindow = require("electron-tray-window");

const { Tray, app} = require("electron");
const path = require("path");

app.on("ready", () => {
  TrayWindow.setOptions({
    trayIconPath: path.join("resources/icon.png"),
    windowUrl: `file://${path.join(__dirname, "resources/index.html")}`,
    width:300,
    height:350
  });
});




async function run(string) {
  qrcode.toFile('./resources/qr.png', string, {
    color: {
      dark: '#000000ff',
      light: '#ffffffff' 
    }
  }, function (err) {
    if (err) throw err
    console.log('done')
  })
}






ipc.on('aSynMessage', (event, args) => {
 console.log(args);
 run(args).catch(error => console.error(error.stack));
 event.sender.send('asynReply','Main said: Async message received')
});

