// let doc = document//получение объекта body

// let body = doc.body//обращение к body
// let html = doc.documentElement//обращение к самому домену


// let head = body.previousElementSibling
// let h_cal = body.children

// console.log(head);
// console.log(h_cal);

// console.log(body);
// console.log(html);

// console.log(body.childNodes);
// console.log(body.children);

// let inp = body.firstElementChild
// let inp2 = body.children[0]
// let div = body.lastElementChild.previousElementSibling//следующий элемент//последний
// let div2 = body.firstElementChild.nextElementSibling//предыдущий элемент


// console.log(inp, inp2, div,);

// console.log(inp);

// console.log(div);

// let deti = div.children[1]
// let roditel = deti.parentNode

// console.log(deti, roditel);

// // deti.style.color = "red"
// // deti.style.backgroundColor = "blue"
// // deti.style.fontsize = "30px"
// // deti.style.width = "100px"

// let div1= doc.querySelector('.wrap1').firstElementChild

// console.log(div1);
// div1.classList.add('bl')



let doc = document//получение объекта body

let body = doc.body//обращение к body
let html = doc.documentElement//обращение к самому домену

let div = doc.querySelector('div')
div.classList.add('wrap')

let shadow = doc.querySelector('div').lastChild



let header= doc.querySelector('div').firstElementChild
header.classList.add('hed')


let ul = doc.querySelector('header').lastElementChild
ul.classList.add('ul')
console.log(ul);
let li = doc.querySelector('ul')
li.classList.add('tw')