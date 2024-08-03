const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        name: "text",
        message: "Enter up to 3 characters for the text of your logo",
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
            console.log("Generated logo.svg");
        }
    });
});

function generateSVG(text, textColor, shape, shapeColor) {
    let shapeSVG = "";
    switch (shape) {
        case "circle":
            shapeSVG = `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`;
            break;
        case "triangle":
            shapeSVG = `<polygon points="150,30 180,150 120,150" fill="${shapeColor}" />`;
            break;
        case "square":
            shapeSVG = `<rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />`;
            break;
    }

    return `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeSVG}
    <text x="150" y="125" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`;
}