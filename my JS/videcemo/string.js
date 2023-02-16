// 1.	(20) Uneti string se šifruje tako što se zamenjuje redosled znacima u stringu. Prvi i drugi zamene mesta, zatim 3. i 4. zamene mesta itd. Npr. za string 'Pera ima devojku', treba dobiti 'ePari amd vejouk'. Ako string ima neparan broj znakova, poslednji znak se ne dira.

function first(par){
    let novaRecenica = "";
    for (let i = 0; i < par.length; i++){
        if (par.length % 2 !== 0 && i === par.length - 1){
            novaRecenica += par[i];
        }
        else if (i % 2 === 0){
            novaRecenica += par[i + 1];
        }
        else if (i % 2 !== 0){
            novaRecenica += par[i - 1];
        }
    }
return novaRecenica;
}
console.log(first("Pera ima devojku."));
// Pera ima devojku
// ePari 