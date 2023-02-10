class Vehicle {
    #vin
    #color

    constructor(vin, color){
        this.#vin = vin
        this.#color = color
    }

    get vinGet(){
        return this.#vin
    }

    set vinSet(vin){

        if(typeof vin !== 'number'){
            throw new Error('Name should be a number value')
        }else{
            this.#vin = vin;
        }
    }

    get colorGet(){
        return this.#color
    }

    set colorSet(color){

        if(typeof color !== 'string'){
            throw new Error('Name should be a string value')
        }else{
            this.#color = color;
        }
    }
}

class Truck extends Vehicle{
    #loadCapacity

    constructor(vin, color, loadCapacity){
        super(vin, color)
        this.#loadCapacity = loadCapacity
    }

    get loadGet(){
        return this.#loadCapacity
    }

    set loadSet(loadCapacity){

        if(typeof loadCapacity !== 'number'){
            throw new Error('Name should be a number value')
        }else{
            this.#loadCapacity = loadCapacity
        }
    }
}

class Bus extends Vehicle{
    #sitsCapacity

    constructor(vin, color, sitsCapacity){
        super(vin, color)
        this.#sitsCapacity = sitsCapacity
    }

    get sitsGet(){
        return this.#sitsCapacity
    }

    set sitsSet(sitsCapacity){

        if(typeof sitsCapacity !== 'number'){
            throw new Error('Name should be a number value')
        }else{
            this.#sitsCapacity = sitsCapacity
        }
    }
}

class Dealer{
    #title
    #vehicle

    constructor(title){
        this.#title = title
        this.#vehicle = [Trucks, Buses]
    }

    addVehicle(vehicle, vin, color, capacity){

        if(vehicle === 'Bus' || vehicle === 'bus'){

            this.#vehicle[1].push(new Bus(vin, color, capacity))

        }else{

            this.#vehicle[0].push(new Truck(vin, color, capacity))

        }
    }

    sellVehicle(vehicle, vin){

        let obj;

        if(vehicle === 'Truck' || vehicle === 'truck'){

            obj = this.#vehicle[0]

        }else{

            obj = this.#vehicle[1]
        }

        const indexVehicle = obj.findIndex(e => e.vinGet === vin)
       
        obj.splice(indexVehicle, 1)
    }

    repaintVehicle(vehicle, vin){

        let obj;

        if(vehicle === 'Truck' || vehicle === 'truck'){

            obj = this.#vehicle[0]

        }else{

            obj = this.#vehicle[1]
        }

        const indexVehicle = obj.find(e => e.vinGet === vin)
        
        indexVehicle.colorSet = 'Purple-Red'
    
    }

}

let Trucks = [
    new Truck(1112, 'Red', 10),
    new Truck(2332, 'Yellow', 20),
    new Truck(5234, 'Green', 70)
]

let Buses = [
    new Bus(1112, 'Green', 50),
    new Bus(6543, 'Yellow', 25)
]

const DATABASE = new Dealer ('Trucks&Buses')

DATABASE.addVehicle('Bus', 7733, 'Light Green', 50)

DATABASE.sellVehicle('truck', 1112)

DATABASE.repaintVehicle('bus', 6543)

console.log(DATABASE)

console.log()





