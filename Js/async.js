const { bashCompletionFromOptions } = require("dashdash")

const endpoint = 'https://login-signup.p.rapidapi.com'

botton.addEventListener('click', async () => {
    let info = await getData();
    go(info)
});

function go(info){
    let contenedor = `
    <div>
        <form name=form action="TU_PAGINA_WEB.HTML">

        <p>Usuario: <INPUT type=text name=login></p> 
        <p>Contraseña: <INPUT type=password name=password></p>
        <input onclick=go() type=button value=Acceder>
    
        </form>`;
    container.innerHTML = contenedor;
}

async function go() {
    try {
        let id = prompt('Ingrese un Nombre');
        let info = await fetch(`${endpoint}${id}`)
        info = await info.json()

        return info
    } catch (error) {
        console.log(error)
    }
}