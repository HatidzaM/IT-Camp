//2 realna broja
//u prvom redu data je zapremina flase u litrima kao pozitivan realan broj na do 3 decimale
//flasa i bure


function limunada(p1, p2){
    const ukupnoFlasa = Math.floor(p2 / p1);
    if(p1>5 || p1<=0 || isNaN(p1)){
        return "yapremina flase mora da bude izmedju 0 i 5 litara"
    }
    else if(p2>50 || p2<=0 || isNaN(p2)){
        return "nije ispravno"
    }
    else{
        return ukupnoFlasa + "flasa"
    }
}
console.log(limunada(2,10));
console.log(limunada(6,50));