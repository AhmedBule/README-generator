const inquirer = require("inquirer");
const fs = require('fs');
const prompt = require("./prompt");
const readmegenerator = require("./readmegenerator");
//const writeFileAsync = util.promisify(fs.writeFile);
promptUser();
function promptUser(){
    inquirer.prompt(prompt).then(function(response){
        console.log(response);
        let readmeText = readmegenerator(response);
        console.log(readmeText);
        fs.writeFileSync('./README.md', readmeText);
    })

};