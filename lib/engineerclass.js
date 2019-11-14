const Employee = require("./employeeclass");

class Engineer extends Employee{
    constructor(github){
        this.github = github;
    }

    getGithub(){

    }

    getRole(){
        return Engineer;
    };
};



const rectangle = new Rectangle(12, 9);
rectangle.printInfo();