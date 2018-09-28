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
  let check = [1];
  for (let j = 1; j < n; j++) {
    let i = j;
    let current = numbers[j];
    while (i > 0 && current < numbers[i - 1]) {
      numbers[i] = numbers[i - 1];
      i--;
    }
    check.push(i + 1);
    numbers[i] = current
  }

  let newLine_1 = check.join(' ');
  let newLine_2 = numbers.join(' ');
  let response = newLine_1 + '\n' + newLine_2;

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
