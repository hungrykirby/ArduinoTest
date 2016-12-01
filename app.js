var five = require('johnny-five');
var board = new five.Board();
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(process.env.PORT || 8000);
console.log('Server running');

board.on('ready', function() {
  var led = new five.Led(13);
  led.blink(500);
});
