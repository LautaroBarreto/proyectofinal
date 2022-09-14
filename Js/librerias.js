//SWEET ALERT 
//Utilizo la libreria Sweet Alert 2 con una targeta custom emergente cuando el usuario decida acceder a la pagina "PONTE A PRUEBA"





//Intente ejecutar el codigo anterior pero me redirecciona directamente a la siguiente pagina

//Decidi agregar una alerta directamente en el inicio de la pagina para cumplir el objetivo.

Swal.fire({
    title: 'Bienvenido a CHORSLAND',
    text: 'Estas listo para ingresar al mundo de la musica?',
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    stopKeydownPropagation: false
})
