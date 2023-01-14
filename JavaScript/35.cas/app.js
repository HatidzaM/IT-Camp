// *4. Napraviti novi niz koji ce sve negativne brojeve pomnoziti sa (-1), a pozitivne kvadrirati, ako se neki element pojavljuje vise puta u originalnom nizu , na svako sledece pojavljivanje ce se u novom nizu dodati element "ovde je bio duplikat"
const brojevi = [-5, 4, 3, 10, 14, -5];

const second=(arr)=>{
    const newarr = [];
    for(let i=0; i<= arr.length; i++){
        if(arr.slice(0, i).includes(arr[i])){
            newarr.push("ovde je bio duplikat")
        }
        else if(arr[i]<0){
            newarr.push(-arr[i])
        }
        else{
            newarr.push(arr[i]**2)
        }
    }
    return newarr
}

console.log(second([-5, 4, 3, 10, 14, -5, 4]));



// kvadrirati one brojeve koje imaju index 0,3,5
const niz = [-5, 4, 3, 10, 14, 6, 7];
const novi = niz.map((element, index)=>{
    if(index === 0 || index === 3 || index === 5){
        return element**2
    }
    else return element
}
    // function kvadriranje(ell){
    //     for(let i=0;i<=niz.length;i++){
    //         if(ell[i]===0 && ell[i]===3 && ell[i]===5){
    //             return ell**2
    //         }
    //     }
    // }
);
console.log(novi);



//napraviti novi niz koji sadrzi kvadrate parnih elemenata postojeceg niza. dok za neparne elemente treba vratiti aritmeticku vrednost prethodnog elementa , datog i narednog.

const noovi = novi.map((ell,index,all)=>{
    if(ell%2===0){
        return ell**2
    }
    else{
        return +((all[index-1] + ell + all[index+1])/3).toFixed(2)
    }
});
console.log(noovi);