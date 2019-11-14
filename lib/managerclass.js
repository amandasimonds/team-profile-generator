const Employee = require("./employeeclass");


class Manager extends Employee {
    constructor(officeNumber) {
      this.officeNumber = officeNumber;
  
    //   super(area, perimeter);
    //   this.sideA = sideA;
    //   this.sideB = sideB;
    }

    getRole(){
        return Manager;
    }
  }