function max(numbers) {
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

console.log( max([1, 2, 4, 5]) );
console.log( max([5, 2, 7, 1, 6]) );