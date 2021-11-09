document.addEventListener('DOMContentLoaded', init);

var szoveg;
var meret;
var betuSzin;
var hatterSzin;

function init() {
    szoveg = document.getElementById('szoveg').value;
    meret = document.getElementById('betumeret').value;
    betuSzin = document.getElementById('szovegszin').value;
    hatterSzin = document.getElementById('hatterszin').value;
    document.getElementById('elonezet').innerHTML = szoveg;
    document.getElementById('elonezet').style.fontSize = meret + 'px';
    document.getElementById('elonezet').style.color = betuSzin;
    document.getElementById('elonezet').style.backgroundColor = hatterSzin;
    document.getElementById('szoveg').addEventListener('input', szovegValt);
    document.getElementById('betumeret').addEventListener('input', meretValt);
    document.getElementById('szovegszin').addEventListener('input', betuSzinValt)
    document.getElementById('hatterszin').addEventListener('input', hatterSzinValt)
    document.getElementById('reset').addEventListener('click', alaphelyzet)
}



function szovegValt() {
   szoveg = document.getElementById('szoveg').value;

   if (szoveg == '') {
       document.getElementById('error').innerHTML = "A mintaszöveg nem lehet üres";
   } else {
    document.getElementById('error').innerHTML = "";
   }

   document.getElementById('elonezet').innerHTML = szoveg;
}


function meretValt() {
    meret = document.getElementById('betumeret').value;

    document.getElementById('elonezet').style.fontSize = meret + 'px';
}

function betuSzinValt() {
    betuSzin = document.getElementById('szovegszin').value;
    
    document.getElementById('elonezet').style.color = betuSzin;
}

function hatterSzinValt() {
    hatterSzin = document.getElementById('hatterszin').value;
    
    document.getElementById('elonezet').style.backgroundColor = hatterSzin;
}

function alaphelyzet() {
    document.getElementById('szoveg').value = "Árvíztűrő tükörfúrógép";
    document.getElementById('betumeret').value = 12;
    document.getElementById('szovegszin').value = "#000000";;
    document.getElementById('hatterszin').value = "#FFFFFF";;
    document.getElementById('elonezet').innerHTML = "Árvíztűrő tükörfúrógép";
    document.getElementById('elonezet').style.fontSize = '12px';
    document.getElementById('elonezet').style.color = "#000000";
    document.getElementById('elonezet').style.backgroundColor = "#FFFFFF";
}

