// File displays the sizes the user can fit in
let fitSize = sessionStorage.getItem('fitSize');

if (fitSize === "Sorry, you can't fit that!"){ // User cannot fit into a size
    document.getElementById("result-text").innerHTML = fitSize;
}
else{ // User can fit into a size
    let fitSize = sessionStorage.getItem('fitSize');

    let companyProduct = fitSize.substring(0, fitSize.indexOf(":") + 1) + ' ';
    
    let sizes = fitSize.substring(fitSize.indexOf(":") + 2, fitSize.length);
    
    let rec;
    
    if (sizes.includes(",")){ // User can fit in multiple sizes in theory
        rec = sizes.substring(0, sizes.indexOf(','));
    }
    else{ // User can only fit in 1 size in theory
        rec = sizes
    }
    
    let string = "Here's our reccomendation size: " + rec + ' from ' + companyProduct;
    
    string = string.substring(0, string.length-2);
    
    document.getElementById("result-text").innerHTML = string.trim(); // Tells HTML page to display the string
}

console.log(fitSize);