alert("Bienvenido a la biblioteca de escalas musicales y acordes");

//escalas mayores

let ordenSostenidos = ("[FA#, DO#, SOL#, RE#, LA#, MI#, SI#]");
let ordenBemoles = ("[SIb, MIb, LAb, REb, SOLb, DOb, FAb]");
//escalas mayores con sostenido

let escalaDo = ("[DO, RE, MI, FA, SOL, LA, SI]");
let escalaSol = ("[SOL, LA, SI, DO, RE, MI, FA#]");
let escalaRe = ("[RE, MI, FA#, SOL, LA, SI, DO#]");
let escalaLa = ("[LA, SI, DO#, RE, MI, FA#, SOL#]");
let escalaMi = ("[MI, FA#, SOL#, LA, SI, DO#, RE#]");
let escalaSi = ("[SI, DO#, RE#, MI#, FA#, SOL#, LA#]");
let escalaFaSostenido = ("[FA#, SOL#, LA#, SI, DO#, RE#, MI#[");
let escalaDoSostenido = ("[DO#, RE#, MI#, FA#, SOL#, LA#, SI#]");


//escalas mayores con bemoles
let escalaFa = ("[FA, SOL, LA, SIb, DO, RE, MI]");
let escalaSib = ("[SIb, DO, RE, MIb, FA, SOL, LA]");
let escalaMib = ("[MIb, FA, SOL, LAb, SIb, DO, RE]");
let escalaLab = ("[LAb, SIb, DO, REb, MIb, FA, SOL]");
let escalaReb = ("[REb, MIb, FA, SOLb, LAb, SIb, DO]");
let escalaSolb = ("[SOLb, LAb, SIb, DOb, REb, MIb, FA]");
let escalaDob = ("[DOb, REb, MIb, FAb, SOLb, LAb, SIb]");

//escalas menores naturales con sostenidos
let escalaLaMenor = ("[LA, SI, DO, RE, MI, FA, SOL]");
let escalaMiMenor = ("[MI, FA#, SOL, LA, SI, DO, RE]");
let escalaSiMenor = ("[SI, DO#, RE, MI, FA#, SOL, LA]");
let escalaFaSosMenor = ("[FA#, SOL#, LA, SI, DO#, RE, MI]");
let escalaDoSosMenor = ("[DO#, RE#, MI, FA#, SOL#, LA, SI]");
let escalaSolSosMenor = ("[SOL#, LA#, SI, DO#, RE#, MI, FA#]");
let escalaReSosMenor = ("[RE#, MI#, FA#, SOL#, LA#, SI, DO#]");
let escalaLaSosMenor = ("[LA#, SI#, DO#, RE#, MI#, FA#, SOL#]");

//escalas menores naturales con bemoles

let escalaReMenor = ("[RE, MI, FA, SOL, LA, SIb, DO]");
let escalaSolMenor = ("[SOL, LA, SIb, DO, RE, MIb, FA]");
let escalaDoMenor = ("[DO, RE, MIb, FA, SOL, LAb, SIb]");
let escalaFaMenor = ("[FA, SOLb, LAb, SIb, DO, REb, MIb]");
let escalaSibMenor = ("[SIb, DO, REb, MIb, FA, SOLb, LAb]");
let escalaMibMenor = ("[MIb, FA, SOLb, LAb, SIb, DOb, REb]");
let escalaLabMenor = ("[LAb, SIb, DOb, REb, MIb, FAb, SOLb]");

let option = parseInt(prompt(`Ingrese una opcion:
                        \n1. Mostrar Orden de Sostenidos.
                        \n2. Mostrar Orden de Bemoles.
                        \n3. Mostrar Escalas Mayores con Sostenidos.
                        \n4. Mostrar Escalas Mayores con Bemoles.
                        \n5. Mostrar Escalas Menores Naturales con Sostenidos.
                        \n6. Mostrar Escalas Menores Naturales con Bemoles.
                        \n7. Salir del Menu.`)
)


while(option != 7) {
    switch (option) {
        case 1:
            alert("El orden de Sostenidos es: " + ordenSostenidos);
            break;
        case 2:
            alert("El orden de Bemoles es: " + ordenBemoles)
            break;
        case 3:
            alert("Las Escalas Mayores con Sostenidos son: " + escalaDo + " " + escalaSol + " " + escalaRe + " " + escalaLa + " " + escalaMi + " " + escalaSi + " " + escalaFaSostenido + " " + escalaDoSostenido);
            break;
        case 4:
            alert("Las Escalas Mayores con Bemoles son: " + escalaFa + " " + escalaSib + " " + escalaMib + " " + escalaLab + " " + escalaReb + " " + escalaSolb + " " + escalaDob);
            break;
        case 5:
            alert("Las Escalas Menores Naturales con Sostenidos son: " + escalaLaMenor + " " + escalaMiMenor + " " + escalaSiMenor + " " + escalaFaSosMenor + " " + escalaDoSosMenor + " " + escalaSolSosMenor + " " + escalaReSosMenor + " " + escalaLaSosMenor);
            break;
        case 6:
            alert("Las Escalas Menores Naturales con Bemoles son: " + escalaReMenor + " " + escalaSolMenor + " " + escalaDoMenor + " " + escalaFaMenor + " " + escalaSibMenor + " " + escalaMibMenor + " " + escalaLabMenor);
        default:
            break;
    }
    option = parseInt(prompt(`Ingrese una opcion:
                        \n1. Mostrar Orden de orden Sostenidos.
                        \n2. Mostrar Orden de Bemoles.
                        \n3. Mostrar Escalas Mayores con Sostenidos.
                        \n4. Mostrar Escalas Mayores con Bemoles.
                        \n5. Mostrar Escalas Menores Naturales con Sostenidos.
                        \n6. Mostrar Escalas Menores Naturales con Bemoles.
                        \n7. Salir del Menu.`)     
    )    
} 
