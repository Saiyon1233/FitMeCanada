// This file will read the user data file and compare product dimensions

chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    // Important startup materials
    // ----------------------------------------------------------------
    var url = tabs[0].url;
    var fitSize = ""; // Contains the sizes the user can fit in
    var stop; // For data processing
    var supportedPage = true; // Is the user on a supported page?

    // Importing user inputs
    // ----------------------------------------------------------------
    var chestBust = parseInt(localStorage.getItem('chest-bust-size'));
    var waistCircumference = parseInt(localStorage.getItem('waist-circumference'));
    var hipCircumference = parseInt(localStorage.getItem('hip-circumference'));
    var hatCircumference = parseInt(localStorage.getItem('hat-circumference'));
    var shoeSize = parseInt(localStorage.getItem('shoe-size'));

    if (url.toUpperCase().includes('WWW.ROOTS.COM/CA')){ // Roots Compatibility and Data Processing
        // From sizing charts (Note: N/a for Jeans)
        var dress = 'DRESS';
        var fleece = 'FLEECE';
        var top = 'TOP'; // Tops and fleeces are being considered as the same
        var bottom = 'BOTTOM';
        var shoe = 'SHOES';
        var hat = 'HAT';

        // From other situations
        var shirt = 'SHIRT'; // Treated same as top
        var short = 'SHORT'; // Treated same as bottom
        var jacket = 'JACKET'; // Treated the same as top
        var pant = 'PANT' // Treated same as bottom
        var tank = 'TANK' // Treated same as top
        var footwear = 'FOOTWEAR' // Treated same as shoe
        var cap = 'CAP' // Treated same as hat

        // What type of clothing is being analyzed?
        var roots_dress = (url.toUpperCase().includes(dress)) ? true:false;
        var roots_top = (
            url.toUpperCase().includes(fleece) || 
            url.toUpperCase().includes(top) ||
            url.toUpperCase().includes(shirt) ||
            url.toUpperCase().includes(jacket) ||
            url.toUpperCase().includes(tank)
        ) ? true:false;
        var roots_bottom = (
            url.toUpperCase().includes(bottom) ||
            url.toUpperCase().includes(short) ||
            url.toUpperCase().includes(pant)
        ) ? true:false;
        var roots_hat = (
            url.toUpperCase().includes(hat) ||
            url.toUpperCase().includes(cap)
        ) ? true:false;
        var roots_shoe = (
            url.toUpperCase().includes(shoe) ||
            url.toUpperCase().includes(footwear)
        ) ? true:false;

        // Roots Data Arrays
        const roots_dressArr = [
            // Size, Chest/Bust, Waist Circumference, Hip circumference
            ['XXS', 76.25, 56.25, 81.25],
            ['XS', 80.0, 60, 85],
            ['S', 85.0, 65.0, 90.0],
            ['M', 90.0, 70.0, 95.0],
            ['L', 96.25, 76.25, 101.25],
            ['XL', 103.75, 83.75, 108.75],
            ['XXL', 111.25, 91.25, 116.25]
        ];

        const roots_topArr = [
            // Size, chest/bust
            ["XXS",76.25],
            ["XS",80.0],
            ["S",85.0],
            ["M",90.0],
            ["L",96.25],
            ["XL",103.75],
            ["XXL",111.25],
        ];

        const roots_bottomArr = [
            // Size, Waist Circumference, Hip circumference
            ['XXS', 56.25, 81.25],
            ['XS', 60, 85],
            ['S', 65.0, 90.0],
            ['M', 70.0, 95.0],
            ['L', 76.25, 101.25],
            ['XL', 83.75, 108.75],
            ['XXL', 91.25, 116.25]
        ]

        const roots_hatArr = [
            // Hat Size, hat Circumference
            ['O/S', 55],
            ['S', 56],
            ['S/M', 56],
            ['M', 58],
            ['L', 60],
            ['L/XL', 60],
            ['XL', 62]
        ];

        const roots_shoeArr = [5, 5.5, 6, 6.5, 7, 8, 8.5, 9, 9.5, 10, 10.5, 11] // US

        // Data analysis
        if (roots_dress){
            fitSize += 'Roots, dress: ';
            for (var i = 0; i < roots_dressArr.length; i++){
                if (roots_dressArr[i][1] > chestBust && 
                    roots_dressArr[i][2] > waistCircumference && 
                    roots_dressArr[i][3] > hipCircumference
                    ){
                    stop = i;
                    break;
                }
            }
            roots_dressArr.splice(0,stop); // Gets the sizes the user can fit in
            
            for (var i = 0; i < roots_dressArr.length; i++){
                fitSize += roots_dressArr[i][0] + ", "; // Adds to string
            }
        }
        else if (roots_top){
            fitSize += 'Roots, tops: ';
            for (var i = 0; i < roots_topArr.length; i++){
                if (roots_topArr[i][1] > chestBust){
                    stop = i;
                    break;
                }
            }
            
            roots_topArr.splice(0,stop); // Gets the sizes the user can fit in
            
            for (var i = 0; i < roots_topArr.length; i++){
                fitSize += roots_topArr[i][0] + ", "; // Adds to string
            }
        }
        else if (roots_bottom){
            fitSize += 'Roots, bottom: ';
            for (var i = 0; i < roots_bottomArr.length; i++){
                if (
                    roots_bottomArr[i][1] > waistCircumference && 
                    roots_bottomArr[i][2] > hipCircumference
                    ){
                    stop = i;
                    break;
                }
            }
            roots_bottomArr.splice(0,stop); // Gets the sizes the user can fit in
            
            for (var i = 0; i < roots_bottomArr.length; i++){
                fitSize += roots_bottomArr[i][0] + ", "; // Adds to string
            } 
        }
        else if (roots_hat){
            fitSize += 'Roots, hat: ';
            for (var i = 0; i < roots_hatArr.length; i++){
                if (roots_hatArr[i][1] > hatCircumference){
                    stop = i;
                    break;
                }
            }
            roots_hatArr.splice(0,stop); // Gets the sizes the user can fit in
            
            for (var i = 0; i < roots_hatArr.length; i++){
                fitSize += roots_hatArr[i][0] + ", "; // Adds to string
            } 
        }
        else if (roots_shoe){
            fitSize += 'Roots, shoe: ';
            for (var i = 0; i < roots_shoeArr.length; i++){
                if (roots_shoeArr[i] >= shoeSize){
                    stop = i;
                    break;
                }
            }
            roots_shoeArr.splice(0,stop); // Gets the sizes the user can fit in
            
            for (var i = 0; i < roots_shoeArr.length; i++){
                fitSize += roots_shoeArr[i] + ", "; // Adds to string
            } 
        }
        else{
            supportedPage = false; // User is on an unsupported product
        }
    }
    else{
        supportedPage = false; // User is on an unsupported webpage
    }

    // Webpage verification and data results:
    // ----------------------------------------------------------------
    if (supportedPage){ // User is on a supported page
        sessionStorage.setItem('fitSize', fitSize.substr(0, (fitSize.length - 2)));

        if (stop === undefined){ // User cannot fit...
            sessionStorage.clear();
            fitSize = "Sorry, you can't fit that!"
            sessionStorage.setItem('fitSize', fitSize);
        }

        location.replace("/html/page3.html"); // Displays the results
    }
    else{ // User is not on a supported page
        location.replace('/html/page-false.html');
    } 
});