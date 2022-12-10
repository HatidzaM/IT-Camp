//1. za uneti string A kreirati novi string B koji se sastoji od 
//prve i poslednje reci sa razmakom. 
//A = svuda podji, kuci dodji.  B = Svuda dodji.

function kreiranje(recenica){
    const pozicija1razmaka = recenica.indexOf(" ");
    const prvaRec = recenica.slice(0,pozicija1razmaka);
    const pozicijaZadnjegRazmaka = recenica.lastIndexOf(" ");
    const zadnjaRec = recenica.slice(pozicijaZadnjegRazmaka + 1);
    const novaRecenica = prvaRec.concat(" ",zadnjaRec);
    return novaRecenica;
}
console.log(kreiranje("hocemo dve reci."));



//2. za uneti string A, treba izdvojiti podstring B, koji pocinje od unete pozicije N i ima M znakova
//npr. za string `pera ima devojku` N=6 i M=7, dobija se B=`ima dev`

const podString = (string, pocetak, duzina) => {
    const noviString = string.substr(pocetak, duzina);
    return noviString
}
console.log(podString("recenica kojoj cemo uneti nekoliko karaktera.",7,6));



//3. unosi se string A i znak Z. kreirati novi string B koji se dobija tako sto iz unetog stringa izbacuje svaka pojava znaka Z.
//npr. za unet string "madagaskar" i znak "a", dobijamo rezultat "mdgskr"

function izbacivanje(rec, znak){
    // let znak = "";
    const novi = rec.replace(/znak/g, "")
    return novi
}
console.log(izbacivanje("madagaskar","a"));