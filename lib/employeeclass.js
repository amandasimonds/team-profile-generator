
class Employee {
    constructor(name, id, title) {
      if (!name) {
        throw new Error("You are missing the name.");
      }
      if (!id) {
        throw new Error("You are missing the ID.");
      }
      if (!title) {
        throw new Error("You are missing the title.");
      }
      this.name = name;
      this.id = id;
      this.title = title;
    }
  
    // method which prints all of the stats for a character
    printInfo() {
      console.log(`Name: ${this.name}`);
      console.log(`ID: ${this.id}`);
      console.log(`title: ${this.title}`);
    }
  
    getName() {

    }

    getId(){

    }

    getEmail(){

    }

    getRole(){
        return Employee;
    }
  }
  
  // creates two unique characters using the "character" constructor
  const grace = new Character("Grace", 30, 75);
  
  grace.printInfo();

  module.exports = Employee;

  

  