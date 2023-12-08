//Anonymous Function & IIFE

// 1. Print odd numbers in an array
function printOddNumbers(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            console.log(array[i]);
        }
    }
} 

// IIFE for printing odd numbers
(function () {
    printOddNumbers([1, 2, 3, 4]);
})();

// 2. Convert all the strings to title caps in a string array
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

// IIFE for title casing
(function () {
    console.log(titleCase("DEEPIKA IS MY NAME"));
})();

// 3. Sum of all numbers in an array
function sumOfNumbers(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

// IIFE for sum of numbers
(function () {
    console.log(sumOfNumbers([1, 2, 3, 4]));
})();

// 4. Return all the prime numbers in an array
function getPrimeNumbers(numArray) {
    return numArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true;
    });
}

// IIFE for prime numbers
(function () {
    console.log(getPrimeNumbers([1, 2, 3, 4]));
})();

// 5. Return all the palindromes in an array
function isPalindrome(word) {
    let reversed = word.split('').reverse().join('');
    return word === reversed;
}

function getPalindromes(arr) {
    return arr.filter((word) => isPalindrome(word));
}

// IIFE for palindromes
(function () {
    console.log(getPalindromes(["level", "hello", "radar", "world"]));
})();

// 6. Return median of two sorted arrays of the same size
function findMedian(arr1, arr2) {
    let merged = [...arr1, ...arr2];
    let sorted = merged.sort((a, b) => a - b);

    let mid = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
        return sorted[mid];
    }
}

// 7. Remove duplicates from an array
function removeDuplicates(array) {
    return [...new Set(array)];
}

// IIFE for removing duplicates
(function () {
    console.log(removeDuplicates([1, 1, 2, 3, 4]));
})();

// 8. Rotate an array by k times
function reverse(array, li, ri) {
    while (li < ri) {
        let temp = array[li];
        array[li] = array[ri];
        array[ri] = temp;

        li++;
        ri--;
    }
}

// IIFE for rotating array
(function () {
    let array = [1, 2, 3, 4];
    let k = 2;
    k = k % array.length;
    if (k < 0) {
        k += array.length;
    }

    reverse(array, 0, array.length - k - 1);
    reverse(array, array.length - k, array.length - 1);
    reverse(array, 0, array.length - 1);

    console.log(array);
})();

// Arrow Functions

// 1. Print odd numbers in an array using arrow function
const printOddNumbersArrow = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            console.log(array[i]);
        }
    }
};

// Example usage
printOddNumbersArrow([1, 2, 3, 4]);

// 2. Convert all the strings to title caps in a string array using arrow function
const titleCaseArrow = (str) => {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
};

// Example usage
console.log(titleCaseArrow("Deepikashree is my name"));

// 3. Sum of all numbers in an array using arrow function
const sumOfNumbersArrow = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
};

// Example usage
console.log(sumOfNumbersArrow([1, 2, 3, 4]));

// ... (repeat the pattern for other functions)

// 8. Rotate an array by k times using arrow function
const reverseArrow = (array, li, ri) => {
    while (li < ri) {
        let temp = array[li];
        array[li] = array[ri];
        array[ri] = temp;

        li++;
        ri--;
    }
};

// Example usage
(() => {
    let array = [1, 2, 3, 4];
    let k = 2;
    k = k % array.length;
    if (k < 0) {
        k += array.length;
    }

    reverseArrow(array, 0, array.length - k - 1);
    reverseArrow(array, array.length - k, array.length - 1);
    reverseArrow(array, 0, array.length - 1);

    console.log(array);
})();
