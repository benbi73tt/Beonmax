let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.wrapper, .heart'), //для обращение к чему угодно через '.','#','[]'
    oneheart = document.querySelector('.heart');
console.log(box);
console.log(btn);
console.log(btn[0]);
console.log(circle[2]);
console.log(heart[1]);
console.log(oneheart);