// 2d arrays for prelim storage
// topSizes[x][y], x being from 0-6, y being from 0-2
/**
 * y = 0: size
 * y = 1: chest/bust circumference in cm
 * y = 2: sleeve length in cm 
*/

const roots_tops = [
    ["XXS",76.25],
    ["XS",80.0],
    ["S",85.0],
    ["M",90.0],
    ["L",96.25],
    ["XL",103.75],
    ["XXL",111.25],
];
/*

*/
// shoeSizes[x][y], x being from 0 - 11, y being from 0-3
/**
 * y = 0: US
 * y = 1: UK
 * y = 2: ASIA
 * y = 3: EUROPE
 */
const shoeSizes = [
    [5,3,21,35],
    [5.5,3.5,21.5,35.5],
    [6,4,22,36],
    [6.5,4.5,22.5,36.5],
    [7,5,23,37],
    [8,6,34,38.5],
    [8.5,6.5,24.5,38.5],
    [9,7,25,39.5],
    [9.5,7.5,25.5,39.5],
    [10,8,26,40],
    [10.5,8.5,26.5,40.5],
    [11,9,27,41]
];

/*
// needs single file testing perms 
var topSizes = [];
function read(path) {
    const fs = require('fs')
    // reading from file
    fs.readFile(path, 'utf8' , (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        // storing data into a string array
        topSizes = data.split('\n');
        console.log(topSizes);
    })
}
read("./tops.csv");

*/

// womens
{
    const womensDresses = [
        // Size, Numeric Size, Chest/Bust, Waist Circumference, Hip circumference
        [ 'XXS', 0, 76.25, 56.25, 81.25 ],
        [ 'XS', 0, 80.0, 60, 85 ],
        [ 'S', 4, 85.0, 65.0, 90.0 ],
        [ 'M', 8, 90.0, 70.0, 95.0 ],
        [ 'L', 12, 96.25, 76.25, 101.25 ],
        [ 'XL', 16, 103.75, 83.75, 108.75 ],
        [ 'XXL', 20, 111.25, 91.25, 116.25 ]
    ]
    const womensTops = [
        // size, chest/bust circumference, sleeve length
        ['XXS',76.25,78],
        ['XS',80.0,79.5],
        ['S',85.0,81],
        ['M',90.0,82.5],
        ['L',96.25,84],
        ['XL',103.75,85.5],
        ['XXL',111.25,87],
    ]
    const womensBottoms = [
        // Size,Numeric Size,Waist Circumference,Hip circumference
        [ 'XXS', 0, 56.25, 81.25 ],
        [ 'XS', 2, 60, 85 ],
        [ 'S', 4, 65.0, 90.0 ],
        [ 'M', 8, 70.0, 95.0 ],
        [ 'L', 12, 76.25, 101.25 ],
        [ 'XL', 16, 83.75, 108.75 ],
        [ 'XXL', 20, 91.25, 116.25 ]
    ]
    const womensJeans = [
        // Size,Jean Waist Size,Jean Inseam Length
        [ 24, 60, 74 ],
        [ 25, 62.5, 74 ],
        [ 26, 65, 74 ],
        [ 27, 67.5, 74 ],
        [ 28, 70, 74 ],
        [ 29, 72.5, 74 ],
        [ 30, 75, 74 ],
        [ 31, 77.5, 74 ],
        [ 32, 80, 74 ]
    ] 
    const womensSweatpants = [
        // Size,Sweatpants Regular,Sweatpants Short,Sweatpants Tall
        [ 'XXS', 76, 73, 81 ],
        [ 'XS', 76, 73, 81 ],
        [ 'S', 76, 73, 81 ],
        [ 'M', 76, 73, 81 ],
        [ 'L', 76, 73, 81 ],
        [ 'XL', 76, 73, 81 ],
        [ 'XXL', 76, 73, 81 ]
    ]
    const womensShoes = [
        // US, UK, ASIA, EUROPE
        [ 5, 3, 21, 35 ],        
        [ 5.5, 3.5, 21.5, 35.5 ],
        [ 6, 4, 22, 36 ],        
        [ 6.5, 4.5, 22.5, 36.5 ],
        [ 7, 5, 23, 37 ],
        [ 8, 6, 34, 38.5 ],
        [ 8.5, 6.5, 24.5, 38.5 ],
        [ 9, 7, 25, 39.5 ],
        [ 9.5, 7.5, 25.5, 39.5 ],
        [ 10, 8, 26, 40 ],
        [ 10.5, 8.5, 26.5, 40.5 ],
        [ 11, 9, 27, 41 ]
    ]
    const womensHats = [
        // Hat Size, USA, Circumference
        [ 'S', 7, 56 ],
        [ 'M', 7.25, 58 ],
        [ 'L', 7.5, 60 ],
        [ 'XL', 7.75, 62 ],
        [ 'S/M', 7, 56 ],
        [ 'L/XL', 7.5, 60 ],
        [ 'O/S', 7.25, 55 ]
    ]
}
