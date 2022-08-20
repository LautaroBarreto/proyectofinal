class Escalas {

    constructor(notas, modo, alteracion){
        this.notas = notas.toUpperCase();
        this.modo = modo; 
        this.alteracion = alteracion;
    }
}

let ordenSostenidos = new Escalas("FA#, DO#, SOL#, RE#, LA#, MI#, SI#", 'cromatico', 'sostenidos');
let ordenBemoles = new Escalas("SIb, MIb, LAb, REb, SOLb, DOb, FAb", 'cromatico', 'bemoles');

//escalas mayores con sostenido
//reemplazada con array asociativo

let escalaDo = new Escalas("DO, RE, MI, FA, SOL, LA, SI", 'mayor', 'sostenidos');
let escalaRe = new Escalas("RE, MI, FA#, SOL, LA, SI, DO#", 'mayor', 'sostenidos');
let escalaSol = new Escalas("SOL, LA, SI, DO, RE, MI, FA#", 'mayor', 'sostenidos');
let escalaLa = new Escalas("LA, SI, DO#, RE, MI, FA#, SOL#", 'mayor', 'sostenidos');
let escalaMi = new Escalas("MI, FA#, SOL#, LA, SI, DO#, RE#", 'mayor', 'sostenidos');
let escalaSi = new Escalas("SI, DO#, RE#, MI#, FA#, SOL#, LA#", 'mayor', 'sostenidos');
let escalaFaSostenido = new Escalas("FA#, SOL#, LA#, SI, DO#, RE#, MI#", 'mayor', 'sostenidos');
let escalaDoSostenido = new Escalas("DO#, RE#, MI#, FA#, SOL#, LA#, SI#", 'mayor', 'sostenidos');



//escalas mayores con bemoles
let escalaFa = new Escalas("FA, SOL, LA, SIb, DO, RE, MI", 'mayor', 'bemoles');
let escalaSib = new Escalas("SIb, DO, RE, MIb, FA, SOL, LA", 'mayor', 'bemoles');
let escalaMib = new Escalas("MIb, FA, SOL, LAb, SIb, DO, RE", 'mayor', 'bemoles');
let escalaLab = new Escalas("LAb, SIb, DO, REb, MIb, FA, SOL", 'mayor', 'bemoles');
let escalaReb = new Escalas("REb, MIb, FA, SOLb, LAb, SIb, DO", 'mayor', 'bemoles');
let escalaSolb = new Escalas("SOLb, LAb, SIb, DOb, REb, MIb, FA", 'mayor', 'bemoles');
let escalaDob = new Escalas("DOb, REb, MIb, FAb, SOLb, LAb, SIb", 'mayor', 'bemoles');

//escalas menores naturales con sostenidos
let escalaLaMenor = new Escalas("LA, SI, DO, RE, MI, FA, SOL", "menor", "sostenidos");
let escalaMiMenor = new Escalas("MI, FA#, SOL, LA, SI, DO, RE", "menor", "sostenidos");
let escalaSiMenor = new Escalas("SI, DO#, RE, MI, FA#, SOL, LA", "menor", "sostenidos");
let escalaFaSosMenor = new Escalas("FA#, SOL#, LA, SI, DO#, RE, MI", "menor", "sostenidos");
let escalaDoSosMenor = new Escalas("DO#, RE#, MI, FA#, SOL#, LA, SI", "menor", "sostenidos");
let escalaSolSosMenor = new Escalas("SOL#, LA#, SI, DO#, RE#, MI, FA#", "menor", "sostenidos");
let escalaReSosMenor = new Escalas("RE#, MI#, FA#, SOL#, LA#, SI, DO#", "menor", "sostenidos");
let escalaLaSosMenor = new Escalas("LA#, SI#, DO#, RE#, MI#, FA#, SOL#", "menor", "sostenidos");

//escalas menores naturales con bemoles

let escalaReMenor = new Escalas("RE, MI, FA, SOL, LA, SIb, DO", "menor", "bemoles");
let escalaSolMenor = new Escalas("SOL, LA, SIb, DO, RE, MIb, FA", "menor", "bemoles");
let escalaDoMenor = new Escalas("DO, RE, MIb, FA, SOL, LAb, SIb", "menor", "bemoles");
let escalaFaMenor = new Escalas("FA, SOLb, LAb, SIb, DO, REb, MIb", "menor", "bemoles");
let escalaSibMenor = new Escalas("SIb, DO, REb, MIb, FA, SOLb, LAb", "menor", "bemoles");
let escalaMibMenor = new Escalas("MIb, FA, SOLb, LAb, SIb, DOb, REb", "menor", "bemoles");
let escalaLabMenor = new Escalas("LAb, SIb, DOb, REb, MIb, FAb, SOLb", "menor", "bemoles");


//Agrupo las variables creadas con array asociativo, y de esta manera ahorro codigo funcional y puedo utilizar las diferentes escalas por separado mucho mejor.
//Proximamente pasare cada escala a un array diferente.

let escalasMayConSos = [escalaDo, escalaSol, escalaRe, escalaLa, escalaMi, escalaSi, escalaFaSostenido, escalaDoSostenido];
let escalasMayConBem = [escalaFa, escalaSib, escalaMib, escalaLab, escalaReb, escalaSolb, escalaDob];
let escalasMenNatConSos = [escalaLaMenor, escalaMiMenor, escalaSiMenor, escalaFaSosMenor, escalaDoSosMenor, escalaSolSosMenor, escalaReSosMenor, escalaLaSosMenor];
let escalasMenNatConBem = [escalaReMenor, escalaSolMenor, escalaFaMenor,escalaSibMenor, escalaMibMenor, escalaLabMenor];


//....

let sostenidos = [escalaDo, escalaSol, escalaRe, escalaLa, escalaMi, escalaSi, escalaFaSostenido, escalaDoSostenido, escalaLaMenor, escalaMiMenor, escalaSiMenor, escalaFaSosMenor, escalaDoSosMenor, escalaSolSosMenor, escalaReSosMenor, escalaLaSosMenor];


let bemoles = [escalaFa, escalaSib, escalaMib, escalaLab, escalaReb, escalaSolb, escalaDob, escalaReMenor, escalaSolMenor, escalaDoMenor, escalaFaMenor, escalaSibMenor, escalaMibMenor, escalaLabMenor]

let cromatico = [ordenBemoles, ordenSostenidos]
//....


const todasLasEscalas = [ordenSostenidos, ordenBemoles, escalaDo, escalaSol, escalaRe, escalaLa, escalaMi, escalaSi, escalaFaSostenido, escalaDoSostenido, escalaFa, escalaSib, escalaMib, escalaLab, escalaReb, escalaSolb, escalaDob, escalaLaMenor, escalaMiMenor, escalaSiMenor, escalaFaSosMenor, escalaDoSosMenor, escalaSolSosMenor, escalaReSosMenor, escalaLaSosMenor, escalaReMenor, escalaSolMenor, escalaDoMenor, escalaFaMenor, escalaSibMenor, escalaMibMenor, escalaLabMenor]; 
//...................

console.log(todasLasEscalas);

const selectOptions = document.getElementById('verEscalas');
const mostrar = document.querySelector('#mostrar');
const viewResult = document.getElementById('resultado');


const viewHTML = (array, lista) => {
    lista.innerHTML = '';
    array.forEach(escalas => {
        let li = `<li>${escalas.notas}, modo ${escalas.modo} $ ${escalas.alteracion}</li>`;
        lista.innerHTML += li;
    });
} 

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
    