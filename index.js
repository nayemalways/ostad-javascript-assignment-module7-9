//1. Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.
function calculateDifference(num1, num2){
    return num2 -num1;
}
console.log(calculateDifference(3,6));


//2. Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.
function isOdd(num){
    if(num%2 === 0){
        return true;
    }else{
        return false;
    }
}
console.log(isOdd(1))



//3. Write a function named findMin that takes an array of numbers and returns the smallest number in the array.
function findMin(){
    const arr = [45,25,48,79,36,45,12,10,45,17];
    return Math.min(...arr);
}

console.log(findMin());


//4. Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.
 function filterEvenNumbers(){
    const arr = [45,12,47,14,52,45,12];
    return arr.filter(x => x % 2 === 0);
       
 }

 console.log(filterEvenNumbers());


// 5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.
 function sortArrayDescending(){
    const arr = [45,65,21,30,10,20,45,1,2,45,74,12];
    return arr.sort((x,y) => y - x);
   
 }
 console.log(sortArrayDescending());



 // 6. Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.
 
function lowercaseFirstLetter(text){
    return text.charAt(0).toLowerCase() + text.slice(1);
}

console.log(lowercaseFirstLetter("NAYEM"));


//7. Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string. It should filter vowels from the string.
function countVowels(string){
    let count = 0;
    let arr = string.split('');
    let vowels =["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"] ;
    for(let i = 0; i < string.length; i ++){
        if(vowels.includes(arr[i])){
            count++;
        }
    }
    return count;
}
console.log(countVowels("Full stack web development with MERN batch 7"));


 


// 8) Write a function named findAverage that takes an array of numbers and returns the average of all elements.
function findAverage(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(findAverage([10,30,50]));

 