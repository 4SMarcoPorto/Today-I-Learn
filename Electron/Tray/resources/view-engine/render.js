const ipc = require('electron').ipcRenderer;
const input = document.querySelector('#stringInput');

//When user press a key inside textarea, IPC send a message to index.js and run QrCodeGenerator function
input.addEventListener('change', () => {
    if(input.value != " " && input.value != ""){
        ipc.send('runQrCodeGenerator',input.value)
    }
});

//Index.js IPC return a message and render catch that message and reload frame to update qrcode img
ipc.on('QrCode200', (event,args) => {
    if(args){window.location.reload(true);}
});
