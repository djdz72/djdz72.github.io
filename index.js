//---------------------------------------------------------------------
//[Cours / Tuto débutant] Apprendre Javascript de A à Z – Les bases (1/6)
//---------------------------------------------------------------------
//[Cours / Tuto] Apprendre Javascript de A à Z – Le DOM (2/6)
//------------------------------------------------------------
// 
//-------------------------------------------------------------
// DOM          temps => 0:00:00
//-------------------------------------------------------------

//alert("Salam Djamel");
//console.log("cocoo");
//console.log(v);

//const c = "sssssssssssssss";
//c = "dd";  //Erreir c est in variable constant qui ne change pas

//var c = "ddddddddddddd";  var varuable var est encien js
/*let c = "ddddddddddddd";
c = "zzzzzz";
console.log(c);
c = "Amina";

let Concatener = "Salam " + c;
console.log(Concatener);

let ConcatenerAltgr7 = `${Concatener} Salam plusssss ${c}`;
console.log(ConcatenerAltgr7);

//Type de donnees
let string = "jjjj";
let number = 24;
let booliene = true;
let Arry = [45, "gggggg", false]; //Tableau []
let objet = { pronom: "Djamel", age: 51, marie: true };

let arbre;

console.log(
  string +
    "-" +
    number +
    "-" +
    booliene +
    "-" +
    Arry +
    "-" +
    objet +
    "-" +
    arbre
);
//Les operateur
console.log(4 + 5);
console.log(4 - 5);
console.log(4 * 5);
console.log(4 / 5);
console.log(4 ** 5);

//Lesz operation d'affectation
let total = 1;
total = total + 1;
total++;
total += 5;
total -= 4;
total *= 3;

console.log(total);

//Structure de controles
let x = 2;
let y = 5;
let z = "14";

if (x > y) {
  alert("Yes x plus gros que y");
} else if ((y = x)) {
  alert("Yes y plus gros que x");
} else {
  alert("y egale x");
}

if (x) {
  console.log("x Existe !");
}
if (x === true) {
  console.log("x Existe !");
}
//=== -> test d'egalité en prendre en compte les type de donnees
if (x === y) {
  console.log("x n'est pas egal a y ");
} else console.log("x else n'est pas egal a y ");

//== -> test d'egalité en prendre pas en compte les type de donnees
if (x == z) {
  console.log("x n'est pas egal a z ");
} else console.log("x else n'est pas egal a z ");

//    || -> OU       && -> ET

//les fonctions
function do_thing() {
  console.log("Dir Salam");
  console.log(9 + 6);
  alert("Calcule terminé");
}

//il faut appeler la fonction par son nom pour l'excuter
do_thing();

//Fonction fléché
const addition = (a, b) => {
  console.log(a + b);
};

//appeler la fonction "addition" avec deux parametre
addition(16, 4);
addition(4516, 65824);
addition(145826, 4754);

//Sensible a la Casse
//La porter des variable
function Add() {
  let n = 4;
  return n + 2;
}
Add();

let n = 4;
function Add2() {
  n = 4;
  console.log(n + 2);
}
Add2();

console.log(n);*/
//---------------------------------------------------------------------
//[Cours / Tuto] Apprendre Javascript de A à Z – Le DOM (2/6)
//---------------------------------------------------------------------
//Les Selecteurs
//-------------
//document.querySelector('h4').style.background="yellow";
const Balise_H4=document.querySelector('h4');
Balise_H4.style.background="red";
console.log(Balise_H4);

//-------------------------------------------------------------
//[Cours / Tuto] Apprendre Javascript de A à Z – Le DOM (2/6)
//------------------------------------------------
//Click event
//------------------------------------------------

//const Balise_Classe=document.querySelector('click-event');
//console.log(Balise_Classe);  // ca donne Null querySelector 
                               //est selecteur css et n'est pas une classe 
                                //donc il faut ajouter un point "."
//Declarer les variable
//======================
const Balise_Classe=document.querySelector(".click-event");
const btn1=document.querySelector('#Btn1');  // # ca veut dit ID
const btn2=document.getElementById('Btn2') 
const btn3=document.getElementById('Btn3') 
const rep=document.querySelector('p')
//console.log(reponse);


//console.log(Balise_Classe);  // ca donne Null querySelector est selecteur css 
                             //et n'est pas une classe 
                             //donc il faut ajouter un poin
//Balise_Classe.style.borderRadius="150px";
//Balise_Classe.addEventListener("Evenement en question", fonction fleché)  //La methode addEventListener a deux parametre
                                                         //le premier c'est l'Evenement en question"
                                                         //le deuxieme c'est la fonction fleché ()=> {}

Balise_Classe.addEventListener("click", () =>{
   //console.log("Click et dir salam !");  //console.log juste por tester le fonctionnement de la fonction
   //Balise_Classe.style.background="red";
   //Balise_Classe.style.border="3px solid teal";
   //Balise_Classe.style.borderRadius="20px";

   //Balise_Classe.classList.add('Question-Click');
   Balise_Classe.classList.toggle('Question-Click');

//console.log(btn1);
//console.log(btn2);
//console.log(btn3);

//console.log(btn1,btn2,btn3);


});



btn1.addEventListener("click", () =>{
   //console.log("Click1 !");
   //rep.style.visibility="visible";
   //rep.style.opacity="1";rep.style.opacity="1";
   rep.classList.add("Show-Response")
   rep.style.background="green"
});

btn2.addEventListener("click", () =>{
   //console.log("Click2 !");
   //rep.style.visibility="hidden";
   rep.classList.add("Show-Response")
   //rep.classList.add("Show-ResponseFalse")
   rep.style.background="red"
});

btn3.addEventListener("click", () =>{
   //console.log("Click3 !");
   //rep.style.visibility="hidden";
   rep.classList.add("Show-Response")
   //rep.classList.add("Show-ResponseFalse")
   rep.style.background="red"
});

//----------------------------------------------------------
//[Cours / Tuto] Apprendre Javascript de A à Z – Le DOM (2/6) 
//------------------------------------------------
//Mouse Event  temps => 1:13:10
//----------------------------------------------------------
const mousemove=document.querySelector('.mousemove')
//console.log(mousemove); juste pour tester
window.addEventListener("mousemove",(e) => {
//console.log("Mousse Move !!! Ok");

//console.log(e.target);  //e represente les donnees de mouvement de la sourée tout les detaile de mouvement
//mousemove.style.left = e.pageX+"px";
//mousemove.style.top = e.pageY+"px";
//console.log(mousemove.style.left = e.pageX+"px",mousemove.style.top = e.pageY+"px");
});

window.addEventListener("mousedown", () => {
   console.log("Jai appuyer sur la mouse");
   mousemove.style.transform="scale(2)  translate(-25%,-25%)";
   mousemove.style.border ="3px solid  red";
});

window.addEventListener("mouseup", () => {
  console.log("Jai laché sur la mouse");
   mousemove.style.transform ="scale(1)  translate(-50%,-50%)";
   mousemove.style.border ="3px solid  blue";
});


Balise_Classe.addEventListener("mouseenter", () => {
    Balise_Classe.style.background="rgba(0,0,0,0.6)";
    console.log("Mouse In !!");
   
});

Balise_Classe.addEventListener("mouseout", () => {
    console.log("Mouse Out !!!!!");
    Balise_Classe.style.background="pink";
});

rep.addEventListener("mouseover", () => {
    console.log("Mouse Over !!!!!");
    rep.style.background="yellow";
    rep.style.transform="rotate(2deg)";

});
rep.addEventListener("mouseout", () => {
    console.log("Mouse Live !!!!!");
    rep.style.background="green";
    rep.style.transform="rotate(0deg)";
});


//------------------------------------------------
//[Cours / Tuto] Apprendre Javascript de A à Z – Le DOM (2/6) 
//------------------------------------------------
// Keypress Event   temps => 1:30:00
//------------------------------------------------

const keypresscontenaire=document.querySelector(".keypress")
//console.log(keypressconteMnaire);  //Juste pour tester
const key=document.getElementById("key")
//console.log(key);  //Juste pour tester

//Fonction Son
//Ajouter un son   temps => 1:44:00
/*const ring=() =>{
   const audio=new Audio();
   //audio.src="./tor.mp3"
   audio.src="./fatir.mp3"
   audio.play();s
}*/
const audio=new Audio();
let Audio1;
let Audio2;
const ring=(key) =>{
   //const audio=new Audio();
   Audio1=key + ".mp3";
   audio.src=Audio1
   audio.play();
}


const ringStop=() =>{
   audio.src=Audio2
     audio.stop();
}
Audio2=Audio1;




document.addEventListener("keypress",(dj) => {
   //console.log("yes !!!!");
   //console.log(dj); les donnees globale
   //console.log(dj.key);
//key.textContent="Voici du texte";
key.textContent =dj.key;
if(dj.key === "f"){
   keypresscontenaire.style.background="brown";
   
}
else if (dj.key === "t"){
   keypresscontenaire.style.background="gray";
}
else {
  keypresscontenaire.style.background="green";
  
}
if(dj.key ==="f" ||dj.key ==="t") ring(dj.key);
//else audio.stop();  

})

//------------------------------------------------
//[Cours / Tuto] Apprendre Javascript de A à Z – Le DOM (2/6) 
//------------------------------------------------
// Scroll Event   temps => 1:50:00
//------------------------------------------------
const nav=document.querySelector("nav");
console.log(nav);  //Juste pour tester

const lu=document.querySelector("ul");
console.log(lu);  //Juste pour tester

window.addEventListener("scroll",() => {
   //console.log("salaaaaaaaaaaaaaaaaaaaaaam");
console.log(window.scrollY);  //il donne la position exacte de scroll

if(window.scrollY > 120 ){
   nav.style.top=0;
} else {
   nav.style.top="-50px";
}

})


//------------------------------------------------
//[Cours / Tuto] Apprendre Javascript de A à Z – Le DOM (2/6) 
//------------------------------------------------
// Formulaire   temps => 1:59:00
//------------------------------------------------

//Les Input
//------------------------------------------------
const inputName=document.querySelector('input[type="text"]');
console.log(inputName);
const select=document.querySelector("select");

const form=document.querySelector("form");
console.log(form); 

let pseudo="";
let language="";
//console.log(document.querySelector('input[type="text"]'))
inputName.addEventListener("input",(e)=>{
   //console.log("Yeeeeeeeeeeeeeeeeees !! input text");
   //console.log(e);
   //console.log(e.target.value);
   pseudo=e.target.value;
})

select.addEventListener("input",(e)=>{
   //console.log("selecttttttttttttttttttttttttt");
   //console.log(e);7
   language=e.target.value;
   //console.log(language)
})

form.addEventListener("submit",(e)=>{
   e.preventDefault();  //c'est important pour eviter de charger une nouvelle page
                       // en ecrasant tout les donnees 
   //console.log("yess   form");
   
   //Checkbox on pas besoin de declarer une variable pour le Checkbox
   //console.log(cgv.checked);

//le guemet de concatination altgr7 `` parmet de faire la concatination
   if(cgv.checked) {
      //document.querySelector('form > div').textContent =` => traduire les balise comme texte
document.querySelector('form > div').innerHTML =`    
<h3>Nom : ${pseudo}</h3> 
<h4>Language preferé : ${language}</h4>
`;
}else{
   alert("Veuillez accepter les CGV");
}

});

//------------------------------------------------
//[Cours / Tuto] Apprendre Javascript de A à Z – Le DOM (2/6) 
//------------------------------------------------
// load Event   temps => 2:26:00
//------------------------------------------------
window.addEventListener("load",()=>{
   console.log("Documment chargé !!!!!!!!!");
})


//------------------------------------------------
//[Cours / Tuto] Apprendre Javascript de A à Z – Le DOM (2/6) 
//------------------------------------------------
// Foreach   temps => 2:30:00
//------------------------------------------------
//const boxes=document.getElementsByClassName("box")
const boxes=document.querySelectorAll(".box")

console.log(boxes);

boxes.forEach((box)=>{
box.addEventListener("click",(e)=>{
   //console.log(e.target);
   e.target.style.transform="scale(0.7)";  //reduire la taille a 70% de chaque selection
});
});

//[Cours / Tuto] Apprendre Javascript de A à Z – Le DOM (2/6)
//------------------------------------------------------------
// 
//-------------------------------------------------------------
// addEventListener vs  onclick          temps => 2:40:00
//-------------------------------------------------------------

/*document.body.onclick= function(){
   console.log("click1 !");
}

//ou

document.body.onclick=()=>{
   console.log("click2 !");
}

document.body.onscroll=()=>{
   console.log("Scroll !");
}

document.body.onclick= function(){
   console.log("click2 !");
}*/

//Bubbling  => pour declanché a la fin
document.body.addEventListener("click",()=>{
console.log("Clikc 1 Bubbling !");
}, false);

//Usercapture  => pour declanché dans limediat
document.body.addEventListener("click",()=>{
   console.log("Clikc 2 Usercapture !");
   }, true);


   //[Cours / Tuto] Apprendre Javascript de A à Z – Le DOM (2/6)
//------------------------------------------------------------
// 
//-------------------------------------------------------------
// Stop propagation          temps => 2:52:00
//-------------------------------------------------------------
Balise_Classe.addEventListener("click", (e) => {
   //alert("Test !");
   e.stopPropagation();
});

//-------------------------------------------------------------
// removeEventListener          temps => 2:55:00
//-------------------------------------------------------------



  //[Cours / Tuto] Apprendre Javascript de A à Z – Le DOM (2/6)
//------------------------------------------------------------
// 
//-------------------------------------------------------------
// BOM     Browser Model Object     temps => 2:56:00
//-------------------------------------------------------------
//Les donnees sur la page web
//console.log(window.innerHeight);
//console.log(window.scrollY);

//ouvrir une page web
//window.open("http://google.com","cours js","keight=600","width=800");

//Fermer une page web
//window.close();

 //[Cours / Tuto] Apprendre Javascript de A à Z – Le DOM (2/6)
//------------------------------------------------------------
// 
//-------------------------------------------------------------
// Evenement Adossés a window     temps => 3:01:00
//-------------------------------------------------------------

//window.alert("Salam  Alert")
//alert("Salam  Alert");

//-------------------------------------------------------------
// Confirm     temps => 3:03:00
//-------------------------------------------------------------
btn1.addEventListener("click",()=>{
   confirm("Voulez vous confirmer cette reponse ?")
});


//-------------------------------------------------------------
// Prompt     temps => 3:03:00
//-------------------------------------------------------------
let answ;
btn2.addEventListener("click",()=>{
   answ = prompt("Entrez votre nom !")
});

btn3.addEventListener("click",()=>{
   let ans = prompt("Entrez votre Prenom !");
   //Balise_Classe.innerHTML = "<h3>Bravo "+ans+"</h3>"
   Balise_Classe.innerHTML += "<h3>Bravo "+ans+"</h3>"
});

//-------------------------------------------------------------
// SetTimeout => comme timer ou compte à rebours     temps => 3:09:00
//-------------------------------------------------------------
//setTimeout(() => {
   //La logique a ecxuter fonction ou autre
//}, "timeout en millisecondes avant le declancher");

setTimeout(() => {
   Balise_Classe.style.borderRadios="300px"
}, 3000);  //3000 = 3seconde


//-------------------------------------------------------------
// SetInterval =>  action a chaque interval    temps => 3:11:00
//-------------------------------------------------------------
//setInterval(() => { document.body.innerHTML +=`<div class = 'box'> <h2>Nouvelle boite </h2></div>`;}, 2000);

//pour l'arreter il faut creer un variable

//let interval = setInterval(() => { document.body.innerHTML +=`<div class = 'box'> <h2>Nouvelle boite </h2></div>`;}, 1000);

//document.body.addEventListener("click",(e)=>{
   //e.target.remove();
  
   //clearInterval(interval)
//});


//-------------------------------------------------------------
// Location =>  le lien excact ou vous ete    temps => 3:17:00
//-------------------------------------------------------------
console.log(location.href);
console.log(location.host);
console.log(location.pathname);
console.log(location.search);

//location.replace("http://lequipe.fr")
//location.replace("https://jibayatic.mfdgi.gov.dz/#/Logon");

//window.onload= function() {  location.href="https://jibayatic.mfdgi.gov.dz/#/Logon";};
//la meme chose
//window.onload= () => {location.href="https://jibayatic.mfdgi.gov.dz/#/Logon";};

//-------------------------------------------------------------
// Navigator =>      temps => 3:21:00
//-------------------------------------------------------------
console.log(navigator.userAgent);


//https://developer.mozilla.org/fr/docs/Web/API/Geolocation/getcurrentposition
/*var options = {
   enableHighAccuracy: true,
   timeout: 5000,
   maximumAge: 0,
 };
 
 function success(pos) {
   var crd = pos.coords;
 
   console.log("Votre position actuelle est :");
   console.log(`Latitude : ${crd.latitude}`);
   console.log(`Longitude : ${crd.longitude}`);
   console.log(`La précision est de ${crd.accuracy} mètres.`);
 }
 
 function error(err) {
   console.warn(`ERREUR (${err.code}): ${err.message}`);
 }
 
 navigator.geolocation.getCurrentPosition(success, error, options);
 */

 //-------------------------------------------------------------
// History =>      temps => 3:17:00
//-------------------------------------------------------------
//console.log(history);
//window.history.back();
//history.go(-2)

//-------------------------------------------------------------
// SetProprety =>      temps => 3:27:00
//-------------------------------------------------------------

window.addEventListener("mousemove",(e)=>{
   console.log(e);
   nav.style.setProperty("--x",e.layerX+"px");
   nav.style.setProperty("--y",e.layerY+"px");
});