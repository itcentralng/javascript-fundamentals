name = ["amrah", "jamil"]

// Class Work
// 1. Write 5 example arrays. For each array:
    // a. Print out the number of items in the array
    // b. Add a new element in the array
    // c. Remove the first element in the array and print it out
    // d. Remove the last item and print it out
    // e. update the value at index 2 with 'Fanta'
    // f. Using index, add a new item 'Kunu' to the end of the array

    
    //1
    items = ['musa', 9, 7.33, true]
    food = ["coke","beans", "rice" ,]
    num = [2, 3.44, 65, 33.00, 2]
    colors = ["pink", "green", "purple", "black"]
    anything = ["tea", false, 1, 1.2]

   
    //a

    console.log(items.length)
    console.log(food.length)
    console.log(num.length)
    console.log(colors.length)
    console.log(anything.length)

    //b 
    items.push('shoe')
    console.log(items)

    food.push('stew')
    console.log(food)

    num.push(3)
    console.log(num)

    colors.push('gray')
    console.log(colors)

    anything.push('you')
    console.log(anything)


    //c
    items.shift('musa')
    console.log(items)

    food.shift('coke')
    console.log(food)

    num.shift('2')
    console.log(num)

    colors.shift('pink')
    console.log(colors)
    

    anything.shift('tea')
    console.log(anything)


     // d.
 
     console.log(items.pop())
    
     console.log(food.pop())
     
     console.log(num.pop())
     
     console.log(colors.pop())
     
     console.log(anything.pop())


//e
items[2] = 'Fanta';
console.log(items);

food[2] = 'Fanta';
console.log(food);

num[2] = 'Fanta';
console.log(num);

colors[2] = 'Fanta';
console.log(colors);

anything[2] = 'Fanta';
console.log(anything);

//f
items.push('Kunu');
console.log(items);

food.push('Kunu');
console.log(food);

num.push('Kunu');
console.log(num);

colors.push('Kunu');
console.log(colors);

anything.push('Kunu');
console.log(anything);

    

