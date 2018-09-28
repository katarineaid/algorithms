let A = [3, 1, 4, 2, 2];

for (let i = 1; i < A.length; i++) {
  let j = i;
  let temp = A[i];
  let arrY = [];
  while (j > 0 && temp < A[j - 1]) {
    A[j] = A[j - 1];
    A[j - 1] = temp;
    j--
    arrY.push(j)
  }
  if (arrY.length) {
    let X = i + 1;
    let Y = arrY.pop() + 1;
    if (X > Y) {
      console.log('Swap elements at indices ' + Y + ' and ' + X + '.')
    } else {
      console.log('Swap elements at indices ' + X + ' and ' + Y + '.')
    }
  }
}
console.log(A)
