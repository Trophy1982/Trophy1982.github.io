let napiHomerseklet = [-2, 19, 23, 25, 28, 16, 10];
//let nap = document.querySelector("select[name='select1']");
let nap = 4;
hanyfoklesz(nap);
maximum();
minimum();
atlag();

function hanyfoklesz(nap) {
  let eredmeny = napiHomerseklet[nap];
  printNapiHofok(eredmeny);
  miAzAjanlat(eredmeny);
}

function miAzAjanlat(eredmeny) {
  let napiAjanlatEredmeny;
  if (eredmeny < 0) {napiAjanlatEredmeny = "Forró csoki"
}   
else if (eredmeny >= 0 && eredmeny < 15) {napiAjanlatEredmeny = "Meleg tea"
}
else if (eredmeny >= 15 && eredmeny < 25) {napiAjanlatEredmeny = "Finom süti"
}
else if (eredmeny >= 25) {napiAjanlatEredmeny = "Jéghideg limonádé"
}
printNapiAjanlatEredmeny(napiAjanlatEredmeny);
}  

function maximum() {
  let max = napiHomerseklet[0];
  for (let i = 0; i < napiHomerseklet.length; i++) {
    if (napiHomerseklet[i] > max) {
      max = napiHomerseklet[i];
    }
    printMax(max);
  }
}

function minimum() {
  let min = napiHomerseklet[0];
  for (let i = 0; i < napiHomerseklet.length; i++) {
    if (napiHomerseklet[i] < min) {
      min = napiHomerseklet[i];
    }
    printMin(min);
  }
}

function atlag() {
  let atl = 0;
  for (let i = 0; i < napiHomerseklet.length; i++) {
    atl = atl + napiHomerseklet[i];
  }
  atl = atl / napiHomerseklet.length;
  printAtl(atl);
}

function printNapiHofok(eredmeny) {
  let hofok = document.querySelector("span.hofok");
  hofok.innerHTML = eredmeny;
}

function printNapiAjanlatEredmeny(napiAjanlatEredmeny) {
  let napiAjanlat = document.querySelector("span.ajanlat");
  napiAjanlat.innerHTML = napiAjanlatEredmeny;
}

function printMax(max) {
  let maximum = document.querySelector("span.maximum");
  maximum.innerHTML = max;
}

function printMin(min) {
  let minimum = document.querySelector("span.minimum");
  minimum.innerHTML = min;
}

function printAtl(atl) {
  let atlag = document.querySelector("span.atlag");
  atlag.innerHTML = atl;
}