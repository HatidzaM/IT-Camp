function glavnaFunkcija (sporedna){
    console.log("ovo je glavna funkcija");
    sporedna(3,4,5);  //pozivamo je u glavnoj
}

function aritmeticka(a,b,c){  //definisemo je
    console.log(+((a+b+c)/3).toFixed(2))
}
glavnaFunkcija(aritmeticka);  //lociramo je
