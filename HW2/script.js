let arr = [1, 2, 3, 4, 4, 4, 5, 6, 7, 7, 7, 7]

function filterDouble(arr){

    let double = []

    for(i = 0; i < arr.length; i++){

        if(arr[i] === arr[i + 1] || arr[i] === arr[i - 1]){

            double.push(arr[i])
        }
    }
    return double
}

let arrDouble = filterDouble(arr)

console.log(arrDouble)