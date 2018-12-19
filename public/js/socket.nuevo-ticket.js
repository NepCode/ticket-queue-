//command to establish conecction
var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect',  function() {
    console.log('connected to server');
});

socket.on('disconnect',  function() {
    console.log('disconnected from server');
});


// on estadoActual for listening info
 socket.on('estadoActual', function(resp){
    //console.log('server says:', resp);
    label.text(resp.actual);
});

$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
});