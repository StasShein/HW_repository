class Vehicle {
    #vin
    #color

    constructor(vin, color){
        this.#vin = vin
        this.#color = color
    }

    get vin(){
        return this.#vin
    }

    set vin(vin){

        if(typeof vin !== 'number'){
            throw new Error('Name should be a number value')
        }else{
            this.#vin = vin;
        }
    }

    get color(){
        return this.#color
    }

    set color(color){

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

    get load(){
        return this.#loadCapacity
    }

    set load(loadCapacity){

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

    get sits(){
        return this.#sitsCapacity
    }

    set sits(sitsCapacity){

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

    addVehicle(vehicle){
        this.#vehicle.push(vehicle)
    }

    sellVehicle(vin){

        const index = this.#vehicle.findIndex(e => e.vin === vin)
        if(index !== -1){
            this.#vehicle.splice(index, 1)
        }
       
    }

    repaintVehicle(vin, color){
        try{
            this.#vehicle.find(e => e.vin === vin).color = color
        }catch{
            console.log('Vin not found')
        }
    }

}

const DATABASE = {
    dealer: {
      title: "Trucks & Buses",
    },
    trucks: [
      {
        vin: 1122,
        color: "Red",
        loadCapacity: 10,
      },
      {
        vin: 2332,
        color: "Yellow",
        loadCapacity: 20,
      },
      {
        vin: 5234,
        color: "Green",
        loadCapacity: 70,
      },
    ],
    buses: [
      {
        vin: 1112,
        color: "Green",
        sitsCapacity : 50,
      },
      {
        vin: 6543,
        color: "Yellow",
        sitsCapacity : 25,
      },
    ],
  };

let vehiclesList = [].concat(DATABASE.trucks, DATABASE.buses);

let vehicles = [];

for(let i = 0; i < vehiclesList.length; i++){
    if(vehiclesList[i].loadCapacity){
        vehicles.push(
            new Truck(
                vehiclesList[i].vin, 
                vehiclesList[i].color, 
                vehiclesList[i].loadCapacity
        ))
    }else{
        vehicles.push(
            new Bus(
                vehiclesList[i].vin, 
                vehiclesList[i].color, 
                vehiclesList[i].sitsCapacity
        ))
    }
}

console.log(vehicles)

const dealer = new Dealer ('Trucks&Buses', vehicles)

const bus = new Bus(7733, 'Light Green', 50)

dealer.addVehicle(bus)

dealer.sellVehicle(2332)

dealer.repaintVehicle(6543, 'Purple-Red')

console.log(dealer)





