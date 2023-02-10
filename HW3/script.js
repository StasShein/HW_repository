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
    title
    #vehicle

    constructor(title, vehicle){
        this.title = title
        this.#vehicle = vehicle
    }

    addVehicle(vin, color, capacity){

        this.#vehicle.push(new Bus(vin, color, capacity))
    }

    sellVehicle(vin){

        const index = this.#vehicle.findIndex(e => e.vinGet === vin)
        this.#vehicle.splice(index, 1)
    }

    repaintVehicle(vin){

        this.#vehicle.find(e => e.vinGet === vin).colorSet = 'Purple-Red'
    
    }

}

const DATABASE = new Dealer ('Trucks&Buses',
[
    new Truck(1112, 'Red', 10),
    new Truck(2332, 'Yellow', 20),
    new Truck(5234, 'Green', 70), 

    new Bus(1122, 'Green', 50),
    new Bus(6543, 'Yellow', 25)
])

DATABASE.addVehicle(7733, 'Light Green', 50)

DATABASE.sellVehicle(1112)

DATABASE.repaintVehicle(6543)

console.log(DATABASE)