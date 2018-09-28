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
  let array = stringToNumber(numbers);
  let _array = stringToNumber(numbers);
  let check = [];

  function mergeSort(array, L, R) {

    function mergeSort(array,L, R) {
      console.log('L',L,'R',R);


      if (array.length < 2) {
        return array
      } else {
        let middle = Math.floor(array.length / 2);
        let left = array.slice(0, middle);
        let right = array.slice(middle);
        return merge(mergeSort(left,L,middle ), mergeSort(right, middle,R))
      }
    }

    function merge(left, right) {
      //areaMerge(left, right, _array)
      let i = 0;
      let j = 0;
      let resp = [];
      while (i < left.length || j < right.length) {
        if (j === right.length || (i < left.length && left[i] <= right[j])) {
          resp.push(left[i]);
          i++
        } else {
          resp.push(right[j]);
          j++
        }
      }
      return resp;
    }

    function areaMerge(left, right, array) {
      let f_l = left[0];
      let l_r = right[left.length - 1];
      let indexStart = array.indexOf(f_l);
      let indexFinish = array.indexOf(l_r);
      console.log('indexStart', indexStart, 'indexFinish', indexFinish)
    }

    return mergeSort(array, 0, 0)
  }

  let response = mergeSort(array, 0, 0);


  fs.writeFile(outputFile, response, function (error) {
    if (error) throw error; // если возникла ошибка
    return console.log("Асинхронная запись файла завершена.");
  });
})


function stringToNumber(array) {
  for (let k = 0; k < array.length; k++) {
    array[k] = parseFloat(array[k])
  }
  return array
}
