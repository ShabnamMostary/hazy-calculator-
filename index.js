/* Our upstream data is inconsistent, so we _intentionally_ accept it and deal with it in the following ways:
* Stringified numbers(eg. `'2'`) should be treated as numbers
  * `NULL` should be treated as zero
    * `undefined` values should be ignored
      * Empty string values(eg. `''`) should be ignored
        * Non - numeric values(eg. `'foo'`) should be ignored */



function calculate(arr) {
  let newarr = []
  let operator = ''
  let result

  for (let i = 0; i < arr.length; i++) {
    if (parseFloat(arr[i])) {
      newarr.push(arr[i])
    } else if (arr[i] === null) {
      newarr.push(0)
    } else if (arr[i] === '+' || arr[i] === '-' || arr[i] === '*' || arr[i] === '/') {
      operator = arr[i]
    }
  }
  if (operator === '+') {
    result = newarr[0] + newarr[1]
  } else if (operator === '-') {
    result = newarr[0] - newarr[1]
  } else if (operator === '*') {
    result = newarr[0] * newarr[1]
  } else if (operator === '/') {
    result = newarr[0] / newarr[1]
  } else {
    result = NaN
  }

  return result
}
module.exports = calculate
