function addition(a, b) { return a + b }

function subtraction(a, b) { return a - b }

function divide(a, b) { return a / b }

function multiply(a, b) { return a * b }

const operations = {
    addition,
    subtraction,
    divide,
    multiply,
};

const result = operations.addition(5, 5);
console.log(result);
{
    const result = operations.subtraction(5, 5);
    console.log(result);
    {
        const result = operations.divide(5, 5);
        console.log(result);
        {
            const result = operations.multiply(5, 5);
            console.log(result);
        }
    }
}