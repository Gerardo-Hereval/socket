//referencias del HTML
const lblOnline = document.querySelector('#lblOnline'); //para hacer referencia a los id que tenemos en el index
const lblOffline = document.querySelector('#lblOffline'); 
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

const socket = io();//este va a ser el cliente

socket.on('connect', ()=>{ //el on es para estar escuchanod los eventos
    // console.log('Conectado');

    lblOffline.style.display    ='none';
    lblOnline.style.display     ='';

});

socket.on('disconnect', ()=>{
    console.log('Desconectado del servidor');

    lblOnline.style.display     ='none';
    lblOffline.style.display    ='';
});

socket.on('enviar-mensaje',(payload)=>{
    console.log(payload);
})

btnEnviar.addEventListener('click', () => { //boton de enviar
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id:'123qwe',
        fecha: new Date().getTime()
    }
    socket.emit('enviar-mensaje',payload, (id)=>{
        console.log('Desde el server',id);
    });
})