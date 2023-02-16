const prom1 = Promise.resolve(1);
const prom2 = Promise.resolve(2);

function all(arr) {
    return Promise.all(arr)
}


all([prom1, prom2]).then(([res1, res2]) => console.log(res1, res2))



const p1 = Promise.resolve(1);
const p2 = Promise.resolve(4);

function sum(a, b) {
    return Promise.all(a, b)
}


all([p1, p2]).then(([res1, res2]) => console.log(res1 + res2))


function debounce(fn, delay) {

   setInterval(fn, delay);

}

function changeColor(){
    
    const block = document.querySelector('.block');

    block.style.backgroundColor = block.style.backgroundColor == 'red' ? 'blue' : 'red';
}

debounce(changeColor, 1000)