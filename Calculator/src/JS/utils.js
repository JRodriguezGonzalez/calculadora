// Function to validate user input 
export function validateInput(input){
    if(isNaN(input)){
        throw new Error ("Invalid input. Please enter a number.");
    }
    return true;
}