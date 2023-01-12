//   callback funkcije   //

function glavnaFunkcija (funkc){
    console.log("radnja unutar glavne funkcije");
    funkc();
    console.log("kraj glavne funkcije")
}

function callback(){
    console.log("radnja unutar callback funkcije");
}

glavnaFunkcija(callback);


//napraviti glavnu funkciju unutar koje ce se desiti ispis sta ona predstavlja, a celu stvar ce da izvrsi callback funkcija . Callback funkcija ima 2 parametra i ispisuje rezultat par1 stepenovan par2

function glavnaF (callbek){
    console.log("prvi broj stepenovan drugim je:")
    callbek(2,3);//ovde je pozivamo
}

function callbek(par1, par2){
    console.log(par1**par2);
}

glavnaF(callbek);
