// Grabbing required modules
const fs = require("fs");
const inquirer = require("inquirer");

// Inquirer to ask questions
inquirer.prompt([
    {
        type:"input",
        message:"Please enter your Github username",
        name: "username",
    },
    {
        type:"input",
        message:"Please enter a title for your Project/Repo",
        name: "title",
    },
    {
        type:"input",
        message:"Please enter a brief description of your Project/Repo",
        name: "description",
    },
    {
        type:"input",
        message:"Please enter a table of contents if you have one",
        name: "tableContents",
    },
    {
        type:"input",
        message:"Please enter any installation instructions if neccessary",
        name: "installation",
    },
    {
        type:"input",
        message:"Please describe how to use this specific application/repo, add screenshots if neccessary",
        name: "usage",
    },
    {
        type:"list",
        choices:["ISC","GPL","MIT","APACHE","BSD"],
        message:"Please select the license for your Project/Repo",
        name: "license",
    },
    {
        type:"input",
        message:"Please enter the contributor's name(s) for this Project/Repo",
        name: "contributor",
    },
    {
        type:"input",
        message:"If you have a test code for your Project/Repo, please enter it here",
        name: "test",
    },
]).then(function(response) { 
    let readMe = `
![License Badge](https://img.shields.io/badge/License-${response.license}-green.svg)

### Github Username: ${response.username}

## Project/Repo Title: ${response.title}

Description: ${response.description}

Table of Contents: ${response.tableContents}

Installation Instructions: ${response.installation}

How to use: ${response.usage}

License: ${response.license}

Contributor: ${response.contributor}

Test Code: ${response.test}
    `;
    
    // Write to file README.md
    fs.writeFile("README.md", readMe, function(err) {
        if (err) {
            console.log('Oops, there was an error', err);
        }
        console.log('Your file was written!  Success!');
    });
});

