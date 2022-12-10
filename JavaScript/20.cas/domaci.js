//proveriti da li je uneti string palindrom(isti ako se cita odpozadi)


// 1.POKUSAJ----------------------------------------------------NE
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
// console.log(palindrom("oko"));



// ISPROBAVANJE--------------------------------------------------
// let rece="123";
// console.log(rece.substring(0,3));
// let polaDuzine;
// polaDuzine = Math.ceil(rece.length /2);
// console.log(polaDuzine);
// console.log(rece.substring(0,polaDuzine-1)+`prvo`);
// console.log(rece.substring(polaDuzine,rece.length)+`drugi`);



//--------------------------------------------------------NE
const palindrom2 = function(rec){
        let polaDuzine;
        if(rec.length % 2 === 0){
        d1 = rec.substring(0,polaDuzine);
        d2 = rec.substring(polaDuzine,rec.length);
        if(d1===d2){return `data rec jeste palindrom :)`}
        else{return `data rec nije palindrom :(`}
        }
        else{
        polaDuzine = Math.ceil(rec.length /2);
        const deo1 = rec.substring(0,polaDuzine-1);
        const deo2 = rec.substring(polaDuzine,rec.length);
        if(deo1 === deo2){return `data rec jeste palindrom :)`}
        else{return `data rec nije palindrom :(`}
    }
}
// console.log(palindrom2("oko"));
// console.log(palindrom2("kook"));
// console.log(palindrom2("hfjsd"));



//-----------------------------------------------------------NE
const palindrom3 = function(rec){
    if(rec.slice(0,rec.length) === rec.slice(-rec.length,0)){
        return `jeste`
    }
    else{return `nije`}
}
// console.log(palindrom3("okko"));



//-------------------------------------------------TACNO
const palindrom4 = function(rec){
    let novarec = "";
    for(let i = rec.length-1; i >= 0; i--){
        novarec += rec[i]
    }//return novarec; obrnuto
    if(rec === novarec) { return `jeste` }
    else { return `nije` }
}
console.log(palindrom4(`aha`));
console.log(palindrom4(`anavolimilovana`));
console.log(palindrom4(`nastd`));
