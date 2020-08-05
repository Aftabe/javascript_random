// This lesson is all about javaScript Math
// document.getElementById('test').innerHTML = Math.PI;

// document.getElementById('test').innerHTML = Math.round(23.5);
document.body.style.backgroundColor = "grey";

function myFunction(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}



let btn = document.getElementsByTagName('button')[1];
console.log(btn);


btn.addEventListener('click', changeBckColor);


function changeBckColor(){
    document.body.style.backgroundColor = 'greenyellow';
}

console.log('name');