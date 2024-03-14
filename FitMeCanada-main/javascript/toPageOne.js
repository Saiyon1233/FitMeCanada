// File changes the pop-up interface

function toPageOne(){
    
    // If file exists, skip.
    if (localStorage.length === 0){
        location.replace("/html/page1.html"); // There is no saved data, let user enter data
    }
    else{
        location.replace("/html/page2.html"); // There is saved data. Skip page to enter data
    }
}

clearData = () =>{ // Carl: I felt fancy declaring a function like this. Don't be scared of it
    localStorage.clear(); // Clears any data in localStorage
}

document.getElementById('to-page-one').onclick = toPageOne; // Execute function on button click
document.getElementById('clear-data').onclick = clearData; // Execute function on text click