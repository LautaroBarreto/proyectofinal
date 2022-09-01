
const selectOptions = document.getElementById('verEscalas');
const mostrar = document.querySelector('#mostrar');
const viewResult = document.getElementById('resultado');

const getLocalStorge = (key) => JSON.parse(localStorage.getItem(key))

const viewHTML = (array, lista) => {
    lista.innerHTML = '';
    array.forEach(escalas => {
        let li = `<li> Las notas son: ${escalas.notas}. <br> El modo de esta escala es: ${escalas.modo} <br> Las alterciones son: ${escalas.alteracion}</li>`
        lista.innerHTML += li;
    })
}

mostrar.addEventListener('click', ()=>{
    const escalas={
        ordenBemoles: JSON.parse(localStorage.getItem('ordenBemoles')),
        ordenSostenidos: JSON.parse(localStorage.getItem('ordenSostenidos')),
        escalasMayConSos: JSON.parse(localStorage.getItem('escalasMayConSos')),
        escalasMayConBem: JSON.parse(localStorage.getItem('escalasMayConBem')),
        escalasMenNatConSos: JSON.parse(localStorage.getItem('escalasMenNatConSos')),
        escalasMenNatConBem: JSON.parse(localStorage.getItem('escalasMenNatConBem'))
    }
    viewHTML(escalas[selectOptions.value], viewResult);
});