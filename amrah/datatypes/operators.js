// Assignment
// 1. Create two variables one for array and one for string:
//      a. Use the right method to:
//          i. convert the array to string
//          ii. convert the string to array
//      b. Compare the values in the two variables and print the result
//      c. Check if the first element in the array is the same as the first
//          character in your string
// 2. Create a variable:
//      i. holding the following information about a student
//          a. name
//          b. age
//          c. class
//          d. score
//      ii. print out a statement like this for the student:
"Hi my name is Haruna, I am 20 years old. I am currently in primary 2 with 20 points"



// 1.

array = [1,2,3,4.5]

string = "musa kabir"


console.log(array)
//i
console.log(array.toString())


//ii
console.log(parseInt('musa kabir'))


//
console.log(array == string)
console.log(array === string)
console.log(array != string)
console.log(array !== string)

if (array.toString() == string) {
    console.log("equal");
  } else {
    console.log("not equal");
  }




  if (array[0] == string[0]) {
    console.log('same as the first character');
  } else {
    console.log('notsame as the first character');
  }


  // 2
   student = {
    name: "amrah sali", age: 17, class: "primary 1",score: 80}
  //ii
  console.log("Hi my name is "+student.name+", I am " +student.age+" years old. I am currently in "+ student.class+"  with "+student.score+" points"
  );
  



