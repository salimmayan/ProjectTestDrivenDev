import { Triangle } from './../src/frontend.js';

describe('Triangle', () => {

  test('should correctly create a triangle object with three lengths', () => {
    var triangle = new Triangle(2,4,5);
    expect(triangle.side1).toEqual(2);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).toEqual(5);
  });

  test('should correctly determine whether 3 lengths can be made into a triangle', () => {
      var notTriangle = new Triangle(3,9,22);
      expect(notTriangle.checkType()).toEqual("not a triangle");
  });
});