const inquirer = require('inquirer');
const fs = require('fs');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { renderLogo } = require('./renderLogo.js');

class Shapes {
    constructor(){
        this.color = '';
        this.logoInfo = [];
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

            writeToFile("logo.svg",responses)

            // question about the join syntax

            // return writeFile(
            //     join(__dirname, '..', 'examples', 'logo.svg')
            // );
          });
    }

    setTextColor(textColor) {
        this.textColor = textColor;
        console.log(textColor)
    }
}

class Triangle extends Shapes {
    render () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${logoName}</text>

        </svg>`
    }
}

class Square extends Shapes {
    render () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="160" y="100" width="30" height="30" stroke="black" fill="${this.shapeColor}" stroke-width="5"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${logoName}</text>

        </svg>`
    }
}

class Circle extends Shapes {
    render () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${logoName}</text>
      
      </svg>`
    }
}

function writeToFile(fileName, data) {
    
    console.log(data)
    
    fs.writeFile(fileName, "CREATED", (err) => {
        err ? console.error(err) : console.log('Generated logo.svg!')
    })
}

module.exports = Shapes, Triangle, Square, Circle