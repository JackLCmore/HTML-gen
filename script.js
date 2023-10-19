const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
{
    name:"name",
    type:"input",
    message:"What is your Name?",
},
{
    name:"location",
    type:"input",
    message:"What is your location?",
},
{
    name:"bio",
    type:"input",
    message:"Add a Bio",
},
{
    name:"LinkedIn",
    type:"input",
    message:"What is your LinkedIn URL?",
},
{
    name:"GitHub",
    type:"input",
    message:"What is your GitHub URL?",
},
]

function generateHTML(response){
    return `${response.name}`;
}

function promptUser(data){
    inquirer
    .prompt(questions)
    .then((reponse) =>{
        console.log(reponse);
        fs.writeFile("index.html",generateHTML(reponse),(err)=>
        err ? console.error(err) : generateHTML(reponse));
    })
}

promptUser();