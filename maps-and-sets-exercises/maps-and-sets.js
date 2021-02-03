/*
Quick Question #1:
What does the following code return?
new Set([1,1,2,2,3,4])
-{1,2,3,4}

Quick Question #2:
What does the following code return?
[...new Set("referee")].join("")
-ref

Quick Question #3:
What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
-{Array(3) => true, Array(3) => false}
*/

//hasDuplicate
function hasDuplicate(arr){
    return new Set(arr).size === arr.length;
}

//vowelCount
function vowel(letter){
    return 'aeiou'.includes(letter)
  }
  
  function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
      let lowercase = char.toLowerCase()
      if(vowel(lowercase)){
        if(vowelMap.has(lowercase)){
          vowelMap.set(lowercase, vowelMap.get(lowercase) + 1);
        } else {
          vowelMap.set(lowercase, 1);
        }
      }
    }
    return vowelMap;
  }