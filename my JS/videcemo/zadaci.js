x = 26;

console.log(x);
// var x; kasnija deklaracija je moguca

// let x; kasnija deklaracija nije moguca
// const x; kasnija deklaracija nije moguca

const myFunc = () => {
  return `callback`;
};

const func = (func1) => {
  func1();
  return `main func`;
};

func(myFunc);

// 1.	(20) Uneti string se šifruje tako što se zamenjuje redosled znacima u stringu. Prvi i drugi zamene mesta, zatim 3. i 4. zamene mesta itd. Npr. za string 'Pera ima devojku', treba dobiti 'ePari amd vejouk'. Ako string ima neparan broj znakova, poslednji znak se ne dira.

function first(par) {
  let novaRecenica = "";
  for (let i = 0; i < par.length; i++) {
    if (par.length % 2 !== 0 && i === par.length - 1) {
      novaRecenica += par[i];
    } else if (i % 2 === 0) {
      novaRecenica += par[i + 1];
    } else if (i % 2 !== 0) {
      novaRecenica += par[i - 1];
    }
  }
  return novaRecenica;
}

console.log(first("Pera ima devojku."));
// Pera ima devojku
// ePari

// There are array of objects with all products that someone bought. In product object we got name, price per unit, and amount of units. Your job is to loop throught array, and make new array of objects with two key-value pairs name and total price for that product.
// After you did the job with new array, you need to sum all prices of every product and return total sum value, and add a FIXED 320 shipping costs.
// After all of that you should print in console following statement:
// 'You got ${num of products} in cart, shipping cost is ${shipping cost}, your total is ${total}.'

const CART_DATA = [
  {
    id: 1,
    name: "Hawai Shirt",
    price: 30,
    amount: 2,
    categorty: "summer",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Adidas Slippers",
    price: 35,
    amount: 1,
    categorty: "summer",
    rating: 4.5,
  },
  {
    id: 6,
    name: "White T-Shirt",
    price: 15,
    amount: 4,
    categorty: "summer",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Summer hat",
    price: 7.5,
    amount: 3,
    categorty: "summer",
    rating: 40,
  },
];

const putovanje = (karta) => {
  const fiksni_trosak = 320;
  const kolicina_karti = karta.length;
  const novi = karta.map((el) => {
    return {
      name: el.name,
      totalPrice: el.price * el.amount,
    }
  });
  const sum = novi.reduce(
    (prev, curr) => prev + curr.totalPrice,fiksni_trosak
  );
  return `You got ${kolicina_karti} in karta, shipping cost is ${fiksni_trosak}, your total is ${sum}.`;
}
console.log(putovanje(CART_DATA));