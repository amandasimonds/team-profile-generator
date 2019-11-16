const inquirer = require("inquirer");
const fs = require("fs");
// const Engineer = require("./engineerclass");

let user;

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

       ]).then(function({role, name}){

        if (role === "Engineer"){
            return inquirer.prompt([
                {
                    type: "input",
                    name: "github",
                    message: "What is your github link?",
                }
            ]).then(function({github}){
                user = new Engineer ()
            })
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

        //generate team html
        fs.writeFile("team.html", htmlgen(role, name, github), function(err) {
            
            if (err) {
              return console.log(err);
            }
          
            console.log("Success!");
        
          })

       })

    //    .then(function ({role, name, officeNumber}){
    //        console.log(role, name, officeNumber);
    //    })
    };

       promptUser();