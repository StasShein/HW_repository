const prom1 = new Promise((res, rej) => {
    res(1)
})

const prom2 = new Promise((res, rej) => {
    res(2)
})

function all(arr) {
    return Promise.all(arr)
}

all([prom1, prom2]).then(([res1, res2]) => console.log(res1, res2))




function summa(promise1, promise2) {
    return all([promise1, promise2]).then(([res1, res2]) => console.log(res1 + res2))
}

summa(prom1, prom2)



function debounce(fn, delay) {
   setInterval(fn, delay);
}

function changeColor(){
    const block = document.querySelector('.block');

    block.style.backgroundColor = block.style.backgroundColor == 'red' ? 'blue' : 'red';
}

debounce(changeColor, 1000)