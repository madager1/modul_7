function getUniqueSortedNumbers(arr) {
    const uniqueNumbers = [...new Set (arr)];
    uniqueNumbers.sort((a, b) => a - b);
    return uniqueNumbers;
}

const numbers = [2, 5, 3, 1, 4, 3, 6, 8, 7];
const uniqueSortedNumbers = getUniqueSortedNumbers(numbers)

console.log(uniqueSortedNumbers)