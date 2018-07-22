const directions = ["north", "east", "south", "west"];

class Robot {
  constructor(name, coordinates = [0, 0], bearing = 'north') {
    this.name = name;
    this.coordinates = coordinates;
    this.bearing = bearing;
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y];
  }

  setBearing(bearing) {

    if (directions.includes(bearing)) {
      this.bearing = bearing;
    } else {
      throw "Invalid Robot Bearing"
    }
  }

  place(obj) {
    this.setCoordinates(obj['x'], obj['y']);
    this.setBearing(obj['direction']);
  }

  turnRight() {
    this.bearing = directions[(directions.indexOf(this.bearing) + 1) % 4]
  }

  turnLeft() {
    this.bearing = directions[(directions.indexOf(this.bearing) + 3) % 4]
  }

  advance() {
    switch (this.bearing) {
      case "north":
        this.coordinates = [this.coordinates[0], this.coordinates[1] + 1]
        break;
      case "east":
        this.coordinates = [this.coordinates[0] + 1, this.coordinates[1]]
        break;
      case "south":
        this.coordinates = [this.coordinates[0], this.coordinates[1] - 1]
        break;
      case "west":
        this.coordinates = [this.coordinates[0] - 1, this.coordinates[1]]
        break;
    }
  }

  translateInstructions(instructions) {
    let instruct = instructions.split("");
    for (let letter of instruct) {
      switch (letter) {
        case "L":
          this.turnLeft();
          break;
        case "R":
          this.turnRight();
          break;
        case "A":
          this.advance();
          break;
      }
    }
  }


}
