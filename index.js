// server.js
const app = require('express')()
const server = require('http').createServer(app)
const WebSocket = require('ws')
var port = process.env.PORT || 4000;

const wss = new WebSocket.Server({ server })

let temperatura = 0

wss.on('connection', ws => {
    console.log('Nova conexão')

    ws.on('message', message => {
        temperatura = message
    })

    setInterval(function () { ws.send(temperatura); }, 1000);

})

server.listen(port, function () {
    console.log('listening on port 4000')
})
  