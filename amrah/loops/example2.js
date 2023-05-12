 name = ["ahmad","amrah"]

 for (i=4; i>=0; i-=1 ){

 console.log(name[0][i])
}

p = "Some people are here doing nothing"
vowels = "a,e,i,o,u"

for  (i=0; i<p.length; i+=1){


if (vowels.includes(p[i]) == false && p[i] != ' '){
    console.log(p[i])

    }
}
