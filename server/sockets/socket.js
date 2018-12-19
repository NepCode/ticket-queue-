const {io} = require('../server');
const { TicketControl} = require('../classes/ticket-control');

const ticketControl = new TicketControl();

/* io.on('connection', function () => {

}) */

io.on('connection',  (client) => {

    client.on('siguienteTicket', (data, callback) => {

        let siguiente = ticketControl.siguiente();
        console.log(siguiente);
        callback(siguiente);
        
    });


    client.emit('estadoActual', {
        actual: ticketControl.getUltimoTicket(),
        ultimos4: ticketControl.getUltimos4()
    });

    client.on('atenderTicket', (data, callback) => {
        
        if(!data.escritorio){
            return callback({
                err: true,
                mensaje: ' el escritorio es necesario'
            });
        }

        let atenderTicket = ticketControl.atenderTicket(data.escritorio);
        
        callback(atenderTicket);

        //emit to everyone who are listen this event
        client.broadcast.emit('ultimos4', {
            ultimos4:ticketControl.getUltimos4()
        });

    });

});