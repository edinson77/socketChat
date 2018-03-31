// se crean las variables que van a ser los objetos de esas dependencias
var app = require('express')();                // 1 -----express       para el manejo de vistas   
var http = require('http').Server(app);    // 2 -----se   crea el servidor
var io = require('socket.io')(http);           // 3 -----se crea el socket  nos servirá para 
var port = process.env.PORT || 3000;     // 4 -----definimos el puerto para servir nuestra 

app.get('/', function(req, res){                // 5----- creamos nuestra primera vista ,es decir que archivo vamos a utilizar  cuando entremos a la direccion del servidor "al index" con la peticion por get
	
//res.send('<h1>Hello world</h1>');

	  res.sendFile(__dirname + '/index.html');  // 6 -----  cuando ingrese al index de la aplicacion  con res lo muestra  

});

io.on('connection', function(socket){
	
// console.log('a user connected');
//socket.on('disconnect', function(){
// console.log('user disconnected');
	
  socket.on('chat message', function(msg){
//console.log('message: ' + msg)
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
