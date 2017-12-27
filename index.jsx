var SignalKClient = requre('@signalk/client').Client;

var signalk = new SignalKClient;
var connection;

console.log('Hello world');

var thisCallback = function(msg) {
  $.each(listenerList, function(i, obj) {
    obj.onmessage(msg, connection);
  });
};

function connectDelta(host, thisCallback, onConnect, onDisconnect) {
  debug("Connecting to " + host);

  // try mdns
  connection = signalk.discoverAndConnect();
  if(connection) {
    return;
  }

  console.log("Could not use mdns, falling back to " + host);

  connection = signalk.connectDelta(host, thisCallback,
    function(skConnection) {
      skConnection.subscribeAll();
      onConnect();
    },

    function(skConnection) {
      skConnection.close();
      debug('Disconnected');
    },

    function(error) {
      console.log(error)
    },

    'self'
  );
}

