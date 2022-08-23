
const selectOptions = document.getElementById('verEscalas');
const mostrar = document.querySelector('#mostrar');
const viewResult = document.getElementById('resultado');


const viewHTML = (array, lista) => {
    lista.innerHTML = '';
    array.forEach(escalas => {
        let li = `<li> Las notas son: ${escalas.notas}. <br> El modo de esta escala es: ${escalas.modo} <br> Las alterciones son: ${escalas.alteracion}</li>`
        lista.innerHTML += li;
    })
} 
console.log(viewHTML);

mostrar.addEventListener('click', ()=>{
    const escalas={
        ordenBemoles: [ordenBemoles],
        ordenBemoles: [ordenSostenidos],
        escalasMayConSos,
        escalasMayConBem,
        escalasMenNatConSos,
        escalasMenNatConBem
    }
    viewHTML(escalas[selectOptions.value], viewResult);
});
    