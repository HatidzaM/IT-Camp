const person = {
    firstname: "bakir",
    lastname: "ujkanovic",
    age: 19
}
const person2 = person;

const person3 = {...person, firstname:"hamed"};
console.log(person3);


//1.
const niz1 = [1,2,3,4,5,6,7,8];
const niz2 = [2,4,5,6,8,10];

function nizovi(niz1,niz2){
    // const niz3 = [];
    const pomocni = niz1.filter((el)=> !niz2.includes(el))
    const pomocni2 = niz2.filter((el)=> !niz1.includes(el))
    // return{
    //     pomocni, //pomocni:pomocni,
    //     pomocni2
    // }
    const treci = [...pomocni, ...pomocni2];
    treci.sort((a,b) => a-b)
    return treci
}
console.log(nizovi());



//  2. Zadatak
// Napraviti funkciju koja ispituje neki niz (argument).
// Ako produkt ima u zalihama vise od 20 treba:
// Treba datom produktu smanjiti cenu za 20%
// Ako produkt ima u zalihama vise od 40 treba:
// Treba datom produktu smanjiti cenu za 40%
// U slucaju da u zalihama ima 20 i manje kolicine,
// cena se ne menja.

const products = [
    {
      id: 1,
      name: "ARSENAL 22/23 HOME JERSEY",
      price: 50,
      imgUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/450ddf1b5943474fa472ae25009dfed0_9366/ARSENAL_22-23_HOME_JERSEY_Y_Red_HA5339_01_laydown.jpg",
      currency: "EUR",
      quantity: 41,
    },
    {
      id: 2,
      name: "ARSENAL CONDIVO 22 TRAINING TOP",
      price: 65,
      imgUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/32f9a996849147b284c1ae94009678a1_9366/Arsenal_Condivo_22_Training_Top_Blue_HC1252_01_laydown.jpg",
      currency: "EUR",
      quantity: 12,
    },
    {
      id: 3,
      name: "ARSENAL BEANIE",
      price: 23,
      imgUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8589fb63d02499db805ae7a00cf5273_9366/Arsenal_Beanie_Black_HM9965_01_standard.jpg",
      currency: "EUR",
      quantity: 7,
    },
    {
      id: 4,
      name: "ARSENAL ANTHEM JACKET",
      price: 120,
      imgUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2db81ab8d14d4817a659ae8c01155d2e_9366/Arsenal_Anthem_Jacket_Blue_HF4030_21_model.jpg",
      currency: "EUR",
      quantity: 36,
    },
    {
      id: 5,
      name: "ARSENAL TRAVEL HOODIE",
      price: 85,
      imgUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/44d076827f3d4ea08c6bae85012f97bc_9366/Arsenal_Travel_Hoodie_Black_HF4031_01_laydown.jpg",
      currency: "EUR",
      quantity: 0,
    },
    {
      id: 6,
      name: "ARSENAL FC 93-94 JERSEY",
      price: 85,
      imgUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/edf2037f434d46479c96adbd0085ce75_9366/Arsenal_FC_93-94_Jersey_Yellow_HK5626_01_laydown.jpg",
      currency: "EUR",
      quantity: 68,
    },
    {
      id: 7,
      name: "ARSENAL DNA CAP",
      price: 23,
      imgUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/80b51f1feee344479c1eae760142da56_9366/Arsenal_DNA_Cap_Black_HM9968_01_standard.jpg",
      currency: "EUR",
      quantity: 4,
    },
    {
      id: 8,
      name: "ARSENAL TRAVEL BACKPACK",
      price: 65,
      imgUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c7371783770f41e98afeae9a00a5a2c1_9366/Arsenal_Travel_Backpack_Black_HM9967_01_standard.jpg",
      currency: "EUR",
      quantity: 14,
    },
  ];

const prolaz = function(q){
    const novi = q.map((el)=>{
        if(el.quantity > 40){
            el.price *= 0.6
            return el
        }
        if(el.quantity > 20){
            el.price *= 0.8
            return el
        }
        else{
            return el
        }
    });
    return novi
}
console.log(prolaz(products));



// 
