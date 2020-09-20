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