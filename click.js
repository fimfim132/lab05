function f1(event) {
    document.getElementById("button1").style.background='#000000';
    document.getElementById("button1").style.color='#FFFFFF';
    alert("Don't click me said:Why you click me")
}

function f2(event) {
    document.getElementById("button2").style.background='#000000';
    document.getElementById("button2").style.color='#FFFFFF';
    alert("Why you click me said:Why you click me")
}

function f3(event) {
    document.getElementById("button3").style.background='#000000';
    document.getElementById("button3").style.color='#FFFFFF';
    alert("no click me said:Why you click me")
}

function f4(event) {
    document.getElementById("button4").style.background='#000000';
    document.getElementById("button4").style.color='#FFFFFF';
    alert("NOOOO! click me:Why you click me")
}

function t1(event){
    document.querySelector("h1").textContent = 'Hi';
    document.querySelector("h2").textContent = 'Hi';
}

const b1Toggle = document.getElementById("button1");
b1Toggle.addEventListener('click', f1);

const b2Toggle = document.getElementById("button2");
b2Toggle.addEventListener('click', f2);

const b3Toggle = document.getElementById("button3");
b3Toggle.addEventListener('click', f3);

const b4Toggle = document.getElementById("button4");
b4Toggle.addEventListener('click', f4);

const t1Toggle = document.getElementById("hh");
t1Toggle.addEventListener('click', t1);