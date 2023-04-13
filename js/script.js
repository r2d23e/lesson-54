let doc = document

let body = doc.body
let html = doc.documentElement

let head = body.previousElementSibling
let h_cal = body.children

console.log(body.childNodes);
console.log(body.children);
console.log(body);
console.log(head);
console.log(html);


let inp = body.firstElementChild

let div = body.lastElementChild.previousElementSibling//следующий элемент//последний
let div2 = body.firstElementChild.nextElementSibling//предыдущий элемент
let inp2 = body.children[0]

console.log(inp, inp2, div,);

console.log(div);

let deti = div.children[1]
let roditel = deti.parentNode

console.log(deti, roditel);

deti.style.color = "red"
deti.style.backgroundColor = "blue"
deti.style.fontsize = "30px"
deti.style.width = "100px"

let div1 = doc.querySelector('.wrap1').nextElementSibling
div1.classList.add('.bl')
console.log(div1);
div1.classList.add('.bl')