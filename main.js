/**
 * Repeat 3 times the contents of an array.
 * @param arr - The content of the array.
 * @param times - The number of times it will be repeated (optional, by default it is 3).
 * @returns {Array}
 */

function repeat(arr, times = 3) {
    var result = [];

    for(var i = 0; i < times; i++) {
        result = result.concat(arr);
    }

    return result;
}

/**
 * Reformat a string by removing the vowels and capitalizing the first letter.
 * @param str
 * @returns {string}
 */

function reformat(str) {
    if (typeof str !== 'string') {
        return '';
    }

    str = str.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    str = str.replace(/[aeiou]/gi, '');

    return str;
}

/**
 * Return the next binary number in a array
 * @param num - The binary number.
 * @returns {Array}
 */

function next_binary_number(num) {
  var result = [],
      aux = [],
      times = num.length - 1;

  for(var i = times; i >= 0; --i) {

    aux[times] = 1;

    var sum = num[i] + aux[i];

    if(sum === 2) {
        if(i === 0) {
            result[i] = 0;
            result.unshift(1);
        } else {
            result[i] = 0;
            aux[i-1] = 1;
        }
    } else if(sum === 0) {
        result[i] = 0;
        aux[i-1] = 0;
    } else if(sum === 1) {
        result[i] = 1;
        aux[i-1] = 0;
    }

  }
  
  return result;
}