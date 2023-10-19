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
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" 
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <link href="style.css" rel="stylesheet">
        <title>Document</title>
    </head>
    <body>
    <section class="card">
    <h1>${response.name}</h1>
    <h2>${response.location}</h2>
    <p>${response.bio}</p>
    <h3>Contact</h3>
    <a href="${response.LinkedIn}" target="_blank">LinkedIn</a></br>
    <a href="${response.GitHub}" target="_blank">GitHub</a>
    </section>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" 
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    </body>
    </html>`;
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