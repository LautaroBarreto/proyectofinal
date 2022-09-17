let recordar = document.getElementById('rememberMe');
let btnLogin = document.getElementById('btnLogin');
let btnCleanLocalStorage = document.getElementById('btnCleanLocalStorage');
let btnCleanSessionStorage = document.getElementById('btnCleanSessionStorage');

function getData(storage) {
    let user = document.getElementById('emailAdress').value;
    let pass = document.getElementById('password').value;

    const usuario = {
        'user': user,
        'pass': pass,
    }
    sessionStorage === 'sessionStorage' && sessionStorage.setItem('user', JSON.stringify(usuario));

    localStorage === 'localStorage' && localStorage.setItem('user', JSON.stringify(usuario));
    console.log(usuario)
    window.location.href = 'http://127.0.0.1:5500/index.html';
}

function cleanData(storage) {
    storage.clear()
}

btnLogin.addEventListener('click', () => {
    if (recordar.checked) {
        getData('localStorage');
    } else {
        getData('sessionStorage');
    }
})

btnCleanLocalStorage.addEventListener('click', () => {
    cleanData(localStorage);
    cleanData(sessionStorage);
})

btnCleanSessionStorage.addEventListener('click', () => {
    cleanData(sessionStorage);
})

console.log(getData)