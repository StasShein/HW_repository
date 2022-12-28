///1///
function average(a, b, c) {
    let avr = a + b + c

    console.log('Задание №1')
    console.log(avr / 3)
}

average(1,5,9)





///2///
function cilinder(r, h){
    let volume = Math.PI * r**2 * h;

    let area = 2 * Math.PI * r ** 2 + 2 * Math.PI * r * h;

    console.log('Задание №2')
    console.log('volume:' + volume.toFixed(2), 'area:' + area.toFixed(2))
}

cilinder(2,2)




///3///
function odd(start, finish){
    console.log('Задание №3')
    for (i = start; i <= finish; i++){
        if(i%2 !== 0){
            console.log(i)
        }
    }
}

odd(2,7)





///4///
function reverse(str) {
    
    let res = ''
    for(i = str.split('').length - 1; i>=0; i--){
        res += str.split('')[i]
    }
    console.log('Задание №4')
    console.log(res)

}

reverse('abcdef')





///5///
function palindromes(str) {

    let reverse = ''

    let palin = []

    for (i= 0; i < str.split(' ').length; i++){
        reverse += ' '
        for(a=str.split(' ')[i].split('').length -1; a >= 0; a--){
        reverse += str.split(' ')[i].split('')[a]
        }
    }

    reverse = reverse.trimStart()

    for(i = 0; i<reverse.split(' ').length; i++){
        if(reverse.split(' ')[i] === str.split(' ')[i]){
            palin.push(str.split(' ')[i])
        }
    }

    for(i = 0; i < palin.length; i++){
        if(palin[i].length <= 2){
            palin.splice(i,1)
        }
    }

    console.log('Задание №5')
    console.log(palin)
    
}

palindromes('madam was looking on the radar for a kayak')



///6///

const forbidden =['ship', 'blow', 'blew up'];
const str = 'There once was a ship that put to sea The name of the ship was the Billy of Tea The winds blew up, her bow dipped down Oh blow, my bully boys, blow (huh)'


function censorship(str, forbidden, symbol){

    for(i = 0; i < forbidden.length;i++){
        str = str.replaceAll(forbidden[i],symbol.repeat(forbidden[i].length))
    }
    
    console.log('Задание №6')
    console.log(str)
}

censorship(str, forbidden, '*')




///7///
function urlParser(str) {

    let parseURL = {}

        parseURL.protocol = str.split('/')[0].slice(0,-1)

        parseURL.domain = str.split('/')[2]

        parseURL.resource = str.split('/')[3]+'/'+str.split('/')[4]

    console.log('Задание №7')
    console.log(parseURL)

}


urlParser('http://www.devbg.org/forum/index.php')




///8///
function backToFront(str, num){

    let i = str.slice(-num)

    console.log('Задание №8')
    console.log(i+str+i)

}

backToFront('government', 3)



///9///
function digitSum(num){

    num = String(num)

    let summa = 0

    for(i = 0; i<=num.split('').length -1; i++){
        summa += +num.split('')[i]
    }

    console.log('Задание №9')
    console.log(summa)

}

digitSum(123)


///10///

function socialRoles(age){
    if(age<=15){
        alert('Ваша социальная роль: Ребенок')
    }else{
        if(age<=25){
            alert('Ваша социальная роль: Юноша') 
        }else{
            if(age<=65){
                alert('Ваша социальная роль: Взрослый')
            }else{
                alert('Ваша социальная роль: Пожилой')
            }
        }
    }
}


// socialRoles(prompt('Введите ваш возраст'))

