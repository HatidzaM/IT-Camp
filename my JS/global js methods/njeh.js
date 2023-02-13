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