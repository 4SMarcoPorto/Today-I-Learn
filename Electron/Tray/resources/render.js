const ipc = require('electron').ipcRenderer, input = document.querySelector('#stringInput');
let replyDiv = document.querySelector('#rp');
input.addEventListener('change', () => {
 ipc.send('aSynMessage',input.value)
});

ipc.on('asynReply', (event, args) => {
 replyDiv.innerHTML = args;
 window.location.reload(true);
});