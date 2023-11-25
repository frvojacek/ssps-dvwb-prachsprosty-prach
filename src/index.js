const fs = require('fs');
const path = require('path');
const testPath = path.join(__dirname, '..', 'tests', 'test1.in');
const input = fs.readFileSync(testPath).toString();

const sizeX = input[0]
const sizeY = input[2]

// Two dimensional map of dust
let map = input.slice(5).split(/\r?\n/, sizeY).map((row) => row.split(''))

while(map.flat().some((field) => field > 0))
{
  subtractDust()
  addDust()
  printMap()
}

function printMap() {
  map.forEach((row) => {
    console.log(row.join(''))
  })
  console.log()
}

function subtractDust() {
  map.forEach((row, rowIndex) => {
    row.forEach((field, fieldIndex) => {
      if(field > 0) {
        map[rowIndex][fieldIndex]--
      }
    })
  })
}

function addDust() {

}
