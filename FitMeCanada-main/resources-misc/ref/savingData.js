/*
shoe size conversion reference chart: (cuz feet are weird)
SHOE SIZE   FEET LENGTH
US          CM 
4           20.8
4.5         21.3
5           21.6
5.5         22.2
6           22.5
6.5         23
7           23.5
7.5         23.8
8           24.1
8.5         24.6
9           25.1
9.5         25.4
10          25.9
10.5        26.2
11          26.7
11.5        27.1
12          27.6

(https://gearup.active.com/POPUP_ShoeSize.htm)
*/ 

//initialize Variables
/*let numericSize1, numericSize2, numericSize3;
let sizeArr1 = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23, s24, s25, s26, s27, s28, s29, s30]
let sizeArr2 = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
let sizeArr3 = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10];
*/

// we need to figure out how to extract info from the size charts files the other team will have for us so we can fill it into the arrays above 
/*
while (exit === 'No') {
  while (['Shoes', 'Tops'].includes(clothingType) != true) {
    let clothingType = prompt('What kind of clothes do you want to look at? (Shoes / Tops): ');
  }

  while (['(Yes / No)'].includes(clothingType) != true) {
    let exit = prompt('Do you want to exit? (Yes / No): ');
  }
  if (exit === 'Yes') { break; }
}


/* function to determine most suitable numeric size category (may need to be repeated many times)
function should be somewhat like    def checkSize()

its late rn and i kinda need to sleep so heres my idea:

since the amount of sizes is inconsistent; for ex. foot sizes has like a bajillion sizes in total, so i declared an array of 30 variables which is more than enough for the sizing of any product

there should also be multiple arrays to hold sizing of all required areas of measurement (the max num of body measurements required for a piece of roots clothing is 3); we can use the first arr for feet length if shoes is the product at hand and the other body parts should be fine with 10 sizes for now

i was thinking we should make the body measurement to size chart comparison function into a for loop so that every iteration it will check the user's measurement against the size chart similar to this: if (sizeArr[current loop iteration] <= chestSize >= sizeArr[(current loop iteration) + 1]); this will go through each index of the arr to compare against the user's measurements and will be much more efficient and it will work without being affected by sizing inconsistencies (num of sizes)

idk js yet so im not comfortable writing this out in acc code but im sure u guys will get my thought process; we have a few more days to write it so its fine */


/*
if (chestSize < xxs) {
  numericSize = 1;
} else if (chestSize > xxs && chestSize < xs) {
  numericSize = 2;
} else if (chestSize > xs && chestSize < s) {
  numericSize = 3;
} else if (chestSize > s && chestSize < m) {
  numericSize = 4;
} else if (chestSize > m && chestSize < l) {
  numericSize = 5;
} else if (chestSize > l && chestSize < xl) {
  numericSize = 6;
} else if (chestSize > xl && chestSize < xxl) {
  numericSize = 7;
} else {
  numericSize = 8;
}
*/


/*  output size should be a numeric size according to the sizing array extracted from sizing charts; it can then be converted back into the corresponding size
it may also be many numeric sizes and we'll need to figure out how to calculate the most optimal size */




//Initialize variables
let chestSize;
let sleeveSize;
let shoeSize;
let userSizes = [chestSize, sleeveSize, shoeSize];
let sizeTypes = ["chestSize", "sleeveSize", "shoeSize"];

let userType;
let uom;

// prompts user for whether they are a new user or not
while (['yes', 'no'].includes(userType) != true) {
  userType = (prompt('are you an existing user? (yes / no) ')).toLowerCase();
}

// when the user has an existing account
if (userType === 'yes') {
  chestSize = localStorage.getItem("chestSize");
  sleeveSize = localStorage.getItem("sleevesSize");
  shoeSize = localStorage.getItem("shoeSize");
  console.log(chestSize, sleeveSize, shoeSize);
} 

// when the user is new
else if (userType === 'no') {
  // prompts user for preferred uom (metric or imperial) until user inputs 'cm' or 'inch'
  while (['cm', 'inch'].includes(uom) != true) {
  uom = (prompt('preferred unit of measurement (cm / inch): ')).toLowerCase();
  }
  // obtains user body measurements
  chestSize = prompt('chest circumference in ' + uom + ': ');
  sleeveSize = prompt('sleeve length in ' + uom + ': ');
  shoeSize = prompt('feet length in ' + uom + ': ');
  // converts measurements to centimeters
  if (uom === 'inch') {
    chestSize = chestSize * 2.54;
    sleeveSize = sleevesSize * 2.54;
    shoeSize = shoeSize * 2.54;
  }
  //set data to the storage
  
  localStorage.setItem("chestSize", chestSize);
  localStorage.setItem("sleeveSize", sleeveSize);
  localStorage.setItem("shoeSize", shoeSize);
  console.log(chestSize, sleeveSize, shoeSize);
  
  /*
  for (let i = 0 ; i < userSizes.length ; i++ ) {
    localStorage.setItem(sizeTypes[i], userSizes[i]);
    userSizes[i] = localStorage.getItem(sizeTypes[i]);
    console.log(userSizes[i]);
  } idk whats wrong with this*/
}

