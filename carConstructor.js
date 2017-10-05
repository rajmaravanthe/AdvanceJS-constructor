function Car (make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;

    console.log(" Make: "+ this.make + ", Model: "+ this.model + ", Year: "+ this.year, "............");
}

var benz = new Car("Benz", "C350", "2016");
var audi = new Car("Audi", "A800", "2015");