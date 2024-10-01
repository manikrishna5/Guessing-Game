const max =prompt("Enter the max number");
console.log(max);

const random = Math.floor(Math.random()*max)+1;
let guess = prompt("Guess the number");
while(true){
    if(guess == "quit"){
        console.log("User quit");
        break;
    }
    if(guess == random){
        console.log("Congrats!! You guessed it right, random number was"+ random);
        break;
    } else if(guess<random){
        guess = prompt("Your guess was too small. Try again");
    } else{
        guess = prompt("Your guess was too large. Please Try again");
    }
    // else{
    //     guess = prompt("Your guess was wrong. Please try again");
    // }
}