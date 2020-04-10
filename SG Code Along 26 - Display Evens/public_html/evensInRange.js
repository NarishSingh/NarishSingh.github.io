/* 
 * Display even numbers in user defined range via a increment
 */

//get and cast user inputs to numbers
/*
 var inputs=document.forms["inputs"];
 var start = Number(document.getElementById("start"));
 var end = Number(document.getElementById("end"));
 var step = Number(document.getElementById("step"));
 var results=document.getElementById("results");
 var displayEvensBtn=document.getElementById("displayEvensBtn");
 */

/** validate()
 * Validate form
 * @returns {Boolean} always false to stop reload
 */
/*
 function validate()
 {
 inputs.className = "needs-validation";
 
 if (!inputs.checkValidity())
 {
 inputs.className = "was-validated";
 return false;
 }
 
 //fill in spans for inputs and results
 document.getElementById("userStart").innerText=start;
 document.getElementById("userEnd").innerText=end;
 document.getElementById("userStep").innerText=step;
 document.getElementById("resultsArray").innerText=evensInStep();
 
 results.style.display="block";
 displayEvensBtn.innerText="New Range";
 
 return false;
 }
 */

/** evensInStep()
 * Push all possible step values in range in an array, then find even step values in range
 * @returns {Array} within range, all even and incremented values
 */
/*
 function evensInStep()
 {
 var stepValues = new Array();
 var evenStepValues = new Array();
 
 for (var i = start; i <= end; i += step)
 {
 stepValues.push(i);
 }
 
 for (var i = start; i <= end; i++)
 {
 if (i % 2 === 0 && i === stepValues[i])
 {
 evenStepValues.push(i);
 }
 }
 
 return evenStepValues;
 }
 */

function calculate()
{
    //get and cast user inputs to numbers
    var start = parseInt(document.getElementById("num1").value);
    var end = parseInt(document.getElementById("num2").value);
    var step = parseInt(document.getElementById("step").value);
    
    //impossible increment
    if(step>end || step<0)
    {
        alert("Impossible increment!!!");
        return;
    }
    //Impossible Range
    if(end<=start)
    {
        alert("Ending number must be more than starting number");
        return;
    }
    if(start%2!==0 && step===2)
    {
        alert("Only odds in output, nothing to show");
        return;
    }
    
    document.getElementById("resultsText").innerHTML = "Here are the even numbers between " + start + " and " + end + " by " + step + " 's:";
    let ans = "";
    for (var i = start; i <= end; i = step + i)
    {
        //concentate strings to add the answer
        if (i % 2 === 0)
        {
            ans = ans + i + "<br>";
        }
    }
//    console.log(ans);
    document.getElementById("answer").innerHTML = ans;

    //calculate
    /*
     resultsArray = evensInStep();
     console.log(resultsArray);
     
     for (var i = 0; i < resultsArray.length; i++)
     {
     document.getElementById("resultsArray").innerText = resultsArray[i];
     }
     */

    //display results
    document.getElementById("results").style.display = "block";
}
