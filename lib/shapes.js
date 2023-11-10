const inquirer = require('inquirer');
const { join } = require('path');

class Shapes {
    constructor(){
        this.color = '';

    }
    setColor(color) {
        this.color = color;
    }
}

class Triangle extends Shapes {

    render () {
        return `
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        `
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

module.exports = {Shapes, Triangle, Square, Circle}