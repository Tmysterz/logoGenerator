const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');

class Shapes {
    constructor(){
        this.color = '';
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
            // input multiple choice question
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
        //   Working on creating the new file and bringing over the html from another js
          .then(() => {
            return writeFile(
                join(__dirname, '..', 'examples', 'logo.svg')
            );
          });
    }

    setColor(color) {
        this.color = color;
    }
}

class Triangle extends Shapes {

    render () {
        return `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`
    }
}

class Square extends Shapes {

    render () {
        return ``
    }
}

class Circle extends Shapes {

    render () {
        return ``
    }
}

module.exports = Shapes