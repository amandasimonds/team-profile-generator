const inquirer = require("inquirer");
const generateHTML = require("./generateHTML");
const Manager = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Employee = require("./lib/employee");
const fs = require("fs");

const employeeList = [];


function profileGen() {
    console.log("Welcome to the Team Profile Generator. First enter your manager. Then you will enter your employees.");
    createFile("team.html", generateHTML.generateHTML());
    newManager();      
}

function getRole() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "employeeRole",
                message: "What is the new employee's role?",
                choices: ['Engineer', 'Intern']
            }
        ])
        .then(function (data) {
            if (data.employeeRole === "Engineer") {
                newEngineer();
            }else{
                newIntern();
            }
        });       
}

function newManager() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "employeeTitle",
                message: "Please verify the employee's title:",
                choices: ["Manager"]
            },
            {
                type: "input",
                name: "employeeName",
                message: "What is the manager's name?"
            },
            {
                type: "input",
                name: "employeeID",
                message: "What is the manager's ID number?"
            },
            {
                type: "input",
                name: "employeeEmail",
                message: "What is the manager's email address?"
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the manager's office number?"
            }
        ])
        .then(function(data) {
            let manager = new Manager(data.employeeName, data.employeeID, data.employeeTitle, data.employeeEmail, data.managerOfficeNumber);

            employeeList.push(manager);
            employeeList.forEach(function (data) {
                addToFile("team.html", generateHTML.addManagerCard(data));
                console.log(manager)
                addAnother();
            });
            
        });
}

function newEngineer() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "employeeTitle",
                message: "Please verify the employee's title:",
                choices: ["Engineer"]
            },
            {
                type: "input",
                name: "employeeName",
                message: "Please enter the new engineer's name."
            },
            {
                type: "input",
                name: "employeeID",
                message: "Please enter the new engineer's ID number."
            },
            {
                type: "input",
                name: "employeeEmail",
                message: "Please enter the new engineer's ID email address."
            },
            {
                type: "input",
                name: "engineerGitHub",
                message: "Please enter the new engineer's GitHub username."
            }
        ])
        .then(function(data) {
            let engineer = new Engineer(data.employeeName, data.employeeID, data.employeeTitle, data.employeeEmail, data.engineerGitHub);

            employeeList.push(engineer);
            console.log(engineer)
            console.log(employeeList)
            addAnother();
        });
}

function newIntern() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "employeeTitle",
                message: "Please verify the employee's title:",
                choices: ["Intern"]
            },
            {
                type: "input",
                name: "employeeName",
                message: "Please enter the new intern's name."
            },
            {
                type: "input",
                name: "employeeID",
                message: "Please enter the new intern's ID number."
            },
            {
                type: "input",
                name: "employeeEmail",
                message: "Please enter the new intern's ID email address."
            },
            {
                type: "input",
                name: "internSchool",
                message: "Please enter the new intern's school."
            }
        ])
        .then(function(data) {
            let intern = new Intern(data.employeeName, data.employeeID, data.employeeTitle, data.employeeEmail, data.internSchool);

            employeeList.push(intern);
            console.log(employeeList);
            console.log(intern)
            addAnother();
        });
}

function addAnother() {
    inquirer
    .prompt([
        {
            type: "list",
            name: "addAnother",
            message: "Would you like to add another employee?",
            choices: ['Yes', 'No']
        }
    ])
    .then(function(data) {
        if(data.addAnother === "Yes") {
            getRole();
        }else{
            
            populateData();
        }
    });
} 

function createFile(html, data) {
    fs.writeFile(html, data, function(err) {
        if (err) {
            return Error;
        }
    });
}

function addToFile (html, data) {
    fs.appendFile(html, data, function(err) {
        if (err) {
            return Error
        }
    });
}

function populateData() {
    console.log("populating data")
    employeeList.forEach(function (data) {
        switch (data.role) {
            case "Intern":
                addToFile("team.html", generateHTML.addInternCard(data));
              break;
            case "Engineer":
                addToFile("team.html", generateHTML.addEngineerCard(data));
              break;
            default:
              break;
        }
    });
};

function closeFile(){
    addToFile("team.html", generateHTML.closeHTML());
}


profileGen();
