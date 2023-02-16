function glavnaFunkcija (sporedna){
    console.log("ovo je glavna funkcija");
    sporedna(3,4,5);
}

function aritmeticka(a,b,c){
    console.log(+((a+b+c)/3).toFixed(2))
}
glavnaFunkcija(aritmeticka);
