class Robot {
  constructor() {
    this.coordinates = [0,0]
    this.bearing = 'north'
  }

  setCoordinates(x,y) {
    this.coordinates = [x,y]
  }

  setBearing(bearing) {
    if (bearing ==='north' || bearing === 'south' || bearing ==='east' || bearing === 'west'){
      this.bearing = bearing
    }
    else {
      throw "Invalid Robot Bearing";
    }
  }

  place(place) {
    this.bearing = place.direction
    this.coordinates = [place.x, place.y]
  }

  turnRight() {
    if(this.bearing === 'north') {
      this.bearing = 'east'
    }
    else if(this.bearing === 'east') {
      this.bearing = 'south'
    }
    else if(this.bearing === 'south') {
      this.bearing = 'west'
    }
    else if(this.bearing === 'west') {
      this.bearing = 'north'
    }
  }

  turnLeft() {
    if(this.bearing === 'north') {
      this.bearing = 'west'
    }
    else if(this.bearing === 'east') {
      this.bearing = 'north'
    }
    else if(this.bearing === 'south') {
      this.bearing = 'east'
    }
    else if(this.bearing === 'west') {
      this.bearing = 'south'
    }
  }

  advance() {
    if(this.bearing === 'north') {
      this.coordinates[1] +=1
    }
    else if(this.bearing === 'east') {
      this.coordinates[0] +=1
    }
    else if(this.bearing === 'south') {
      this.coordinates[1] -=1
    }
    else if(this.bearing === 'west') {
      this.coordinates[0] -=1
    }
  }

  translateInstructions(s) {
    s = s.split("")
    for(let i of s) {
      if (i === "L") {
        this.turnLeft()
      }
      else if (i === "R") {
        this.turnRight()
      }
      else if (i === "A") {
        this.advance()
      }
    }
  }
}
