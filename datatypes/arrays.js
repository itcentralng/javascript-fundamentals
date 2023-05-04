people = ['Amrah', 'Abdulrahman']
randomitems = ['Cake', 5, 1.4, true, false]

console.log(people)

console.log(randomitems.toString().slice(0, 6))
console.log(randomitems.join('*'))
x = randomitems.pop()
y = randomitems.pop()
console.log(randomitems)
randomitems.push('another random item')
console.log(randomitems)

console.log('X: ', x)
console.log('Y:', y)

z = randomitems.shift()
console.log(randomitems)
console.log('Z: ', z)
w = randomitems.unshift('Cake')
console.log(randomitems)
console.log('W:', w)

console.log(randomitems[randomitems.length-1])
randomitems[randomitems.length] = 'Amrah'
randomitems[3] = 'Person'
console.log(randomitems)

// Class Work
// 1. Write 5 example arrays. For each array:
    // a. Print out the number of items in the array
    // b. Add a new element in the array
    // c. Remove the first element in the array and print it out
    // d. Remove the last item and print it out
    // e. update the value at index 2 with 'Fanta'
    // f. Using index, add a new item 'Kunu' to the end of the array