let emailError = document.getElementById('email-error');

function validateEmail(){
    let email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'email er nødvendig'
        return false;
    }
    // hen vser der skal tastetes bogstaver og . _ og tal og så skal der være et @ og der efter bogstaver og så et . og der efter mellem 2-6 bogstaver
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,6}$/)){
        emailError.innerHTML = 'email skal indholde @'
        return false;
    }
    
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm(){
    // checker at alle felter er ud  fyldt 
    if(!validateEmail()){
        // vis ikke alle felter er udfyld bliver texte laved til et block så den kan ses
        submitError.style.display = 'block';
        submitError.innerHTML = 'udfyld overstående felter'
        setTimeout(function(){submitError.style.display = 'none';}, 100)
        return false;
    }
}