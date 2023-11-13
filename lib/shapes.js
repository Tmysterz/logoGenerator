const inquirer = require('inquirer');
const fs = require('fs');
const { join } = require('path');
const { writeFile } = require('fs/promises');
// const { createLogo } = require('./renderLogo.js');

class Shapes {
    constructor(){
        this.textColor = '';
        this.logoName = '';
        this.shapeColor = '';
    }

    run() {
        return inquirer
          .prompt([
            {
              type: 'input',
              name: 'logoName',
              message: 'Enter up to 3 characters to display on the logo'
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Please enter a color for the text'
            },
            {
                type: 'list',
                message: 'Please choose a shape for the logo',
                choices: ['Circle', 'Triangle', 'Square'],
                name: 'logoShape',
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Please enter a color for the shape'
            },
          ])
          .then((responses) => {


            writeToFile("./examples/logo.svg",createLogo(responses.logoName, responses.textColor, responses.logoShape, responses.shapeColor))
          });
    }
    // code given from tyler
    setTextColor(textColor) {
        this.textColor = textColor;
    }

    setShapeColor(shapeColor) {
        this.shapeColor = shapeColor;
    }

    setText(logoName) {
        this.logoName = logoName;
    }

}

class Triangle extends Shapes {
    render () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoName}</text>

        </svg>`
    }
}

class Square extends Shapes {
    render () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="160" y="100" width="30" height="30" stroke="black" fill="${this.shapeColor}" stroke-width="5"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoName}</text>

        </svg>`
    }
}

class Circle extends Shapes {
    render () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoName}</text>
      
      </svg>`
    }
}

function createLogo(logoName, textColor, logoShape, shapeColor) {

    console.log(logoShape)

    if(logoShape === 'Circle') {
        const circle = new Circle();
        circle.setShapeColor(shapeColor)
        circle.setTextColor(textColor)
        circle.setText(logoName)
        return circle.render();
    }

    if(logoShape === 'Square') {
        const square = new Square();
        square.setShapeColor(shapeColor)
        square.setTextColor(textColor)
        square.setText(logoName)
        return square.render();

    }

    if(logoShape === 'Triangle') {
        const triangle = new Triangle();
        triangle.setShapeColor(shapeColor)
        triangle.setTextColor(textColor)
        triangle.setText(logoName)
        return triangle.render();
    }


    // how do i only output the shape that the user chose
    return ``



}

function writeToFile(fileName, data) {
    
    console.log(data)
    
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('Generated logo.svg!')
    })
}

module.exports = {Shapes, Triangle, Square, Circle}