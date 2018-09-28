const fs = require('fs');
const path = require('path');

const inputFile =path.normalize(__dirname + '/input.txt');
const outputFile =path.normalize(__dirname + '/output.txt');


  fs.readFile(inputFile,"utf8", function (err, content) {
    if (err) {
      return err
    }
    let numbers = content.split(' ');
    let sum = parseFloat(numbers[0])+parseFloat(numbers[1])*parseFloat(numbers[1]);
    fs.writeFile(outputFile, sum, function(error){
      if(error) throw error; // если возникла ошибка
      return console.log("Асинхронная запись файла завершена.");
    });
  })


