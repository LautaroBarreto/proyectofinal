class Escalas {

    constructor(notas, modo, alteracion, name){
        this.notas = notas;
        this.modo = modo.toUpperCase(); 
        this.alteracion = alteracion.toUpperCase();
        this.name = name;
    }
}

let ordenSostenidos = new Escalas("FA#, DO#, SOL#, RE#, LA#, MI#, SI#", 'No posee', 'sostenidos', 'Orden de los Sostenidos');
let ordenBemoles = new Escalas("SIb, MIb, LAb, REb, SOLb, DOb, FAb", 'No posee', 'bemoles', 'Orden de los Bemoles');

//escalas mayores con sostenido
//reemplazada con array asociativo

let escalaDo = new Escalas("DO, RE, MI, FA, SOL, LA, SI", 'mayor', 'No posee alteraciones', 'DO MAYOR');
let escalaRe = new Escalas("RE, MI, FA#, SOL, LA, SI, DO#", 'mayor', 'sostenidos', 'RE MAYOR');
let escalaSol = new Escalas("SOL, LA, SI, DO, RE, MI, FA#", 'mayor', 'sostenidos', 'SOL MAYOR');
let escalaLa = new Escalas("LA, SI, DO#, RE, MI, FA#, SOL#", 'mayor', 'sostenidos','LA MAYOR');
let escalaMi = new Escalas("MI, FA#, SOL#, LA, SI, DO#, RE#", 'mayor', 'sostenidos', 'MI MAYOR');
let escalaSi = new Escalas("SI, DO#, RE#, MI#, FA#, SOL#, LA#", 'mayor', 'sostenidos', 'SI MAYOR');
let escalaFaSostenido = new Escalas("FA#, SOL#, LA#, SI, DO#, RE#, MI#", 'mayor', 'sostenidos',' FA# MAYOR');
let escalaDoSostenido = new Escalas("DO#, RE#, MI#, FA#, SOL#, LA#, SI#", 'mayor', 'sostenidos', 'DO# MAYOR');



//escalas mayores con bemoles
let escalaFa = new Escalas("FA, SOL, LA, SIb, DO, RE, MI", 'mayor', 'bemoles', 'FA MAYOR');
let escalaSib = new Escalas("SIb, DO, RE, MIb, FA, SOL, LA", 'mayor', 'bemoles', 'SIb  MAYOR');
let escalaMib = new Escalas("MIb, FA, SOL, LAb, SIb, DO, RE", 'mayor', 'bemoles', 'MIb  MAYOR');
let escalaLab = new Escalas("LAb, SIb, DO, REb, MIb, FA, SOL", 'mayor', 'bemoles', 'LAb  MAYOR');
let escalaReb = new Escalas("REb, MIb, FA, SOLb, LAb, SIb, DO", 'mayor', 'bemoles', 'REb  MAYOR');
let escalaSolb = new Escalas("SOLb, LAb, SIb, DOb, REb, MIb, FA", 'mayor', 'bemoles', 'SOLb  MAYOR');
let escalaDob = new Escalas("DOb, REb, MIb, FAb, SOLb, LAb, SIb", 'mayor', 'bemoles', 'DOb  MAYOR');

//escalas menores naturales con sostenidos
let escalaLaMenor = new Escalas("LA, SI, DO, RE, MI, FA, SOL", "menor", "No posee alteraciones", 'LA MENOR');
let escalaMiMenor = new Escalas("MI, FA#, SOL, LA, SI, DO, RE", "menor", "sostenidos", 'MI MENOR');
let escalaSiMenor = new Escalas("SI, DO#, RE, MI, FA#, SOL, LA", "menor", "sostenidos", 'SI MENOR');
let escalaFaSosMenor = new Escalas("FA#, SOL#, LA, SI, DO#, RE, MI", "menor", "sostenidos", 'SOL MENOR');
let escalaDoSosMenor = new Escalas("DO#, RE#, MI, FA#, SOL#, LA, SI", "menor", "sostenidos", 'DO# MENOR');
let escalaSolSosMenor = new Escalas("SOL#, LA#, SI, DO#, RE#, MI, FA#", "menor", "sostenidos", 'SOL# MENOR');
let escalaReSosMenor = new Escalas("RE#, MI#, FA#, SOL#, LA#, SI, DO#", "menor", "sostenidos", 'RE# MENOR');
let escalaLaSosMenor = new Escalas("LA#, SI#, DO#, RE#, MI#, FA#, SOL#", "menor", "sostenidos", 'LA# MENOR');

//escalas menores naturales con bemoles

let escalaReMenor = new Escalas("RE, MI, FA, SOL, LA, SIb, DO", "menor", "bemoles", 'RE MENOR');
let escalaSolMenor = new Escalas("SOL, LA, SIb, DO, RE, MIb, FA", "menor", "bemoles", 'SOL MENOR');
let escalaDoMenor = new Escalas("DO, RE, MIb, FA, SOL, LAb, SIb", "menor", "bemoles", 'DO MENOR');
let escalaFaMenor = new Escalas("FA, SOLb, LAb, SIb, DO, REb, MIb", "menor", "bemoles", 'FA MENOR');
let escalaSibMenor = new Escalas("SIb, DO, REb, MIb, FA, SOLb, LAb", "menor", "bemoles", 'SIb MENOR');
let escalaMibMenor = new Escalas("MIb, FA, SOLb, LAb, SIb, DOb, REb", "menor", "bemoles", 'MIb MENOR');
let escalaLabMenor = new Escalas("LAb, SIb, DOb, REb, MIb, FAb, SOLb", "menor", "bemoles", 'LAb MENOR');


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
//Se aplica local storage...

localStorage.setItem('ordenBemoles', JSON.stringify([ordenBemoles]));

localStorage.setItem('ordenSostenidos', JSON.stringify([ordenSostenidos]));

localStorage.setItem('escalasMayConSos', JSON.stringify(escalasMayConSos));

localStorage.setItem('escalasMayConBem', JSON.stringify(escalasMayConBem));

localStorage.setItem('escalasMenNatConSos', JSON.stringify(escalasMenNatConSos));

localStorage.setItem('escalasMenNatConBem', JSON.stringify(escalasMenNatConBem));

