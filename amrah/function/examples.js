
// function name(){
//     console.log("amrah")
// }
// name()

// const names = ()=>{
//     console.log("amrah sali")

// }
// names()

const getWorstStudent=(listOfStudent) =>{
lowestscore =Infinity;    
student =""

for (i=0; i < listOfStudent.length; i++)
if( listOfStudent[i].score < lowestscore){
    lowestscore =listOfStudent[i].score
    student = listOfStudent[i].name
   
    }
    return student

}

students =[
    {name:"aisha", score:0.1},
    {name:"maryam", score:24},
    {name:"nana", score:0.04},
    {name:"sumy", score:90},
]
 let worstStudent = getWorstStudent(students)

console.log(worstStudent)
