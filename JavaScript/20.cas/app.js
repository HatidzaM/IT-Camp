//1.Prebrojati koliko ima malih slova u unetom stringu.
function kolikoMalih(recenica){
    let brojac = 0;
    for(let i = 0; i< recenica.length; i++){
        if(recenica[i]===recenica[i].toLowerCase() && recenica[i] !== " "){
            brojac++
        }
    }
    return brojac
}
console.log(kolikoMalih("da li BROJI razmake, razmak se racuna kao malo slovo"));



//2. ispisati da li u unetom stringu ima vise malih ili velikih slova. slova prpadaju eng.

function kojihVise(recenica){
    let malibrojac = 0;
    let velikibrojac = 0;
    for(let i=0; i<recenica.length; i++){
        if(recenica[i]!==recenica[i].toUpperCase()){
            malibrojac++
        }
        else if(recenica[i]!==recenica[i].toLowerCase()){
            velikibrojac++
        }
    }
    if(malibrojac > velikibrojac){
        return `malih ima ${malibrojac} i njih je vise`
    }
    else if(malibrojac < velikibrojac){
        return `velikih ima ${velikibrojac} i njih ima vise`
    }
    else{
        return `u poslatom stringu ima jednak broj malih i velikih slova.`
    }
}
console.log(kojihVise("jajHAHAjaj"));



//3. sva velika slova treba svesti na mala. "jHHo" -> "jhho"

const umala = (recenica) => {
    let umm = "";
    for(let i = 0; i < recenica.length; i++){
        umm += recenica[i].toLowerCase();
    }
    return umm
}
console.log(umala("HJHSHjj"))


const umala2 = (recenica) => recenica.toLowerCase();
console.log(umala2("LMAO"));



//4. pronaci poziciju poslednjeg razmaka

function lastSpace(recenica){
    const index = recenica.indexOf(" ");
    if(index === -1){
        return `u datom stringu nema razmaka`
    }
    return `poslednji razmak se nalazi na ${index} mestu`
}
console.log(lastSpace("sta ako nema razmaka"));
console.log(lastSpace("nema"));



//5. ispisati duzinu prve reci unetog stringa

const duzina = (recenica) => {
    const index = recenica.search(" ");
    return `prva rec ima ${index} karaktera`
}
console.log(duzina("sir to lo"));


const duzina2 = function(recenica){
    let brojac = 0;
    for(let i = 0; i<recenica.length;i++){
        if(recenica[i] === " "){
            break
        }
        else{
            brojac++
        }
    }
    return `prva rec ima ${brojac} karaktera`
}
console.log(duzina2("sira to lo"));



//6. iz unetog strenga treba izdvojiti n znakova sa leve strane npr. "ja sam lol" i n=4 => "ja s"
//ako je n vece od duzine recenice dobija se ceo string

const prvihN = (recenica, n)=>{
    if(n > recenica.length){
        return recenica
    }
    else{
        return recenica.substr(0,n)
    }
}
console.log(prvihN("ja sam lol", 4));
console.log(prvihN("vraca prvih 10 karaktera.", 10));
console.log(prvihN("vraca celu recenicu.", 100));

