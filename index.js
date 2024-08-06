const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes.js");

inquirer.prompt([
    {
        type: "input",
        name: "text",
        message: "Enter up to 3 characters for the text of your logo",
        validate: function(input) {
            if (input.length === 3) {
                return true;
            }
            return "Text must be exactly 3 characters long.";
        }
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter the color you would like for your text (OR a hexadecimal number)",
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter a color you would like the badge to be (OR a hexadecimal number)",
    },
    {
        type: "list",
        name: "shape",
        message: "Which shape would you like your logo to be?",
        choices: ["circle", "square", "triangle"],
    }
]).then((answers) => {
    const { text, textColor, shapeColor, shape } = answers;

    const svgContent = generateSVG(text, textColor, shape, shapeColor);

    fs.writeFile("logo.svg", svgContent, (err) => {
        if (err) {
            console.error("Error generating logo.svg:", err);
        } else {
            console.log("logo.svg Was Generated!");
        }
    });
});

function generateSVG(text, textColor, shape, shapeColor) {
    let shapeSVG = "";
    switch (shape) {
        case "circle":
            shapeSVG = new Circle(shapeColor).generateShapeSVG();
            break;
        case "triangle":
            shapeSVG = new Triangle(shapeColor).generateShapeSVG();
            break;
        case "square":
            shapeSVG = new Square(shapeColor).generateShapeSVG();
            break;
    }

    return `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeSVG}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`;
}
