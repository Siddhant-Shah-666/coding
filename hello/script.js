alert("guess the number");

let b= math.floor(math.random(0,100));
while( true){
   let a = prompt("enter your number here");
   a=number.parseInt(a)
   if(a>b){
   alert("enter smaller number");
   }
   else if(a<b){
     alert("enter bigger number");
   }
    else{
       alert("you have guesses right number");
       break;
    }

}