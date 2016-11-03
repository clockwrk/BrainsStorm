'use strict'
let morgan = require('morgan');
let bodyParser = require('body-parser');
let path = require('path');
let http = require('http');
let server = http.createServer();
let express = require('express');
let app = express();
let socketio = require('socket.io');

server.on('require', app)

let io = socketio(server);

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/node_modules')));


io.on('connection', (socket) => {
	console.log('A new client has connected!');
	console.log(socket.id)
})


app.get('/', (req, res) => {

	console.log('Connected')
	res.send(200)
	// res.sendfile(path.join(\_\_dirname, 'index.html'));
})

server.listen(1337, () => {
	console.log('The server is listening on port 1337!')
})

// app.use(express.static(path.join(\_\_dirname. 'browser')))


