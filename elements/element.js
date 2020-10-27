let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'), //для обращение к чему угодно через '.','#','[]'
    oneheart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

// console.log(box);
// console.log(btn);
// console.log(btn[0]);
// console.log(circle[2]);
// console.log(heart[1]);
// console.log(oneheart);

//2.23 Действия с элементами на странице
box.style.backgroundColor = "blue";
btn[1].style.borderRadius = "100%";
circle[2].style.backgroundColor = "green";
circle[1].style.backgroundColor = "yellow";
circle[0].style.backgroundColor = "red";

// for (let i = 0; i < heart.length; i++) { //пока не закончатся
//     heart[i].style.backgroundColor = 'blue';
// }
//callback выполняется строго одна за другой
// heart.forEach(function(item, i, hearts) { //называние элемента,итератор, массив
//     item.style.backgroundColor = 'blue';
// });
let div = document.createElement('div'),
    text = document.createTextNode('Новый какой то любой текст');
console.log(text);

div.classList.add('black');
// document.body.appendChild(div); //добавили div в конец body
//wrapper.appendChild(div); //в конец элемента

//! div.innerHTML = '<h4>hi,bro</h4>'; //вставили текст в HTML
div.textContent = "hi,bro"; //для вставки конкретно текста, а не возможного кода

document.body.insertBefore(div, circle[1]); //перед... 
document.body.removeChild(circle[1]);
wrapper.removeChild(heart[1]);
document.body.replaceChild(btn[2], circle[1]); //замена new,old

console.log(div);