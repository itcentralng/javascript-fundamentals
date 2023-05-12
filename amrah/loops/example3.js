// For each number between 1 and 20
// print Fizz if the number is divisible by 3 and not 5
// print Buzz if the number is divisble by 5 and not 3
// prtint FizzBuzz if the number is diviisble by both 3 and 5
// print the number otherwise

let n = 20


for ( i=1; i<=n; i+=1){

    if (i % 3 ==0  && i % 5 !=0){
        console.log("fizz")

    }



else if ( i % 5 == 0 && i%3 !=0){

    console.log("Buzz")


}else if (i %3 ==0 &&i  %5 == 0){
    console.log("fizzbuzz")


}else

{
    console.log(i)


}
}


