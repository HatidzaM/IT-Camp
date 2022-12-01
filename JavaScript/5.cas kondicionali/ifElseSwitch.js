// KONDICIONALI

// if(uslov1){}
// else if(uslov2){}
// else{}


const godine = Number(prompt("unesite broj godina:"))
if(godine>=18){
    console.log("punoletni ste")
}
else if(godine<0){
    console.log("broj godina ne moze biti negativan")
}
else if(godine<18){
    console.log("maloletni ste")
}
else{
    console.log("niste uneli broj")
}




const Godine = Number(prompt("unesite broj godina:"))
if(Godine<12){
    console.log("vi ste decijeg doba")
}
else if(Godine>=12 && Godine<18){
    console.log("vi ste maloletni")
}
else if(Godine>=18 && Godine<40){
    console.log("vi ste punoletni")
}
else if(Godine>=40){
    console.log("vi ste zrela osoba")
}
else{
    alert("niste uneli broj godina")
}





// switch(izraz){
//     case x:
//         //blok koda koji se izvrsava u slucaju da je izraz = x
//         break;
//     case y:
//         //blok koda koji se izvrsava u slucaju da je izraz = y
//         break;
//     default:
//         //blok koda koji se izvrsava u slucaju da izraz nije jednak ni x, ni y }

const broj = +prompt("unesite broj izmedju 12 i 15:")
switch(broj){
    case 12:
        console.log("korisnik je uneo broj 12")
        break;
    case 13:
        console.log("korisnik je uneo broj 13")
        break;
    case 14:
        console.log("korisnik je uneo broj 14")
        break;
    case 15:
        console.log("korisnik je uneo broj 15")
        break;
    default:
        console.log("ne moze.")
}