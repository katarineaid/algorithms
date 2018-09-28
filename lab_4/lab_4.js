const fs = require('fs');
const path = require('path');

const inputFile = path.normalize(__dirname + '/input.txt');
const outputFile = path.normalize(__dirname + '/output.txt');


fs.readFile(inputFile, "utf8", function (err, content) {
  if (err) {
    return err
  }
  let lines = content.split('\n');
  let n = parseFloat(lines[0]);
  let numbers = lines[1].split(' ');
  numbers = stringToNumber(numbers);
  let array = arrayToObject(numbers);
  for (let j = 1; j < n; j++) {
    let i = j;
    let current = array[j];
    while (i > 0 && current[0] < array[i - 1][0]) {
      array[i] = array[i - 1];
      i--;
    }
    array[i] = current
  }

  let poor = array[0];
  let rich = array[n-1];
  let middleNumber = Math.round(n/2)-1;
  let middle = array[middleNumber];

  let response = poor[1] + ' ' + middle[1]+' ' + rich[1];

  fs.writeFile(outputFile, response, function(error){
    if(error) throw error; // если возникла ошибка
    return console.log("Асинхронная запись файла завершена.");
  });
})


function stringToNumber(array) {
  for (let k = 0; k < array.length; k++) {
    array[k] = parseFloat(array[k])
  }
  return array
}

function arrayToObject(array) {
  let arr=[];
  for (let k = 0; k < array.length; k++) {
    arr.push([array[k],k+1]);
  }
  return arr
}