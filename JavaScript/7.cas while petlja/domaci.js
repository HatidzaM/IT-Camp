//preko switch naredbe 
// console.log(new Date().getDay())
// getDay()daje vrednost 0-6

//na osnovu vrednosti koju nam daje izraz iz switch naredbe kroz keysove i eventualno default
//ispisati poruku: Danas je "0=ponedeljak","radni dan"  a ako je vikend "ugodno provedite vikend"

switch(new Date().getDay()){
    case 1:
        console.log('Danas je ponedeljak' + ', radni dan')
        break;
    case 2:
        console.log("Danas je utorak" + ", radni dan")
        break;
    case 3:
        console.log("Danas je sreda" + ", radni dan")
        break;
    case 4:
        console.log("Danas je cetvrtak" + ", radni dan")
        break;
    case 5:
        console.log("Danas je petak" + ", radni dan")
        break;
    case 6:
        console.log("Danas je subota" + ", ugodno provedite vikend")
        break;
    case 0:
        console.log(`Danas je nedelja, ugodno provedite vikend`)
        break;
}
