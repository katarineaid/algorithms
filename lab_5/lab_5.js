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
  let check = [];
  for (let j = 1; j < n; j++) {
    let i = j;
    let arrY = [];
    let current = numbers[j];
    while (i > 0 && current < numbers[i - 1]) {
      numbers[i] = numbers[i - 1];
      numbers[i - 1] = current;
      arrY.push(i);
      i--;
    }
    if (arrY.length) {
      let X = i + 1;
      let Y = arrY.pop() + 1;
      if (X > Y) {
        check.push('Swap elements at indices ' + Y + ' and ' + X + '.')
      } else {
        check.push('Swap elements at indices ' + X + ' and ' + Y + '.')
      }
    }
  }
  check.push('No more swaps needed.');
  let lastLine = numbers.join(' ');
  check.push(lastLine);
  let response = check.join('\n')

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
