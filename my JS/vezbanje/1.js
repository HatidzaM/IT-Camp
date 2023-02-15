// kvadrirati one brojeve koje imaju index 0,3,5

const niz = [1,2,3,4,5];
const novi = niz.map((el,index)=>{
    if(index===0 || index===3 || index===5){
        return el**2
    }
    else return el
})
console.log(novi);



//napraviti novi niz koji sadrzi kvadrate parnih elemenata postojeceg niza. dok za neparne elemente treba vratiti aritmeticku vrednost prethodnog elementa , datog i narednog.

const niz2 = [1,2,3,4,5,6,7,8];
const novi2=niz2.map((el,index,arr)=>{
    if(el%2===0){
        return el**2
    }
    else{
        return +((arr[index-1]+arr[index]+arr[index+1])/3).toFixed(2)
    }
})
console.log(novi2);