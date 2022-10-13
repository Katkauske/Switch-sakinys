
let menesioSkaicius = +prompt("Noredami suzinoti menesio pavadinima iveskite skaiciu:")
alert(menesioPavadinimas(menesioSkaicius))



function menesioPavadinimas(menesioSkaicius) {
    let menesioPavadinimas;
    switch (menesioSkaicius) {
        case 1:
            menesioPavadinimas = "Menesio pavadinimas yra: Sausis";
            break;
        case 2:
            menesioPavadinimas = "Menesio pavadinimas yra: Vasaris";
            break;
        case 3:
            menesioPavadinimas = "Menesio pavadinimas yra: Kovas";
            break;
        case 4:
            menesioPavadinimas = "Menesio pavadinimas yra: Balandis";
            break;
        case 5:
            menesioPavadinimas = "Menesio pavadinimas yra: Geguze";
            break;
        case 6:
            menesioPavadinimas = "Menesio pavadinimas yra: Birzelis";
            break;
        case 7:
            menesioPavadinimas = "Menesio pavadinimas yra: Liepa";
            break;
        case 8:
            menesioPavadinimas = "Menesio pavadinimas yra: Rugpjutis";
            break;
        case 9:
            menesioPavadinimas = "Menesio pavadinimas yra: Rugsejis"
            break;
        case 10: 
            menesioPavadinimas = "Menesio pavadinimas yra: Spalis"
            break;
        case 11:
            menesioPavadinimas = "Menesio pavadinimas yra: Lapkritis"
            break;
            
        case 12:
            menesioPavadinimas = "Menesio pavadinimas yra: Gruodis";
            break;
        default:
            menesioPavadinimas = "KLAIDA!!!"
            
    }
    return menesioPavadinimas;
}