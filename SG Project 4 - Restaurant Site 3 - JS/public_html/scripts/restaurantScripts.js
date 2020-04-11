/* 
SG Self Assessment - Restaurant Site v3
JavaScript Sheet
*/

/*FRONT PAGE IMAGE FUNCTIONS*/
/** fullOpacity()
 * on hover, bring image to full opacity
 * @returns {void}
 */
function fullOpacity()
{
    document.getElementById("frontPageImage").style.opacity="100%";
}

/** restoreOpacity()
 * on mouse out, return to original opacity
 * @returns {void}
 */
function restoreOpacity()
{
    document.getElementById("frontPageImage").style.opacity="50%";
}

/* FORM VALIDATION */
/** validateName()
 * verify if a name is entered
 * @returns {Boolean}
 */
function validateName()
{
    var userName=document.getElementById("name");
    
    if (userName==="") 
    {
        alert("Please enter a contact name");
    } else 
    {
        alert("Thank you " + userName);
    }
}

/** validateEmail()
 * verify if valid email was entered
 * @returns {Boolean}
 */
function validateEmail()
{
    var userEmail=document.getElementById("email");
    
    if (!userEmail.includes("@")) 
    {
        alert("Please enter a valid email");
    } else 
    {
        confirm("Please confirm that your email is: " + userEmail);
    }
}

/** validatedPhone()
 * verify if valid phone number was entered
 * @returns {Boolean}
 */
function validatedPhone()
{
    var userPhone=document.getElementById("phone");
    
    if (userPhone.length!==10 || userPhone.length!==11) 
    {
        alert("Please enter a valid phone number");
    } else 
    {
        confirm("Please confirm that your number is: " + userPhone);
    }
}

/** validate()
 * Validate 
 * @returns {Boolean} - false so page doesn't reload
 */
function validate()
{
    var contactUs=document.forms["contact-us"];
    contactUs.className="needs-validation";
    var userName=document.getElementById("name").value;
    var userEmail=document.getElementById("email").value;
    var userPhone=document.getElementById("phone").value;
    
    //name
    if (userName==="") 
    {
        alert("Please enter a contact name");
    }
    else
    {
        alert("Welcome " + userName + "!");
    }
    
    //email
    if (!userEmail.includes("@")) 
    {
        alert("Please enter a valid email");
    }
    
    //phone
    if (userPhone.length!==10 || userPhone.length!==11) 
    {
        alert("Please enter a valid phone number");
    }
    
    return false;
}