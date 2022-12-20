// toString - ptrtvara bilo koji tip podatka u String

// toExponaential() - vraca string broja, zaokruzi na onoliko decimala koliki je argument

// toFixed()- vraca string broja, kojji ce biti 

// toPrecistion() 

//valueOf() vraca vrednost neke promenjiljive

// valueOf() & toString() metode vaze za sve tipove podataka!!





//1. napraviti funkciju koja prima jedan argument(broj) i vraca poruku da li je dati argument palindrom

const palindrom=function(broj){
    let sbroj = broj.toString();
    let novi = "";
    for(let i = sbroj.length-1; i >= 0; i--){
        novi += sbroj[i]
    }
    if(sbroj === novi){
        return `jeste` }
    else
    { return `nije` }
}
console.log(palindrom(12621));
console.log(palindrom(12324));



//2. funkcija koja ocekuje trocifren broj, a vraca dvocifren(iskljucujuci cifru decetica)

//1.nacin🫶
function dvocifren(broj){
    trocif = broj.toString();
    dvocif = trocif.substring(0,2);

    if(trocif.length !== 3){
        return `nije unet trocifren broj`;
    }
    else{
        return dvocif
    }
}
console.log(dvocifren(123));
console.log(dvocifren(12233));


//2.nacin
function dvocifren2(broj){
    const duzina = broj.toString().length;
    const stringbr = broj.toString();
    if(duzina !== 3){
        return `argument mora imati 3 cifre`
    }
    else{
        const novibr = stringbr.replace(stringbr[1], "");
        return +novibr
    }
}
console.log(dvocifren2(133));
console.log(dvocifren2(12233));





//GLOBAL JS METHODS//🤙
//mogu biti primenjene na bilo koji tip podatka

//1. Number() - vraca broj konvertovan iz argumenta
console.log(Number("  23  ")); //23 krajnji razmaci ne prave problem 
console.log(Number("23+5")); //NaN
console.log(Number("23 5")); //NaN
console.log(Number("adf")); //NaN
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Number([])); //-1
console.log(Number({})); //NaN

//2. parseInt() - analizira argument i vraca ceo broj ako je moguce
console.log(parseInt("  23  ")); //23 
console.log(parseInt("23+5")); //23
console.log(parseInt("23 5")); //23(razmaci su dozvoljeni ali se uzima u obzir samo 1. broj koji se pojavljuje)
console.log(parseInt("23,78")); //23
console.log(parseInt("23.78")); //23(odstranjuje decimalni ostatak)
console.log(parseInt("adf23 5")); //NaN
console.log(parseInt("adf")); //NaN
console.log(parseInt(true)); //NaN
console.log(parseInt(false)); //NaN
console.log(parseInt([])); //NaN
console.log(parseInt({})); //NaN

//3. parseFloat() - analizira argument i vraca realni broj sa decimalnim zapisom ako je moguce
console.log(parseFloat("  23.55  ")); //23.55
console.log(parseFloat("23+5")); //23
console.log(parseFloat("23 5")); //23(razmaci su dozvoljeni ali se uzima u obzir samo 1. broj koji se pojavljuje)
console.log(parseFloat("23,78")); //23
console.log(parseFloat("23.25 56")); //23.25
console.log(parseFloat("23.78")); //23.78(odstranjuje decimalni ostatak)
console.log(parseFloat("adf23 5")); //NaN
console.log(parseFloat("adf")); //NaN
console.log(parseFloat(true)); //NaN
console.log(parseFloat(false)); //NaN
console.log(parseFloat([])); //NaN
console.log(parseFloat({})); //NaN