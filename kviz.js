"use strict";

let poradi = 0;
let seznam =[];


// vytvorim otazky, s moynostma a spravnou moznosti
const poleOtazek = [
  {
    otazka: "Jakou barvu má rajče?",
    moznosti: [
      "červenou", "bílou", "modrou", // ...
    ],
    spravnaOdpoved: 0,
    zvolenaOdpoved: null,
    obrazek: "obrazky/rajce.jpg"
  },
  {
    otazka: "Jakou barvu má borůvka?",
    moznosti: [
      "žlutou", "tyrkysovou", "modrou", "stříbrnou", // ...
    ],
    spravnaOdpoved: 2,
    zvolenaOdpoved: null,
    obrazek: "obrazky/boruvka.jpg"
  },
  {
    otazka: "Jakou barvu má banán?",
    moznosti: [
      "oranžovou", "modrou", "šedou", "fialovou","žlutou", // ...
    ],
    spravnaOdpoved: 4,
    zvolenaOdpoved: null,
    obrazek: "obrazky/banan.jpg"
  },
  {
    otazka: "Jakou barvu má hrášek?",
    moznosti: [
      "zelenou", "červenou",// ...
    ],
    spravnaOdpoved: 0,
    zvolenaOdpoved: null,
    obrazek: "obrazky/hrasek.jpg"
  },
  {
    otazka: "Jakou barvu má kiwi?",
    moznosti: [
      "chlupatou",  // ...
    ],
    spravnaOdpoved: 0,
    zvolenaOdpoved: null,
    obrazek: "obrazky/kiwi.jpg"
  },
];

zobrazOtazku();

function zaznamenatOdpoved(zvolenaOdpoved) {
  poleOtazek[poradi].zvolenaOdpoved = zvolenaOdpoved;

  if (poradi < poleOtazek.length - 1) {
    poradi++

    zobrazOtazku();
  } else {
    zobrazVysledky();
  }

}

function zobrazOtazku() {
  const soucasnaOtazka = poleOtazek[poradi];
  let fotka = document.getElementById("foto");
  fotka.style.backgroundImage=`url("${poleOtazek[poradi].obrazek}")`;
  console.log(poleOtazek[poradi].obrazek);

  // poradi
  document.getElementById("poradi").innerHTML = `${poradi + 1} / ${poleOtazek.length}`;

  // zneni otazky
  document.getElementById("otazka").innerHTML = `<h3>${soucasnaOtazka.otazka}</h3>`;

  // vsechny odpovedi
  const ul = document.getElementById("odpovedi");

  ul.innerHTML = '';

  // soucasnaOtazka.moznosti.forEach(moznost => ul.innerHTML += `<li>${moznost}</li>`)

  // for (let indexMoznosti in soucasnaOtazka.moznosti) {
  //   ul.innerHTML += `<li id="moznost-${indexMoznosti}">${soucasnaOtazka.moznosti[indexMoznosti]}</li>`;
  // }

  for (let i = 0; i < soucasnaOtazka.moznosti.length; i++) {

    ul.innerHTML += `<li id="moznost-${i}" onclick="zaznamenatOdpoved(${i})">${soucasnaOtazka.moznosti[i]}</li>`;
    // ul.innerHTML += '<li id="moznost-' + i + '" onclick="zaznamenatOdpoved(' + i + ')">' + soucasnaOtazka.moznosti[i] + '</li>';

  }
}

// vratit vysledky

function zobrazVysledky() {
  document.getElementById("kviz").style.display = "none";
  document.getElementById("vysledek").style.display = "block";

  let kontrola, komentar;
  let poleTrue = [];

  for (let i = 0; i < poleOtazek.length; i++) {
    const mojeOdpoved = poleOtazek[i].moznosti[poleOtazek[i].zvolenaOdpoved];


    if (poleOtazek[i].zvolenaOdpoved===poleOtazek[i].spravnaOdpoved){
      kontrola = true;
      poleTrue.push("true")
    }else{
      kontrola = false;
    }

    if (kontrola==true){
      komentar = "Odpověděl/a jsi <strong>SPRÁVNĚ</strong>!";
    }else{
      komentar = `Správná odpověď je: ${poleOtazek[i].moznosti[poleOtazek[i].spravnaOdpoved]}`;
    }

    let polozka = `<h3>${i+1}. ${poleOtazek[i].otazka}</h3> <p>Tvoje odpověď: ${mojeOdpoved}</p> <p>${komentar}</p>`;
    
    seznam.push(polozka);
    
   
  }
  let pocetTrue = poleTrue.length;
  let uspesnost = (pocetTrue/poleOtazek.length)*100;

  document.getElementById("hodnoceni").innerHTML = `${seznam.join("")} <h2>Správně je ${pocetTrue} z ${poleOtazek.length}. Úspěšnost ${uspesnost} %.</h2> `;
}



