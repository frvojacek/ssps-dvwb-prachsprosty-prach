const fs = require('fs');
const path = require('path');
const testPath = path.join(__dirname, '..', 'tests', 'test1.in');
const input = fs.readFileSync(testPath).toString();

let rows = input.split(/\r?\n/)
let sizeX = Number(rows[0][0])
let sizeY = Number(rows[0][2])
let amount = Number(rows[sizeX + 1][0])

let map = rows.slice(1, sizeY + 1).map((row) => row.split(''))

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
