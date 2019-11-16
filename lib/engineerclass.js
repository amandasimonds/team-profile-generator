const Employee = require("./employeeclass");

class Engineer extends Employee{
    constructor(github){
        super(name, id, title);
        this.github = github;
    }

    getGithub(){
        return github
    }

    getRole(){
        return role;
    };
};



const rectangle = new Rectangle(12, 9);
rectangle.printInfo();

module.exports = Engineer