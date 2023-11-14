const {Triangle, Square, Circle} = require('./shapes.js');

describe('Triangle', () => {
    
    describe('textColor', () => {
        it('should set the text color for a triangle', () => {
            const color = "red"
            const triangle = new Triangle();
            triangle.setTextColor(color)
            expect(triangle.textColor).toEqual(color);
        })
    })

    describe('shapeColor', () => {
        it('should set the shape color for a triangle', () => {
            const color = "red"
            const triangle = new Triangle();
            triangle.setShapeColor(color)
            expect(triangle.shapeColor).toEqual(color);
        })
    })

    describe('logoName', () => {
        it('should set the logo name for a triangle', () => {
            const text = "TMZ"
            const triangle = new Triangle();
            triangle.setText(text)
            expect(triangle.logoName).toEqual(text);
        })
    })
})

describe('Square', () => {
    
    describe('textColor', () => {
        it('should set the text color for a square', () => {
            const color = "red"
            const square = new Square();
            square.setTextColor(color)
            expect(square.textColor).toEqual(color);
        })
    })

    describe('shapeColor', () => {
        it('should set the shape color for a square', () => {
            const color = "red"
            const square = new Square();
            square.setShapeColor(color)
            expect(square.shapeColor).toEqual(color);
        })
    })

    describe('logoName', () => {
        it('should set the logo name for a square', () => {
            const text = "TMZ"
            const square = new Square();
            square.setText(text)
            expect(square.logoName).toEqual(text);
        })
    })
})

describe('Circle', () => {
    
    describe('textColor', () => {
        it('should set the text color for a circle', () => {
            const color = "red"
            const circle = new Circle();
            circle.setTextColor(color)
            expect(circle.textColor).toEqual(color);
        })
    })

    describe('shapeColor', () => {
        it('should set the shape color for a circle', () => {
            const color = "red"
            const circle = new Circle();
            circle.setShapeColor(color)
            expect(circle.shapeColor).toEqual(color);
        })
    })

    describe('logoName', () => {
        it('should set the logo name for a circle', () => {
            const text = "TMZ"
            const circle = new Circle();
            circle.setText(text)
            expect(circle.logoName).toEqual(text);
        })
    })
})