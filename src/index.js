const fs = require('fs');
const path = require('path');
const testPath = path.join(__dirname, '..', 'tests', 'test1.in');
const input = fs.readFileSync(testPath).toString();

let rows = input.split(/\r?\n/).filter(n => n)
let size = rows[0].split(' ')
let sizeX = parseInt(size[0]), sizeY = parseInt(size[1])
let amount = parseInt(rows[sizeY + 1])

let map = rows.slice(1, sizeY + 1).map((row) => row.split('').slice(0, sizeX).map(Number))
let additionInstructions = rows.slice(sizeY + 2, sizeY + amount + 2).map((row) => row.split(' ').map(Number))
additionInstructions.sort((a, b) => a[0] - b[0])

let iteration
for (iteration = 0; map.flat().some((field) => field > 0) || additionInstructions.length; iteration++) {
  subtractDust()
  addDust()
  printMap()
  if (map.flat().some((field) => field > 0) || additionInstructions.length)
    console.log()
}

function printMap() {
  map.forEach((row) => {
    console.log(row.join(''))
  })
}

function subtractDust() {
  map.forEach((row, rowIndex) => {
    row.forEach((field, fieldIndex) => {
      if (field > 0) {
        map[rowIndex][fieldIndex]--
      }
    })
  })
}

function addDust() {
  if (additionInstructions.length == 0 || additionInstructions[0][0] != iteration) return
  let currentInstruction = additionInstructions.shift()
  if (iteration == 0) return
  let x = parseInt(currentInstruction[1])
  let y = parseInt(currentInstruction[2])
  let count = parseInt(currentInstruction[3])

  for (let a = y - count + 1; a < y + count; a++) {
    if (map[a] === undefined) continue
    for (let b = x - count + 1; b < x + count; b++) {
      if (map[a][b] === undefined) continue
      let newValue = Math.abs(y - a) > Math.abs(x - b) ? count - Math.abs(y - a) : count - Math.abs(x - b)
      if(map[a][b] + newValue > 9)
        map[a][b] = 9
      else
        map[a][b] += newValue
    }
  }

  addDust()
}
