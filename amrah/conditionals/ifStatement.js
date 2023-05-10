name1 = "amrah"
name2 = "mr tee"
name3 = "abdurrahman"

if (name1 > name2){
    console.log("amrah is taller than mr tee")
}else if (name3 > name2){
    console.log("Abdurrahman is taller than mr tee")

}else{
    console.log("mr tee  is taller then amrah and abdurrahman")
}

switch (2) {
    case true:
        console.log("yes!")
        break

    case false:
        console.log("nah!")
        break

    default:
        console.log("okay")
}

num = 3
num2 = 8
greater = num > num2?  num:num2
console.log(greater)


friuts = ["apples", "grapes","oranges"]
//
 console.log(friuts.includes("apples"))

 if (friuts.includes("apples")){
    console.log("we are munching some apple")


 }else{
    console.log("we are hungry")

 }

 switch (friuts.includes("apple")){
    case true:
        console.log("we are munching some apple")
        break  
    case false:
        console.log("we are hungry")
        break

    default:
        console.log("something went wrong")

 }

