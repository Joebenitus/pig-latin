// Specs
// 1. Behavior: For words beginning with a vowel, add "way" to the end.
// Input: "at enter i"
// Output: "atway enterway iway"

// 2. Behavior: For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".
// Input: "pig latin"
// Output: "igpay  atinlay"

// 3. Behavior: If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!
// Input: "quiet squeal"
// Output: "ietquay ealsquay"

// 4. Behavior: For words beginning with "y", treat "y" as a consonant.
// Input: "yellow yacht"
// Output: "ellowyay achtyay"

// Test1
// Describe: pigLatin()
// Test: "For words beginning with a vowel, it will add "way" to the end."
// Expect(pigLatin("at enter i")).toEqual("atway enterway iway")

// Test 2

// Test 3

// Test 4

//Business Logic
function pigLatin (string) {
  const inputArray = string.toLowerCase().split(" ");
  let newArray = inputArray.map(function(word){
    if (word[0] === "a" || word[0] === "e" || word[0] === "i" || word[0] === "o" || word[0] === "u") {
      return word.concat("way");
    } else {
      return word;
    };
  }); 
  return newArray.join(" ");
};



//User Interface Logic
$(document).ready(function(){
  $("form#pigLatin").submit(function(event){
    event.preventDefault();
    console.log(pigLatin("at enter i cat"));
  });
});
