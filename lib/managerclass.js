const Employee = require("./employeeclass");


class Manager extends Employee {
    constructor(officeNumber) {
      this.officeNumber = officeNumber;
  
      super(name, id, title);
      this.name = name;
      this.id = id;
      this.title = title;
    }

    getRole(){
        return Manager;
    }
  }