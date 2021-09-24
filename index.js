// Add your functions here
function map(array, work) {
  let result = [];
  array.forEach((ele) => result.push(work(ele)));
  return result;
}

function reduce(array, work, start) {
  let result;
  if (start) {
    result = start;
    array.forEach((ele) => result = work(ele, result));
  } else {
    result = array[0]
    for (let i = 1; i < array.length; i++) {
        result = work(array[i], result)
    };
  }
  return result;
}
