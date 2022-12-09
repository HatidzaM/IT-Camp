//proveriti da li je uneti string palindrom(isti ako se cita odpozadi)

const palindrom = function(rec){
    brojac = 0;
    for(let i=0; i<rec.length; i++){
        brojac++
    }// return brojac
    if(brojac % 2 === 0){
        return `data rec nije palindrom :(`
    }
    else{
        let polaDuzine;
        polaDuzine = Math.ceil(rec.length /2);
        const deo1 = rec.substring(0,polaDuzine-1);
        const deo2 = rec.substring(polaDuzine,rec.length);
        if(deo1 === deo2){
            return `data rec jeste palindrom :)`
        }
    }
}
console.log(palindrom("oko"));



// isprobavanje
// let rece="123";
// console.log(rece.substring(0,3));
// let polaDuzine;
// polaDuzine = Math.ceil(rece.length /2);
// console.log(polaDuzine);
// console.log(rece.substring(0,polaDuzine-1)+`prvo`);
// console.log(rece.substring(polaDuzine,rece.length)+`drugi`);
