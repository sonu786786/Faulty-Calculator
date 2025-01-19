/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let operation = document.getElementById('operation').value;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerText = 'Please enter valid numbers';
        return;
    }

    const faultyOperations = {
        '+': '-',
        '-': '/',
        '*': '+',
        '/': '**',
    };

    // 10% chance of performing faulty calculation
    const random = Math.random();
    if (random <= 0.1) {
        operation = faultyOperations[operation];
    }

    let result;
    try {
        result = eval(`${num1} ${operation} ${num2}`);
    } catch (error) {
        document.getElementById('result').innerText = 'Error in calculation';
        return;
    }

    const message = random <= 0.1 ? 'Faulty result: ' : 'Correct result: ';
    document.getElementById('result').innerText = `${message} ${result}`;
}