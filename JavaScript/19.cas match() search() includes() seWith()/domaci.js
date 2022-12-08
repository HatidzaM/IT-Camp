//svaki poklon sadrzi tacno k cokoladica. Ako na raspolaganju imamo ukupno n cokoladica, koliko poklona je moguce zapakovati?
// (1<=k<=20)broj cokoladica u jednom poklonu
// (0<=n<=1000)ukupan broj cokoladica



function poklon(k,n){
    let brpoklona = Math.floor(n/k);
    if(k<1 || k>20 || isNaN(k)){
        return `broj cokoladica u poklonu mora biti manji od 20.`
    }
    else if(n<0 || n>1000 || isNaN(n)){
        return `na raspolaganju imate 1000 cokoladica.`
    }
    else{
        return `mozete spakovati ${brpoklona} poklona sa ${n} cokoladica.`
    }
}
console.log(poklon(4,19));