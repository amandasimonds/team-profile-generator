
class Employee {
    constructor(name, id, title, email) {
      if (!name) {
        throw new Error("You are missing the name.");
      }
      if (!id) {
        throw new Error("You are missing the ID.");
      }
      if (!title) {
        throw new Error("You are missing the title.");
      }
      if (!email) {
        throw new Error("You are missing the email.");
      }
      this.name = name;
      this.id = id;
      this.title = title;
      this.email = email;
    }
  
    // method which prints all of the stats for a character
    printInfo() {
      console.log(`Name: ${this.name}`);
      console.log(`ID: ${this.id}`);
      console.log(`title: ${this.title}`);
      console.log(`email: ${this.email}`);
    }
  
    getName() {
      return this.name;
    }

    getId(){
      return this.id
    }

    getTitle(){
      return this.title
    }

    getEmail(){
      return this.email
    }

    getRole(){
        return Employee;
    }
  }
  
  // creates two unique characters using the "character" constructor
  // const grace = new Character("Grace", 30, 75);
  
  // grace.printInfo();

  module.exports = Employee;

  

  