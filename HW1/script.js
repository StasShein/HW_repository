///1///
function average(a, b, c) {
    let avr = a + b + c

    return avr / 3
}

let HW1 = average(1, 5, 9)

console.log(HW1)





///2///
function cilinder(r, h){

    let volume = Math.PI * r ** 2 * h;

    let area = 2 * Math.PI * r ** 2 + 2 * Math.PI * r * h;

    let cilinder = {volune : volume.toFixed(2), area : area.toFixed(2)}

    return cilinder

}

let HW2 = cilinder(2, 2)
console.log(HW2)




///3///
function odd(start, finish){

    let result = ''

    for (i = start; i <= finish; i++){
        if(i % 2 !== 0){
            result += i+' '
        }
    }

    return result
}

let HW3 = odd(2, 7)
console.log(HW3)




///4///
function reverse(str) {
    
    let result = ''

    let spl = str.split('')

    for(i = spl.length - 1; i>=0; i--){
        result += spl[i]
    }
    
    return result

}

let HW4 = reverse('abcdef')
console.log(HW4)





///5///

function palindromes(str) {

    let palin = []

    let strArray = str.split(' ')

    let reverse = strArray.map(str => {
        return [...str].reverse().join('')
    });

    for(i = 0; i <= strArray.length - 1; i++){
        if(strArray[i] === reverse[i]){
            palin.push(strArray[i])
        }
    }

    return palin
}

let HW5 = palindromes('madam was looking on the radar for a kayak')
console.log(HW5)


///6///

const forbidden =['ship', 'blow', 'blew up'];
const str = 'There once was a ship that put to sea The name of the ship was the Billy of Tea The winds blew up, her bow dipped down Oh blow, my bully boys, blow (huh)'


function censorship(str, forbidden, symbol){

    for(i = 0; i < forbidden.length;i++){

        str = str.replaceAll( forbidden[i], symbol.repeat(forbidden[i].length) )

    }
    
    console.log('Задание №6')
    console.log(str)
}

censorship(str, forbidden, '*')




///7///
function urlParser(str) {

    let url = str.match(/(\w{4,5}).\/{2}(\w*.\w*.\w*)\/(.*)/);

    let parseURL = {}

    parseURL.protocol = url[1];

    parseURL.domain = url[2];

    parseURL.resource = url[3];

    return parseURL

}

let parseURL = urlParser('http://www.devbg.org/forum/test/smth/index.php')

console.log(parseURL)




///8///
function backToFront(str, num){

    let i = str.slice(-num)

    console.log('Задание №8')
    console.log(i + str + i)

}

backToFront('government', 3)



///9///
function digitSum(num){

    let summa = 0;
      
    while (num) {
       
        let tmp  = num % 10;
       
        num = (num - tmp) / 10;
        
        summa += tmp;
        
    }
       
    return summa;

}

let HW9 = digitSum(123)
console.log(HW9)


///10/// 

function socialRoles(age){

    const ageGroup = {
        0: 'Ребенок',
        15: 'Юноша',
        25: 'Взрослый',
        65: 'Пожилой',
        9999: 'Ошибка',
    }

    const key = Object.keys(ageGroup)

    for(i = 0; i < key.length; i++){

        if(age >= +key[i] && age <= +key[i + 1]){

            return Object.values(ageGroup)[i]

        }
    }
    
}


let socialRole = socialRoles(prompt('Введите ваш возраст'))

console.log('Ваша социальная роль ' + socialRole)
    
