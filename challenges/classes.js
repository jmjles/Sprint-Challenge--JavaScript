// 1. Copy and paste your prototype in here and refactor into class syntax.

/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/

class CuboidMaker2{
    constructor(length,width,height){
        this.length = length;
        this.width = width;
        this.height = height;
    }
    volume = () => this.length * this.width * this.height;
    surfaceArea = () => 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
class CubeMaker extends CuboidMaker2{
    constructor(length){
    super(length);
    }
    volume = ()=> Math.pow(this.length,3);
    surfaceArea = ()=> 6*(Math.pow(this.length,2));
}

  let cuboid2 = new CuboidMaker2(4,5,5);
  let cube = new CubeMaker(4)

  console.log('########## Cuboid ###########')
  console.log(cuboid2.volume()); // 100
  console.log(cuboid2.surfaceArea()); // 130

  console.log('########## Cube ###########')
  console.log(cube.volume());
  console.log(cube.surfaceArea());
    
// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.