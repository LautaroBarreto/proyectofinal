let recordar = document.getElementById('rememberMe');
let bntLogin = document.getElementById('btnLogin');
let btnCleanLocalStorage = document.getElementById('bntCleanLocalStorage');
let btnCleanSessionStorage = document.getElementById('btnCleanSessionStorage');

function getData(storage) {
    let user = document.getElementById('emailAdress').value;
    let pass = document.getElementById('password').value;

    const usuario = {
        'user': user,
        'pass': pass,
    }
    storage === 'sessionStorage'&& sessionStorage.setItem('user', JSON.stringify(usuario));

    storage === 'localStorage'&& localStorage.setItem('user', JSON.stringify(usuario));
}

function cleanData(storage) {
    storage.clear()
}

bntLogin.addEventListener('click', () => {
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