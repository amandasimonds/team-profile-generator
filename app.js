const inquirer = require("inquirer");
const fs = require("fs");

let role = "";
let name = "";
let officeNumber = "";
let github = "";

function promptUser(){
    return inquirer.prompt([
        
          {
            type: "input",
            name: "name",
            message: "What is your name?"
          },

          {
            type: "list",
            name: "role",
            message: "What is your role?",
            choices: ["Manager", "Intern", "Engineer"]
          },

       ])}

       function promptUser2(role, officeNumber){

        if (role === "Engineer"){
            return inquirer.prompt([
                {
                    type: "input",
                    name: "github",
                    message: "What is your github link?",
                }
            ])
        } else if (role === "Intern"){
            return inquirer.prompt([
                {
                    type: "input",
                    name: "school",
                    message: "Enter the school you are currently enrolled in:"
                }
            ])
        } else if (role === "Manager"){
            return inquirer.prompt([
                {
                    type: "input",
                    name: "officeNumber",
                    message: "Enter your office number:"
                }
                
            ])

        } else {
            console.log("no role found")
        }
    }

        
    //    }).then(function ({role, name, officeNumber}){
    //        console.log(role, name, officeNumber);
    //    })};


       promptUser();
       promptUser2();