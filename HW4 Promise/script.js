const prom1 = new Promise((res, rej) => {
    res(1)   
})

const prom2 = new Promise((res, rej) => {
    res(2) 
})

function all(arr){
    return new Promise((res, rej) => {
        let result = []

        for(let i = 0; i < arr.length; i++){
            arr[i]
            .then(data => {
                result[i] = data;
            })
        }

        res(result)
    })
}

all([prom1, prom2, prom2]).then(res => console.log(res))


function summa(prom1, prom2) {
    
    return new Promise((res,rej) => {

        let sum = 0;

        let arr = [prom1, prom2];

        for(let i = 0; i < arr.length; i++){
            arr[i]
            .then(data => {
               sum += data   
            }) 
            res(sum)
            
        }

    
})
}


summa(prom1, prom2).then(sum => console.log(sum))



function debounce(fn, delay) {
   setInterval(fn, delay);
}

function changeColor(){
    const block = document.querySelector('.block');

    block.style.backgroundColor = block.style.backgroundColor == 'red' ? 'blue' : 'red';
}

debounce(changeColor, 1000)
