const Employee = require("./employee");


class Manager extends Employee {
    constructor(name, id, title, email, officeNumber) {
      super(name, id, title, email);
      this.officeNumber = officeNumber;
      this.title = "Manager"
    }

    getOfficeNumber(){
      return this.officeNumber;
    }

    getRole(){
        return this.title;
    }
  }

  module.exports = Manager