// Write a function called hasMoreVowels that takes in one argument, word. 
// When the function is called, return true 
// if that word contains more vowels than non-vowels; otherwise, return false.
//  The word will always be a single word, without any punctuation or spaces. 
// It will contain only uppercase and/or lowercase letters.

// Step 1
// Write a function called hasMoreVowels that take an arguments called word
    // Declare an array to hold my vowels
    // Declare a variable to keep count of vowels
    // Declare a variable to hold how many vowels is half the word length 

    // write a for loop that iterates over my word
    // check to see if the current letter is a, e, i, o, u
    // if it is a vowel, increment out counter
    // lets check to see  if our counter is greater than half the world length
    // otherwise, just keep looping


    // return boolean


function hasMoreVowels(word){
   let  lowerCaseWord = word.toLowerCase();
    let vowelsArrray = ['a','e','i','o','u'];
    let vowelCount = 0;
    let vowelsMajority = lowerCaseWord.length / 2;

    for(let i = 0; i < lowerCaseWord.length; i++){
        if(vowelsArrray.includes(word[i])){
            vowelCount++;
        }
    }  if(vowelCount > vowelsMajority){
    
    }
    return false;
}
console.log(hasMoreVowels("moose"))
console.log(hasMoreVowels(mice))