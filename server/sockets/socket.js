const {io} = require('../server');

/* io.on('connection', function () => {

}) */

io.on('connection',  (client) => {

    //console.log(`user connected: ${client}`);

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'welcome to this app'
    });

    client.on('disconnect', () => {
    console.log(`user disconnected: ${client}`);
    });


    //listen to client 
    client.on('enviarMensaje', (data,callback) => {
        console.log(data);

        /* client.emit('enviarMensaje', {
            usuario: data.usuario,
            mensaje: data.mensaje
        }); */
        client.broadcast.emit('enviarMensaje', data);

      /*   if(mensaje.usuario) {
            callback({
                resp:'ok'
            });
        }else{
            callback({
                resp:'everything goes wrong'
            });
        } */
       
    })

});