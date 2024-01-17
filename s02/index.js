/* let h20 = document.getElementsByTagName('h2')[0];
h20.onclick = function(){
    h20.nextElementSibling.classList.toggle('hide');
}

let h21 = document.getElementsByTagName('h2')[1];
h21.onclick = function(){
    h21.nextElementSibling.classList.toggle('hide');
}

let h32 = document.getElementsByTagName('h2')[2];
h32.onclick = function(){
    h32.nextElementSibling.classList.toggle('hide');
} */

let h2s = document.getElementsByTagName('h2');

for (let i = 0; i < h2s.length; i++) {
    h2s[i].onclick = function(){
        h2s[i].nextElementSibling.classList.toggle('hide');
    }
}

function redP(){
    let ps = document.getElementsByTagName('p');
    /* ps.style.color= "red"; */

    for(let i = 0; i < ps.length ; i++){
        ps[i].style.color= "red";
    }

    
   /*  ps[0].style.color= "red";
    ps[1].style.color= "red";
    ps[2].style.color= "red"; */ 
}

let btnHide = document.createElement('button');
btnHide.textContent = "hideAll";
btnHide.onclick = function(){
    let ps = document.getElementsByTagName('p');
    for(let i = 0; i < ps.length ; i++){
        ps[i].style.display= "none";
    }
}

let btnShow = document.createElement('button');
btnShow.textContent = "showAll";
btnShow.onclick = function(){
    let ps = document.getElementsByTagName('p');
    for(let i = 0; i < ps.length ; i++){
        ps[i].style.display= "block";
    }
}

let btns = document.getElementById('btns');
btns.appendChild(btnHide)
btns.appendChild(btnShow)

