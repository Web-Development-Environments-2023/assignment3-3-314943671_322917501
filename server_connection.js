var path = require("path");
var app = require('./app');
// var debug = require('debug')('modamedic:server');
// var http = require('http');
var https = require('https');
var fs = require('fs');

var httpsOptions = {
  key: fs.readFileSync(path.join(__dirname,"server.key")),
  // key: fs.readFileSync('server.key'),
  // key: fs.readFileSync("C:\\Users\\noyha\\IdeaProjects\\ProjectServer\\key.pem"),
  // cert: fs.readFileSync("C:\\Users\\noyha\\IdeaProjects\\ProjectServer\\cert.pem")  key: fs.readFileSync("C:\\Users\\noyha\\IdeaProjects\\ProjectServer\\key.pem"),
  cert: fs.readFileSync(path.join(__dirname,"server.cert")),

}
/**
 * Get port from environment and store in Express.
 */

// var port = normalizePort(process.env.PORT || '8181');
var port = normalizePort(process.env.PORT || '443');
// var port = process.env.PORT;
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = https.createServer(httpsOptions, app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
server.address("http://recipeideas.cs.bgu.ac.il");
function onListening() {

  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
    console.log(`Server listen in port ${port} in adrress ${addr.address}`);
//   debug('Listening on ' + bind);
}