"use strict";

// deklarace promennych
let poleOtazek;
let kviz;
let otazka;


poleOtazek = [
  {otazka: "Jakou barvu má rajče?", prvniMoznost:"červenou",druhaMoznost:"bílou",tretiMoznost:"modrou"},
  {otazka: "Jakou barvu má banán?", prvniMoznost:"růžovou",druhaMoznost:"oranžovou",tretiMoznost:"žlutou"},
  {otazka: "Jakou barvu má hrášek?", prvniMoznost:"červenou",druhaMoznost:"modrou",tretiMoznost:"zelenou"},
];

otazka=document.getElementById("otazka");

function zobrazeniOtazky(){
  otazka=poleOtazek.otazka[0];
}

