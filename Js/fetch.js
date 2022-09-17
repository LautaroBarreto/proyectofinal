const btnJson = document.getElementById('btnJson');
const endpoint = 'http://127.0.0.1:5500/acordes.json'
btnJson.addEventListener('click',renderData);

function renderData () {
    fetch(endpoint)
    .then(function(resultado){
        return resultado.json();
    })
    .then(function(data){
        listaHTML = '';
        data.forEach(function(acordes){
            listaHTML += `
            <li>Acorde: ${acordes.acorde} ${acordes.modo}. <br> Los grados de la escala son: ${acordes.grados}. <br> Las notas del acorde son: ${acordes.notas}</li>`;
        })
        document.getElementById('chords').innerHTML = listaHTML;
        })
        .catch(err => console.error(err));
}
console.log(renderData)