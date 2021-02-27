function t1(event) {
        document.body.style.background='#000000';
        document.body.style.color='#FFFFFF';
        head1.textContent = "GOOD NIGHT";
        head2.textContent = "This is night time!";
        span.style.color= '#0800FF';
        p1.innerHTML = "Click the button below to activate the day mode.";
        t1Toggle.classList.add('hidden');
        t2Toggle.classList.remove('hidden');
}

function t2(event) {
    document.body.style.background='#FFFFFF';
    document.body.style.color='#000000';
    head1.textContent = "GOOD MORNING";
    head2.textContent = "This is day time!";
    span.style.color= '#FF0000';
    p1.innerHTML = "Click the button below to activate the night mode.";
    t1Toggle.classList.remove('hidden');
    t2Toggle.classList.add('hidden');
}

const head1 = document.getElementById("head1");
const head2 = document.getElementById("head2");
const span = document.getElementById("span1");
const p1 = document.getElementById("p1");

const t1Toggle = document.getElementById("btn1");
t1Toggle.addEventListener('click', t1);


const t2Toggle = document.getElementById("btn2");
t2Toggle.addEventListener('click', t2);