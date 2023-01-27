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





let productCard = [
    {
        img: './images/hoodie_PNG28.png',
        name: 'Hoodie',
        price: 10.99,
        about: 'Very good product for gift',
    },

    {
        img: './images/hoodie_PNG45.png',
        name: 'Hoodie',
        price: 15.99,
        about: 'Very good product for gift',
    },

    {
        img: './images/raincoat_PNG64.png',
        name: 'Rain Coat',
        price: 35.99,
        about: 'Very good product for gift',
    },

    {
        img: './images/vans_PNG48.png',
        name: 'Vans',
        price: 99.99,
        about: 'Very good product for gift',
    },
]

function addProductCard(arr){

    let productBlock = document.createElement('div')

    for(i = 0; i < arr.length; i++){

        productBlock.innerHTML +=

        `<div class="card">   
        
            <img class="productImg" src="${arr[i].img}" alt="hoodie">

            <p class="info"> ${arr[i].name} </p>

            <p class="info"> ${arr[i].about} </p>

            <p class="info"> ${arr[i].price} $ </p>
            
        </div>`
        
        document.body.append(productBlock)
    }

}

addProductCard(productCard)


function addGoodsCard({imgSrc, name, about, price}){

    let goodCard = document.createElement('div')
    goodCard.className = 'card'
    

    let imgDiv = document.createElement('div')
    imgDiv.className = 'img'
    
    goodCard.appendChild(imgDiv)

    let img = document.createElement('img')
    img.className = 'productImg'
    img.src = imgSrc

    imgDiv.appendChild(img)

    let goodName = document.createElement('p')
    goodName.className = 'info'
    goodName.innerHTML = name  

    let goodAbout = document.createElement('p')
    goodAbout.className = 'info'
    goodAbout.innerHTML = about

    let goodPrice = document.createElement('p')
    goodPrice.className = 'info'
    goodPrice.innerHTML = price

    goodCard.append(goodName, goodAbout, goodPrice)

    return document.body.appendChild(goodCard)

}

let goodCardHoodie = addGoodsCard(

    {
        imgSrc: './images/hoodie_PNG28.png',
        name: 'Hoodie',
        price: 10.99,
        about: 'Very good product for gift',
    },

)
