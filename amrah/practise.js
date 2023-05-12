
alphabet = "abcdefghijklmnopqrstuvwxyz"

console.log(alphabet.charAt(24))

for (i = 0; i<alphabet.length; i++){
    console.log(alphabet[i].toUpperCase())
}

//Write a loop that prints the numbers from 1 to 10.

 for(i=1; i<=10; i++){
     console.log(i)
}

//Write a loop that calculates the sum of all even numbers between 1 and 20.

n = 0
for (i =0 ; n<=5; i++ ){
 if (i %2 ==0){ 
    n +=i; 
}
}
console.log(n)

for(i=1;i<=10; i++){
n =""
    for (j =1; j<=i; j++)
    n +="*"
console.log(n)
}

//Write a loop that counts the number of vowels (a, e, i, o, u) in a given string.

name = "amrah"
vowels = ['a', 'e', 'i', 'o', 'u'];
vowelnum = 0;


for (i=0;i<name.length;i++){


if (vowels.includes(name[i])) {
    vowelnum++;
    
}
}
console.log(vowelnum)

//Write a loop that counts the number of consonants in a given string.

vowels = ['a', 'e', 'i', 'o', 'u'];
consonantsnum = 0
for (i=0; i<name.length; i++){
    if (vowels.includes(name[i])){
        
        consonantsnum++;
    }
}
console.log(consonantsnum)




