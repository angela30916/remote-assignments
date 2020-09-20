let html = `
<pre>
<h1>Assignment 1：Function and Array</h1>
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

<h1>Assignment 2：Object</h1>
function calculate(args) {
    let result;
    if (args.op === "+") {
        result = args.n1 + args.n2;
    } else if (args.op === "-") {
        result = args.n1 - args.n2;
    } else {
        result = "Not supported";
    }
    return result;
}

// Solution 1
console.log( calculate(
    {
      op: '-',
      n1: 10,
      n2: 5
    }
  ) );

// Solution 2
class args {
    constructor(op, n1, n2) {
        this.op = op;
        this.n1 = n1;
        this.n2 = n2;
    }
}
console.log( calculate(new args('-', 10, 5)) );

<h1>Assignment 3：Function, Array, and Object</h1>
function avg(data) {
    let totalPrice = 0;
    for (let i = 0; i < data.products.length; i++) {
        totalPrice += data.products[i].price;
    }
    return (totalPrice / data.size);
}

console.log(
    avg( {
        size: 3,
        products: [
            {
                name: "Product 1",
                price: 100
            },
            {
                name: "Product 2",
                price: 700
            },
            {
                name: "Product 3",
                price: 250
            }
        ]
    } )
);

<h1>Assignment 5：Algorithm Practice</h1>
function twoSum(nums, target) {
    let len = nums.length;
    for (let i = 0; i < len-1 ; i++) {
        for (let j = len-1; j > i; j--) {
            if (nums[i] + nums[j] === target) {
                return \`[\${i}, \${j}]\`;
            }
        }
    }
    return \`target error!\`;
}

console.log( twoSum([2, 7, 11, 15], 9) );
console.log( twoSum([2, 7, 11, 15], 13) );
console.log( twoSum([2, 7, 11, 15], 26) );
console.log( twoSum([2, 7, 11, 15], 30) );
</pre>
`;
document.querySelector('main').innerHTML = html;