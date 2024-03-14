// function to selectively clear fields without valid input
function clearField(id) {
    document.getElementById(id).value = '';
}

// This file will take user input and write a file, saving data. Going to need to move page.
function runTakeUserInputAndWriteFile() {
    const chestBust = parseInt(document.getElementsByName("chest-bust-size")[0].value); // Retrieves form input
    const waistCircumference = parseInt(document.getElementsByName("waist-circumference")[0].value);
    const hipCircumference = parseInt(document.getElementsByName("hip-circumference")[0].value);
    const hatCircumference = parseInt(document.getElementsByName("hat-circumference")[0].value);
    const shoeSize = parseInt(document.getElementsByName('shoe-size')[0].value);

    // data validation checking:
    /*
    use a var bool to determine whether each measurement in each field is valid/within range (in the else of each, switch to false)
    if the var is false, display a message asking to enter a valid measurement in each field
    */
   // Data validation
    var validEntry = true;
    const errorMessage = 'Please enter a valid measurement in each field!';

    if (chestBust>=30 && chestBust<=500) { // If user only entered numbers && making sure the numbers are in range
        // Saving to local storage
        localStorage.setItem("chest-bust-size", chestBust);       
    } 
    else { // User inputted a non-numeric character
        validEntry = false;
        clearField('chest-bust-size');
    }

    if (waistCircumference>=30 && waistCircumference<=500) {// If user only entered numbers && making sure the numbers are in range
        // Saving to local storage
        localStorage.setItem("waist-circumference", waistCircumference);
    } 
    else {
        validEntry = false;
        clearField('waist-circumference');
    }

    if (hipCircumference>=30 && hipCircumference <=500) {// If user only entered numbers && making sure the numbers are in range
        // Saving to local storage
        localStorage.setItem("hip-circumference", hipCircumference);
    } 
    else {
        validEntry = false;
        clearField('hip-circumference');
    }

    if(hatCircumference>=30 && hatCircumference<=500) {// If user only entered numbers && making sure the numbers are in range
        // Saving to local storage
        localStorage.setItem("hat-circumference", hatCircumference);
    }
    else{
        validEntry = false;
        clearField('hat-circumference');
    }

    if(shoeSize>=1 && shoeSize<=15) {// If user only entered numbers && making sure the numbers are in range
        // Saving to local storage
        localStorage.setItem("shoe-size", shoeSize);
    }
    else{
        validEntry = false;
        clearField('shoe-size');
    }

    // ensuring all data is valid before the calculation
    if (validEntry === false) {
        document.getElementById('p1').innerHTML = errorMessage;
    } else {
        location.replace('/html/page2.html');
    }

}

// Click submit if Enter is pressed
function listenForEnter(e) {
    if (e.code === 'Enter') {
        document.getElementById("submit").click(); 
    }
}
document.getElementById("chest-bust-size").addEventListener("keyup", listenForEnter);
document.getElementById("waist-circumference").addEventListener("keyup", listenForEnter);
document.getElementById("hip-circumference").addEventListener("keyup", listenForEnter);
document.getElementById("hat-circumference").addEventListener("keyup", listenForEnter);
document.getElementById("shoe-size").addEventListener("keyup", listenForEnter);

// Execute function on button click
document.getElementById('submit').onclick = runTakeUserInputAndWriteFile; 

/** Code below not necessary, inputs will always be numbers
function hasNumber(str) { // Returns true if the string contains only numbers
    return /\d/.test(str);
}
*/