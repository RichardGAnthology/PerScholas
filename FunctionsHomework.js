/*Question #5
Write a function that returns the number of arguments 
passed to the function when called.*/

function argus(){
 return arguments.length 
}


/*Question #6
Define a function reverseString that computes the reversal of a string. 
For example, reverseString("jag testar") should return the string "ratset gaj".*/

let word = "eyB"
function reverseString(){
    return word.split("").reverse("").join("")
}

/*Question #7
Write a function findLongestWord that takes an array of words and returns 
the length of the longest one.*/

const words = ["apple", "mangos", "grapes", "pineapple"]
function findLongestWord(words){
    let temp = 0 
    let longestWord = ""
    for (i=0;i<words.length;i++){
        if (words[i].length > temp){
            longestWord=words[i].length
              
    }   
}
return(longestWord)
}
//console.log(findLongestWord(["apple",  "mangos",  "grapes",  "pineapple"]))




/*Question #8
Write a function filterLongWords that takes an array of 
words and a number i and returns the array of 
words that are longer than i characters long.*/


let fruits = ["apple", "mangos", "grapes", "pineapple", "coconut"]
function filterLongWords(fruits){
    let index = 7
    let longWords = ""

    for (let i = 0; i<fruits.length;i++){
        if (fruits[i].length > index){
            longWords+=fruits[i]
    }   
}
return(longWords)
}
//console.log(filterLongWords(["apple",  "mangos",  "grapes",  "pineapple"]))