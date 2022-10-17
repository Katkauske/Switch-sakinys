alert("Sveiki! Suzinokite koki ivertinima gavote!")
let balas = +prompt("Iveskite gauta bala")
alert(konvertavimas(balas))


function konvertavimas(balas){
    let atsakymas;

    switch (true) {
        case balas >= 90:
            atsakymas = "Sveikiname! Jusu ivertinimas yra A!" 
            break;
        case balas >= 80:
            atsakymas = "Sveikiname! Jusu ivertinimas yra B!"
            break;
        case balas >= 70:
            atsakymas = "Jusu ivertinimas yra C!"
            break;
        case balas >= 60:
            atsakymas = "Jusu ivertinimas yra D!"
            break;
        case balas >= 50:
            atsakymas = "Jusu ivertinimas yra E!"
            break;
        
        case balas <= 39:
            atsakymas = "Jusu ivertinimas yra F!"
            break;

            default:
                  "Duomenys ivesti neteisingai"
    }
    return atsakymas;

}