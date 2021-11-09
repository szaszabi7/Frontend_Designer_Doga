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
    document.getElementById('fav').addEventListener('click', kedvencekhezAd)
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

/* class Kedvenc{

    constructor(nev, szoveg, meret, txtColor, bgColor){
        this.nev = nev;
        this.szoveg = szoveg;
        this.meret = meret;
        this.txtColor = txtColor;
        this.bgColor = bgColor;
    }

    getNev() {
        return this.nev;
    }

    getSzoveg() {
        return this.szoveg;
    }

    getMeret() {
        return this.meret;
    }

    getTxtColor() {
        return this.txtColor;
    }

    getBgColor() {
        return this.bgColor;
    }

    toString() {
        return `${this.szoveg}, ${this.meret}, ${this.txtColor}, ${this.bgColor}`;
    }

}

var kedvencek = [];

function kedvencekhezAd() {
    let nev = document.getElementById('kedvencNeve').value;
    let szoveg = document.getElementById('szoveg').value;
    let meret = document.getElementById('betumeret').value;
    let txtColor = document.getElementById('szovegszin').value;
    let bgColor = document.getElementById('hatterszin').value;

    let adat = new Kedvenc(nev, szoveg, meret, txtColor, bgColor);

    kedvencek.push(adat);

    document.getElementById('lista').innerHTML = "";

    for (let i = 0; i < kedvencek.length; i++) {
        let li = document.createElement('li');
        let lee = document.createElement('li');
        
        li.textContent = kedvencek[i].getNev();
        document.getElementById('lista').appendChild(li);
        
        let ul = document.createElement('ul');
        
        ul.appendChild(addItem(kedvencek[i].getSzoveg()));
        ul.appendChild(addItem(kedvencek[i].getMeret()));
        ul.appendChild(addItem(kedvencek[i].getTxtColor()));
        ul.appendChild(addItem(kedvencek[i].getBgColor()));
        
        //span.innerHTML = kedvencek[i].toString();
        
        //lee.appendChild(span);
        
        
        let add = document.createElement('button');
        add.innerHTML = "Betölt";
        add.addEventListener('click', betolt);

        lee.appendChild(add);

        ul.appendChild(lee);

        document.getElementById('lista').appendChild(ul);
    }

    function addItem(name) {
        let li = document.createElement('li');
        li.textContent = name;
        return li;
    }
    
    function betolt(e) {
        let sor = e.target.parentNode;
        szoveg = sor.getElementsByTagName("li")[0].textContent;
        meret = sor.getElementsByTagName("li")[1].textContent;
        betuSzin = sor.getElementsByTagName("li")[2].textContent;
        hatterSzin = sor.getElementsByTagName("li")[3].textContent;
    }
}
 */