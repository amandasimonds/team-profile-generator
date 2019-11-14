const inquirer = require("inquirer");
const fs = require("fs");

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

          

       ]).then(function(role){

        if (role === "Engineer"){
            return inquirer.prompt([
                {
                    type: "input",
                    name: "github",
                    message: "What is your github link?",
                }
            ])
        } else if (role == "intern"){
            return inquirer.prompt([
                {
                    type: "input",
                    name: "school",
                    message: "Enter the school you are currently enrolled in:"
                }
            ])
        } else {
            console.log("no role found")
        }

        console.log(this.role)
       })};

       promptUser();