// REGISTRATION FORM
function validation(){
    // Define the correct login credentials
    const correctUsername = "admin";
    const correctPassword = "admin";

    //warning for username
     if(document.formfill.username.value==""){
        document.getElementById("warning").innerHTML="Enter Username";
        return false;
     }
     //warning for password
     else if(document.formfill.password.value==""){
        document.getElementById("warning").innerHTML="Enter your Password";
        return false;
     }
     // Check if the login credentials are correct
     else if(document.formfill.username.value === correctUsername && document.formfill.password.value === correctPassword){
        // Redirect to a new HTML page
        window.location.href = "collection.html";
        return false;
     }
     else{
        document.getElementById("warning").innerHTML="Invalid username or password";
        return false;
     }
}