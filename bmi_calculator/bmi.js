document.getElementById("calculate").addEventListener("click", function() {
    const height=parseFloat(document.getElementById("height").value);
    const weight=parseFloat(document.getElementById("weight").value);
    if(isNaN(height) || isNaN(weight)){
        alert("Please enter a valid number for height and weight.");
        return;
    }
    const heightinmeters=height/100;
    const bmi =weight/heightinmeters**2;
    const result=document.getElementById("result");

    let category="";
    if(bmi<18.5){
        category="Underweight";
    }else if(bmi>=18.5 && bmi<24.9){
        category="Normal weight";
    }
    else if(bmi>=25 && bmi<29.9){
        category="Overweight";
    }
    else{
        category="Obesity";
    }

    result.innerHTML=`Your BMI is ${bmi.toFixed(2)} and you are classified as ${category}.`;
});