//stringovi

//stingovi su immutable (nepromenljive)

// METODE (funkcije koje promenjujemo za datu promenljivu)

//length nam sluzi za dobijanje duzine striga
const rec = "lol pop";
console.log(rec.length);

//pristupanje odredjenom karakteru ide preko indexa(ukupna duzina stringa -1)
console.log(rec[4]);


//Koriscenje \ (backslash) 
//string zapisujemo na 3 nacina:
//rec koja trb da se nadje pod navodnicima mora biti pod obicnim ako je string okruzen duplim ili obrnuto
//1. " "
const string = "danas je 'padala' kisa"
// \ 
//2. ' ' 
const string2 = 'danas je \"padala\" kisa'
//3. ` `
const string3 = `danas je padala kisa`

//primena  \(backslash) na kraju reda:
//sa \ ne mozemo nastaviti liniju koda, vec samo string
const string5 = "hduhduidsudugdififgfiysgyfisgfyis. \
kjkahkajdhjkhdkdah"
const string4 = "hduhduidsudugdififgfiysgyfisgfyis. \nkjkahkajdhjkh\ndkdah"
console.log(string4)

//postoje 3 metode za ekstraktovanja (uzimanje dela stringa):
//1. slice (start, end) end nije ukljucen u opseg
//2. substring (start, end)  razlika od slice - ne prihvata negativne indexe
//3. substr (start, length)

const string6 = "onda pa i fil"
console.log(string6.slice(0,4))
console.log(string6.slice(-6, -1))
console.log(string6.substring(0,9))
console.log(string6.substr(0,8))