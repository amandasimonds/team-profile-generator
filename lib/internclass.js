const Employee = require("./employeeclass");

class Intern extends Employee{
    constructor(school){
        this.school = school;

       }
        getSchool(){

        }

        getRole(){
            return Intern;
        }
    }