var five = require('johnny-five');
var board = new five.Board();

var osc = require('node-osc');
var oscclient = new osc.Client((process.env.ADR || '10.24.91.31'), 3333);

/*
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(process.env.PORT || 8000);
console.log('Server running');
*/


/*board.on('ready', function() {
  var led = new five.Led(13);
  led.blink(500);
});*/

/*
board.on("ready", function() {
  var compass = new five.Compass({
    controller: "HMC5883L"
  });
  compass.on("data", function(mag) {
    console.log("  heading : ", Math.floor(this.heading));
    console.log("  bearing : ", this.bearing.name);
    console.log(this.value);
    console.log("--------------------------------------");
  });
});
*/

board.on("ready", function(){
   var magnetometer = new five.Magnetometer({
     controller: "HMC5883L",
   });
   magnetometer.on("data", function(_mag, _sth){
     console.log('heading', Math.floor(this.heading));
     oscclient.send('/node/heading', Math.floor(this.heading));
     console.log('raw{x, y, z}', this.raw);
     oscclient.send('/node/raw', this.raw.x, this.raw.y, this.raw.z);
   });
});
