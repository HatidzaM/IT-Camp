//napisati funkciju koja nam vraca reci sa najmanjim brojem slova


function funkcija (niz){
    for(let i=0; i<niz.length; i++){
        for(j=i+1; j<niz.length; j++){
            if(niz[i] > niz[j]){
                pom = niz[j];
                niz[j] = niz[i];
                niz[j] = pom
            }
        }
    }
    console.log(niz)
}
funkcija(["ab","a","abc"]);




