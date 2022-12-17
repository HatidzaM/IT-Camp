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
console.log(number("  23  ")); // 23 krajnji razmaci ne prave problem 
console.log(number("23+5")); //NaN
console.log(number("23 5")); //NaN
console.log(number("adf")); //NaN
console.log(number(true)); //1
console.log(number(false)); //0
console.log(number([])); //-1
console.log(number({})); //NaN
//2. 