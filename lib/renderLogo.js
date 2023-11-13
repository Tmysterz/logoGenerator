const {Triangle, Circle, Square} = require('./shapes');



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

module.exports = { createLogo }