interface CarsType {
    model : string;
    manufacturer : string;
}

interface ArrayCarsType {
    cars : CarsType[];
}

let car: CarsType = {} as CarsType;

car.manufacturer = "manufacturer";
car.model = "model";

const car1: CarsType = {
    manufacturer: "manufacturer",
    model: "model",
}

const car2: CarsType = {
    manufacturer: "manufacturer",
    model: "model",
}

const arrayCars: Array<ArrayCarsType> = [{
    cars: [car1, car2]
}];