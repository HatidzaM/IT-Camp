//  Array iteration  //
//array iteration metode prolaze kroz svaki element niza

// forEach() poziva callback funkciju za svaki element niza    
//moze da ima 3 parametra (element, index, ceo niz)
const  niz = ["tarik", "hamed", "emin", "bakir", "dzenan"];

niz.forEach((element)=>{
    console.log(element)
});

niz.forEach((element, index)=>{
    console.log(`${element} se nalazi na ${index} mestu u nizu`)
});

niz.forEach((element, index, all)=>{
    console.log(`${element} se nalazi na ${index} mestu u nizu. ceo niz je ${all}`)
});


//array.map() metoda kreira novi niz ,iste duzine kao originalni, sa logikom predstavljenom unutar callback funkcije unutar date metode

//preko petlje napraviti novi niz koji ce imati sve elemente originalnog niza
let noviniz=[];
for(let student of niz){
    noviniz.push(student) 
}
console.log(noviniz);

// const niz3 = niz.map(function(student){
//     return student
// });
const niz3 = niz.map((student)=>student);

//preko map() metode napraviti novi niz gde ce imena svih studenata pocinjati velikim slovom

const niz4 = niz.map((student)=> student[0].toUpperCase() + student.slice(1));
console.log(niz4);



const brojevi = [-5, 3, 4, 5, -5];