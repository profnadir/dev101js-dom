/* console.log(document);
console.log(document.title);
document.title = 'dev101'
console.log(document.head);
console.log(document.body);

document.write('hi dev101') */

/* let h1 = document.getElementById('p1');
console.log(h1); */

/* let h1 = document.getElementsByClassName('c1')[1];
console.log(h1); */

/* let span = document.getElementsByTagName('span')[0];
console.log(span); */

{/* <a href="https://www.ofppt.ma">ofppt</a> */}

/* let lien1 = document.createElement('a'); */

/* lien1.innerHTML = 'ofppt'; */

/* lien1.innerText = 'ofppt'; */
/* lien1.textContent = 'ofppt'; */

/* elt.attri = valeur */

/* lien1.href = "https://www.ofppt.ma";
lien1.id = "ofppt";
lien1.className = "test";

console.log(lien1);

document.getElementById('links').appendChild(lien1)

let lien2 = document.createElement('a');
lien2.textContent = 'google';
lien2.href = "https://www.google.ma";

document.getElementById('links').appendChild(lien2);

let p = document.getElementsByTagName('p')[0]; */

/* alert(p.innerHTML); // text + tags
alert(p.innerText); // text
alert(p.textContent); //text */ 

/* document.getElementById('links').removeChild(lien2)

let lien3 = document.createElement('a');
lien3.textContent = 'test';
lien3.href = "https://www.test.ma";

document.getElementById('links').replaceChild(lien3,lien1)

lien3.style.backgroundColor = "red";

let li1 = document.createElement('li');
li1.textContent = 'html'

let btn = document.createElement('button');
btn.textContent = 'X'
btn.onclick = show;

function show() {
    btn.parentNode.parentNode.removeChild(btn.parentNode)
}

document.getElementById('lang').appendChild(li1);
li1.appendChild(btn); */

/* console.log(document.body.firstChild);
console.log(document.body.firstElementChild); */

/* console.log(document.body.lastChild);
console.log(document.body.lastElementChild); */


/* console.log(p1.nextSibling);
console.log(p1.nextElementSibling); */

/* console.log(p1.previousSibling);
console.log(p1.previousElementSibling); */

/* let p1 = document.getElementsByTagName('p')[0]; */
/* 
console.log(p1.nodeType);
console.log(document.nodeType);
console.log(document.body.firstChild.nodeType === document.TEXT_NODE); */



/* p1.classList.add('c4')
p1.classList.remove('c3')

console.log(p1.classList);
console.log(p1.classList.contains('c4'));

p1.classList.toggle('c5');
console.log(p1.classList);

p1.classList.toggle('c5');
console.log(p1.classList);

p1.classList.toggle('c5');
console.log(p1.classList); */

let p1 = document.querySelectorAll('h1#p1');
console.log(p1);