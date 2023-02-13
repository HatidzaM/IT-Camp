//slice (start, end) =            end nije ukljucen u opseg
//substring (start, end) =        isto al ne prihvata negativne indexe
//substr (start, length)          !!do koliko je dug

//replace('ovo', 'sa ovim') =     menja samo first match
// .replace(/ovo/g, 'sa ovim')    g = global        
// .replace(/OvO/gi, 'sa ovim')   i = insensitive   

// charAt(index) =                vraca karakter nekog stringa sa poslatim indexom. - ""
// charCodeAt(index) =            vraca kod nekog stringa sa poslatim indexom.
// string[index] =                razlika od charAt() - undefined


//toUpperCase() 
//toLowerCase()

//concat() =                     spaja
//trim() =                       brise razmake sa obe strane stringa
//split() =                      vraca niz koji se splita po poslatom karakter
// indexOF() =                   vraca poziciju  - -1  +2.start
//lastIndexOF() =                vraca poziciju zadnjeg pojavljivanja
// search() =                    daje nam poziciju(index) nekog stringa
// match () =                    vraca niz.
// includes() =                  vraca boolean  +2.start
//startWith() & endsWith() =     vracaju boolean

















const funkcija = function(recenica){
    let polaDuzine = recenica.lenght % 2 === 0
    ? recenica.lenght / 2
    : Math.ceil(recenica.lenght / 2);

    const prva = recenica.toUpperCase();
    const druga = recenica.toLowerCase();
    const prvaPOl = recenica.slice(0,polaDuzine).toUpperCase();
    const drugaPol = recenica.substring(polaDuzine,recenica.lenght).toLowerCase();
    const treca = prvaPOl.concat(drugaPol);
    const cetvrta = recenica.replace(/skola/gi, "fakultet");
    const peta = recenica.substr(0, 10);
    const sesta = recenica.slice(-10);

    return(
        prva.concat("\n", druga, "\n", treca, "\n", cetvrta, "\n", peta, "\n", sesta)
    );
}
console.log(funkcija("dokle ce ova skola da ubija u pojam"));