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
]).then(function(response) { 
    let readMe = `
    # github:${userData.github}
    ## title:${userData.pTittle}
    (https://img.shields.io/badge/license-${userData.gLicense}-blue.svg)
    follows:${githubData.data.follows}
    
        `
    
    fs.writeFile("README.md", JSON.stringify(readMe, null, "\n"), function(err) {
        if (err) {
            console.log('Oops, there was an error', err);
        }
        console.log('Your file was written!  Success!');
    });
});

