function merge(arr_left, arr_right) {
  let left = arr_left.array;
  let right = arr_right.array;
  let i = 0;
  let j = 0;
  let count = 0;
  let resp = [];
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      resp.push(left[i++]);
    } else {
      resp.push(right[j++]);
      count = count+left.length - i
      console.log('count', count)
    }
  }
  let response = resp.concat(left.slice(i).concat(right.slice(j)))

  return { array: response, count: count };
}

function mergeSort(arr) {
  let array = arr.array;
  let count = arr.count;
  if (array.length === 1) {
    return { array, count }
  } else {

    let middle = Math.floor(array.length / 2);
    let left = mergeSort({ array: array.slice(0, middle), count: count });
    let right = mergeSort({ array: array.slice(middle), count: count });
    let result = merge(left, right);
    let n_count = left.count + right.count + result.count;
    let n_array = result.array;
    return { array: n_array, count: n_count }
  }
}


function count_inversion(array) {
  return mergeSort({ array, count: 0 })
}

console.log('mergeSort', count_inversion([4, 1, 3, 2, 9, 1]))
