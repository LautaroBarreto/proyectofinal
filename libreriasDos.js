const paginaPrueba = document.getElementById('pagina-prueba');

paginaPrueba.addEventListener('click', function () {
    Swal.fire({
        title: 'DESEAS CONTINUAR?',
        icon: 'warning',
        confirmButtonText: 'Estoy listo',
        cancelButtonText: 'No estoy listo',
    })
        .then((result) => {
            if (result.isConfirmed){
                Swal.fire({
                    title: 'Bienvenido',
                    icon: 'success'
                })
                window.location.replace('/pages/prueba.html')
        }
});