import { Triangle } from './../src/frontend.js';

describe('Triangle', () => {
    var reusableTriangle;

    beforeEach(() => {
        reusableTriangle = new Triangle(5, 5, 5);
      });

      test('should show how beforeEach() works', () => {
        console.log(reusableTriangle);
      });

    test('should correctly create a triangle object with three lengths', () => {
        reusableTriangle = new Triangle(2, 4, 5);
        expect(reusableTriangle.side1).toEqual(2);
        expect(reusableTriangle.side2).toEqual(4);
        expect(reusableTriangle.side3).toEqual(5);
    });



    test('should correctly determine whether 3 lengths can be made into a triangle', () => {
        reusableTriangle = new Triangle(3, 9, 22);
        expect(reusableTriangle.checkType()).toEqual("not a triangle");
    });

    test('should correctly determine whether three lengths make a scalene triangle', function () {
        reusableTriangle = new Triangle(4, 5, 7)
        expect(reusableTriangle.checkType()).toEqual("scalene triangle");
    });

    test('should correctly determine whether three lengths make an isosceles triangle', () => {
        reusableTriangle = new Triangle(5,5,7)
        expect(reusableTriangle.checkType()).toEqual("isosceles triangle");
      });

});