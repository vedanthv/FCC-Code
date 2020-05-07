function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const arr = countdown(n - 1);
        arr.unshift(n);
        return arr;
    }
}

/*As mentioned in the previous challenge, there will be a base
case.The base
case tells the recursive
function when it no longer needs to call itself.It is a simple
case where the
return value is already known.There will also be a recursive call which executes the original
function with different arguments.If the
function is written correctly, eventually the base
case will be reached.

For example, say you want to write a recursive
function that returns an array containing the numbers 1 through n.This
function will need to accept an argument, n, representing the final number.Then it will need to call itself with progressively smaller values of n until it reaches 1. You could write the
function as follows:

    function countup(n) {
        if (n < 1) {
            return [];
        } else {
            const countArray = countup(n - 1);
            countArray.push(n);
            return countArray;
        }
    }
console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]
At first, this seems counterintuitive since the value of n decreases, but the values in the final array are increasing.This happens because the push happens last, after the recursive call has returned.At the point where n is pushed into the array, countup(n - 1) has already been evaluated and returned[1, 2, ..., n - 1].*/