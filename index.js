const inquirer = require("inquirer");
const fs = require("fs");

// function using inquirer .prompt for user to answer what they would like thier logo to look like 

inquirer.prompt(
    {
        type: "input",
        name: "text",
        message: "Enter up to 3 characters for the text of your logo"
    },

    {
        type: "input",
        name: "text-color",
        message: 'Enter the color you would like for your text'
    },

    {
        type: "input",
        name: "shape-color",
        message: "Enter a color You would like the badge to be",
    },

    {
        type: "list",
        name: "shape",
        message: "Which shape would you like your logo to be?",
        choices: ["circle", "square", "triangle"],
    },
)