function countToFive(){
    for (let i=1; i<6; i+=1){
        console.log(i)
    }
}

const countToSix = ()=>{
    for (let i=1; i<7; i+=1){
        console.log(i)
    }
}

function name(){
    console.log('abdul');
}


function findGreater(param1, param2){
    // returns the greater of the two numbers
    if (param1 > param2){
        console.log(param1,'is greater')
    }else{
        console.log(param2,'is greater')
    }
}

function getGreater(param1, param2){
    if (param1>param2){
        return param1
    }else{
        return param2
    }
}

// const findBestStudent = (listOfStudents)=>{
//     let highestScore = 0
//     let student = ''
//     for (let i=0; i<listOfStudents.length; i+=1){
//         if (listOfStudents[i].score > highestScore){
//             highestScore = listOfStudents[i].score
//             student = listOfStudents[i].name
//         }
//     }
//     return student
// }

// students = [
//     {name:'Abdul', score:20},
//     {name:'Amrah', score:120},
//     {name:'Jamil', score:320},
//     {name:'Mustapha', score:510},
// ]

// let bestStudent = findBestStudent(students)
// console.log(bestStudent);

const findworstStudent = (listOfStudent)=>{
    let lowestScore = Infinity
    let student = ''
    for (let i=0; i<listOfStudent.length; i+=1){
        if (listOfStudent[i].score<lowestScore){
            lowestScore = listOfStudent[i].score
            student = listOfStudent[i].name
        }
    }
    return student
}

students = [
    {name:'Abdul', score:2000},
    {name:'yusuf', score:40000},
    {name:'amrah', score:60000},
    {name:'musty', score:1500},
]

let worstStudent = findworstStudent(students)
console.log(worstStudent);





ahmad = ["Musa"]
listOfStudent = []