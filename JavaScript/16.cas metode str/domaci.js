//napraviti funkciju koja trazi od korisnika da unese neku recenicu, zatim funkcija vraca datu recenicu u vise oblika (spojenu u  jedan string)
//1. recenicu ispisanu velikim slovima
//2. malim slovima
//3. pola recenice ispisano velikim slovima, pola recenice malim
//4. ako se u recenici nadje rec 'skola' neka bude zamenjena recju 'fakultet'
//5. neka bude ispisano prvih 10 karaktera unete recenice
//6. neka bude ispisano poslednjih 10 karaktera unete recenice


const funkcija = function(recenica){
    recenica = +prompt("unesite neku recenicu:");

    let polaDuzine = recenica.lenght % 2 === 0
    ? recenica.lenght / 2
    : Math.ceil(recenica.lenght / 2);
    // const isecak = recenica.slice(polaDuzine, recenica.length);

    const prva = recenica.toUpperCase();
    const druga = recenica.toLowerCase();
    const prvaPol = recenica.slice(0,polaDuzine).toUpperCase();
    const drugaPol = recenica
    .substring(polaDuzine,recenica.lenght)
    .toLowerCase();
    const treca = prvaPOl.concat(drugaPol);
    const cetvrta = recenica.replace(/skola/gi, "fakultet");
    const peta = recenica.substr(0, 10);
    const sesta = recenica.lenght(-10);

    return(
        prva.concat("\n", druga, "\n", treca, "\n", cetvrta, "\n", peta, "\n", sesta)
    );
}
console.log(funkcija())

