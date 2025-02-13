// import functions and util function
import { add, substract, multiply, divide } from "./operations";
import { validateInput } from "./utils";

document.addEventListener('DOMContentLoaded', () =>
{
    const resultElement = document.getElementById('result');
    const num1Input = document.getElementById('a');
    const num2Input = document.getElementById('b');
    const operationSelect = document.getElementById('operation');

    document.getElementById('calculate').addEventListener('click', ()=>
    {
        try{
            // asign inputs
            const a = num1Input.value;
            const b = num2Input.value;
            const operation = operationSelect.value;

            // validate inputs
            validateInput(num1Input);
            validateInput(num2Input);

            let result;

            switch(operation){
                case 'add':
                    result = add(a, b);
                    break;
                case 'substract':
                    result = substract(a, b);
                    break;
                case 'multiply':
                    result = multiply(a, b);
                    break;
                case 'divide':
                    result = divide(a, b);
                    break
                default:
                    result = 'Invalid operation';
            }
            resultElement.textContent = 'Result ${result}'
        }catch(error)
        {
            resultElement.textContent = 'Error: ${error.message}';
        }
    });
});