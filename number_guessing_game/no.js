const randomnumber= parseInt(Math.random()*100+1);//generaes random number from 1 to 100

let attempts=0;

function checkguess(){
    const userguess=parseInt(document.getElementById("guess").value);
    const feedback= document.getElementById("feedback");

if(isNaN(userguess)|| userguess < 1 || userguess > 100){

    feedback.textContent="Please guess a number between 1 to 100";
    return;


}

attempts++;
document.getElementById("attempts").textContent="Attempt no:"+attempts;

if(userguess === randomnumber){
    feedback.textContent=`Correct! You have guess the number ${randomnumber} correctly in ${attempts} attempts `
    feedback.style.color="green"
}

if(userguess < randomnumber)
{
    feedback.textContent=`Your guess is low,Try again`
    feedback.style.color="red"
}

if(userguess > randomnumber)
{
    feedback.textContent=`Your guess is high,Try again`
    feedback.style.color="red"
}




    
}

