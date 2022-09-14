const btnJson = document.getElementById('btnJson');

function renderData () {
    fetch('../Js/adordes.json')
    .then(function(resultado){
        return resultado.json();
    })
    .then(function(data){
        listaHTML = '';
        data.forEach(function(acordes){
            listaHTML += `
            <li>Acorde: ${acordes.acorde} + ${acordes.modo}. <br> Los grados de la escala son: ${acordes.grados}. <br> Las notas del acorde son: ${acordes.notas}`;
        })
        document.getElementById('chords').innerHTML = listaHTML;
        })
        .catch(err => console.error(err));
}

btnJson.addEventListener('click',renderData);