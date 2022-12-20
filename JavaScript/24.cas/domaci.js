//3.napraviti funkciju koja ocekuje cetvorocifren broj, a vraca broj kojem su zamenjene  prva i treca cifra i  druga i cetvrta
//4752  (0123) | 5247  (2301)

function cetvorocifren(broj){
    const duzina = broj.toString().length;
    const stringbr = broj.toString();
    if(duzina !== 4 || isNaN(stringbr)){
        return `broj mora imati 4 cifre`
    }
    else{
        const prvideo = stringbr.slice(0,2);
        const drugideo = stringbr.slice(2);
        const novibr = drugideo.concat(prvideo);
        return +novibr
    }
}
console.log(cetvorocifren(1234));
console.log(cetvorocifren(4752));