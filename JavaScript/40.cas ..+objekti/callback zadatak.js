// Napraviti glavnu funkciju koja ispisuje poruku da se radi o glavnoj funkciji, ali ispod toga neka se izvrsi pozivanje callback funkcije koja ima zadatak da izracuna aritmeticku sredinu 3 broja koji predstavljaju argumente te callback funkcije.

function glavnaFunkcija (sporedna){
    console.log("ovo je glavna funkcija");
    sporedna(3,4,5);
}

function aritmeticka(a,b,c){
    console.log(+((a+b+c)/3).toFixed(2))
}
glavnaFunkcija(aritmeticka);

