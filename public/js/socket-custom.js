
        var socket = io();

        socket.on('connect', function(){
            console.log('connected to server');
        });


        //on is for listen to information
        socket.on('disconnect' , ()  => {
            console.log('we lose connection with server');
        });

        //emit is for send info
        socket.emit('enviarMensaje', {
            usuario: 'Antonio',
            mensaje: 'hello world'
        }, function(resp) {
            console.log('server response', resp);
        });

        //on is for listening info
        socket.on('enviarMensaje', function(resp){
            console.log('server says:', resp);
        });

   