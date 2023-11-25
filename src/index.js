const fs = require('fs');
const path = require('path');
const testPath = path.join(__dirname, '..', 'tests', 'test1.in');
const input = fs.readFileSync(testPath).toString();

const sizeX = input[0]
const sizeY = input[2]

// Two dimensional map of dust
let map = input.slice(5).split(/\r?\n/, sizeY).map((row) => row.split(''))

function subtractDust() {

}

function addDust() {

}