// 1. Pomocu map() metode napraviti novi niz stringova ciji ce elementi da budu ispisani velikim slovima.
const oh = 
    [`But I'm afraid, I'm scared of those romantic words, you see?`,
    `Ain't it ironic how those are just the songs I sing about?`,
    `My lovely, do you really love me?`];
const OH = oh.map((el)=> el.toUpperCase());
console.log(OH);


// 2. Napraviti novi niz koji sadrzi kvadrate elemenata postojeceg niza:
const niz = [2,3,4,5,6];
const kvadrati = niz.map((el)=>el**2);
console.log(kvadrati);


// 3. Napraviti novi niz koji sadrzi kvadratne korene elemenata postojeceg niza.
const koreni = niz.map((el)=>Math.sqrt(el));
console.log(koreni);


// 4. Napraviti novi niz koji ce sve negativne brojeve pomnoziti sa (-1), a pozitivne kvadrirati.
const brojevi = [-5, 4, 3, 10, 14, -5];
const novi = brojevi.map(
    function(broj){
        if(broj>=0){
            return broj**2
        }
        else{
            return broj*(-1)
        }
    }
);
console.log(novi);