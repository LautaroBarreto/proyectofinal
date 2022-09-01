//SWEET ALERT 
//Utilizo la libreria Sweet Alert 2 con una targeta custom emergente cuando el usuario decida acceder a la pagina "PONTE A PRUEBA"

/*
const paginaPrueba = document.getElementById('pagina-prueba');

paginaPrueba.addEventListener('click', function () {
    Swal.fire({
        title: 'Estas listo para practicar?',
        text: 'Podras volver a ver las escalas cuando quieras.',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Estoy listo',
        cancelButtonText: 'No estoy listo',
        reverseButtons: true
    })
        .then((result) => {
            if (result.isConfirmed){
                Swal.fire(
                    'Aqui Vamos!',
                    'Tomate tu tiempo',
                    'success'
                )
            } else if (result.dismiss){
                Swal.fire(
                    'Puedes volver mas tarde',
                    'error'
                )
            }
        })
});

paginaPrueba.addEventListener('click', ()=>{
    
    viewHTML(escalas[selectOptions.value], viewResult);
});
*/

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