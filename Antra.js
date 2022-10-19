//Sukurkite funkciją, kuri gauna mėnesio skaičių,
//o grąžina to mėnesio dienų skaičių. Galite naudoti tą patį veiksmą keliems case variantams. 
//Panaudokite funkciją su vartotojo įvedamais duomenimis. 
//(Galite susikurti papildomą funkciją, kuri rezultatą išveda suformuluotai/gražiau)
alert("Noredami suzinoti menesio dienu skaiciu, kitame langelyje iveskite menesio skaiciu!")
let menesioSkaicius = +prompt("Iveskite menesio skaiciu: ")
alert( menesioPavadinimas(menesioSkaicius) + menesioDienuSkaicius(menesioSkaicius))

function menesioPavadinimas(menesioSkaicius) {

switch (menesioSkaicius) {
    case 1:
        menesioPavadinimas = "Menesio pavadinimas yra: Sausis.";
        break;
    case 2:
        menesioPavadinimas = "Menesio pavadinimas yra: Vasaris.";
        break;
    case 3:
        menesioPavadinimas = "Menesio pavadinimas yra: Kovas.";
        break;
    case 4:
        menesioPavadinimas = "Menesio pavadinimas yra: Balandis.";
        break;
    case 5:
        menesioPavadinimas = "Menesio pavadinimas yra: Geguze.";
        break;
    case 6:
        menesioPavadinimas = "Menesio pavadinimas yra: Birzelis.";
        break;
    case 7:
        menesioPavadinimas = "Menesio pavadinimas yra: Liepa.";
        break;
    case 8:
        menesioPavadinimas = "Menesio pavadinimas yra: Rugpjutis.";
        break;
    case 9:
        menesioPavadinimas = "Menesio pavadinimas yra: Rugsejis."
        break;
    case 10: 
        menesioPavadinimas = "Menesio pavadinimas yra: Spalis."
        break;
    case 11:
        menesioPavadinimas = "Menesio pavadinimas yra: Lapkritis."
        break;
        
    case 12:
        menesioPavadinimas = "Menesio pavadinimas yra: Gruodis.";
        break;
    default:
        menesioPavadinimas = "KLAIDA!!!"
}
return menesioPavadinimas;
}

function menesioDienuSkaicius(menesioPavadinimas){
switch(menesioPavadinimas){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        menesioDienuSkaicius = " Sis menuo turi 31 diena."
        break;
    case 2:
        menesioDienuSkaicius = " Sis menuo turi 29 dienas."
        break;    
    case 4:
    case 6:
    case 9:
    case 11:
        menesioDienuSkaicius = " Sis menuo turi 30 dienu."
        break;        
    default:
            menesioDienuSkaicius = "!!"  
    }
    return  menesioDienuSkaicius;
    

}
