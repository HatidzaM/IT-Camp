//NUMBERS//

//js prepoznaje samo jedan tip podatka za brojeve - number,  oni mogu biti zapisani sa ili bez decimalnog zareza

//veliki brojevi mogu biti zapisai sa exponent oznakom:
const petica = 5e6 //5000000
console.log(petica);
const br = 555e-5; //555 podeljeno sa 5000000
console.log(br)

//js sa sabiranjem decimalnih brojeva nije najbolji

// +
console.log("10"+10)//1010
console.log("10"-2)//8


//NaN (not a number) - rezervisana rec koja ukazuje da broj nije korektan
//NaN je tupa number!!
//za proveru da li je neka vrednost korektan broj se koristi !isNaN()


//infinity / -infinity  - je vrednost koju cemo da dobijemo kada rezultat premasi najveci br u js(bude veoma mali br)
const a= 25;
const b= 0;
const c= -1;
console.log(a/b);
console.log(c/b);
console.log(typeof Infinity);


// rgb(0, 255, 123)
// #12ab33

//hexadecimal numbers:  Ako su brojevi napisani prefiksom 0xFF rezultat ce biti 255
const r = 0xFF;
console.log(r) //255



//dodeljivanje vrednosti preko new - nije najbolja praksa
const k = 22;
const l = new Number(33);
console.log(typeof l); //object




//1.napraviti funkciju koja pretvara 
//km  u  m
// inch  u  cm

function kmUm(km){
    return km * 1000
}
console.log(kmUm(3.68));

const inchTOcm = (inch) => inch * 2.54;
console.log(inchTOcm(43));