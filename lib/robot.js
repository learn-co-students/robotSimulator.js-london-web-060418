class Robot {
	//your solution here


  constructor() {
    this.coordinates = [0, 0];
    this.bearing = "north";
    this.directions = ["north", "east", "south", "west"];
  }

  setCoordinates(x, y) {
    this.coordinates[0] = x;
    this.coordinates[1] = y;
  }

  setBearing(bearing) {
      if(this.directions.includes(bearing)) {
        this.bearing = bearing;
      } else {
        console.log(bearing)
        throw new Error("Invalid Robot Bearing");
      }
  }

  place(placement) {
    this.setCoordinates(placement.x, placement.y);
    this.setBearing(placement.direction);
  }

  turnRight() {
    let newIndex = this.directions.findIndex( el => el === this.bearing) + 1;
    console.log(newIndex);
    let newBearing = this.directions[newIndex % this.directions.length];
    this.setBearing(newBearing);
  }

  turnLeft() {
    let currentIndex = this.directions.findIndex( el => el === this.bearing);
    console.log(`Turn Left: Current Index: ${this.directions[currentIndex]}`);
    let calculatedDirection = Math.abs( ((currentIndex - 1) + this.directions.length) % this.directions.length);
    console.log(`Turn Left: Calculated Index: ${this.directions[calculatedDirection]}`);
    this.setBearing(this.directions[calculatedDirection]);
  }

  advance() {
    switch(this.bearing) {
        case this.directions[0]: //north
          this.setCoordinates(this.coordinates[0], this.coordinates[1] + 1)
        break;
        case this.directions[1]: //east
          this.setCoordinates(this.coordinates[0] + 1, this.coordinates[1])
        break;
        case this.directions[2]: //south
          this.setCoordinates(this.coordinates[0], this.coordinates[1] - 1)
        break;
        case this.directions[3]: //west
          this.setCoordinates(this.coordinates[0] - 1, this.coordinates[1])
        break;
      default:
      break;
    } //end of switch
  } //end of method

  translateInstructions(instructions) {
    let instructionsArray = instructions.split("");
    instructionsArray.forEach((element) => {
      switch(element.toLowerCase()) {
        case "l":
          this.turnLeft();
          break;
        case "r":
          this.turnRight();
          break;
        case "a":
          this.advance();
          break;
        default:
        break;
      }
    })
  }

} // end of class
