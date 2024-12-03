// REGISTRATION FORM
function validation(){
    //warning for username
     if(document.formfill.username.value==""){
        document.getElementById("warning").innerHTML="Enter Username";
        return false;
     }
     //warning for email
     else if(document.formfill.email.value==""){
        document.getElementById("warning").innerHTML="Please Enter the E-mail";
        return false;
     }
     else if(document.formfill.password.value==""){
        document.getElementById("warning").innerHTML="Enter your Password";
        return false;
     }
     else if(document.formfill.password.value.length<6){
        document.getElementById("warning").innerHTML="Combination of at least 6 characters is required";
        return false;
     }
     else if(document.formfill.cpassword.value==""){
        document.getElementById("warning").innerHTML="Confirm  your Password";
        return false;
     }
     else if(document.formfill.password.value!==document.formfill.cpassword.value){
        document.getElementById("warning").innerHTML="Password doesn't match";
        return false;
     }
     else if(document.formfill.password.value==document.formfill.cpassword.value){
        popup.classList.add("open-slide")
        return false;
     }
    
}
var popup=document.getElementById("popup");
function CloseSlide(){
   popup.classList.remove("open-slide")
}



import XLSX from 'xlsx';
// CONTACT US FORM
function submitForm() {
   try {
     // Get form values
     const name = document.getElementById('name').value;
     const email = document.getElementById('email').value;
     const phone = document.getElementById('phone').value;
     const message = document.getElementById('message').value;
 
     // Simple form validation
     if (name === "" || email === "" || phone === "" || message === "") {
       alert("Please fill in all fields.");
       return;
     }
 
     // Email validation
     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
     if (!emailPattern.test(email)) {
       alert("Please enter a valid email address.");
       return;
     }
 
     // Phone validation (simple check for digits)
     const phonePattern = /^\d{10}$/;
     if (!phonePattern.test(phone)) {
       alert("Please enter a valid 10-digit phone number.");
       return;
     }
 
     // Create a data object to simulate submission
     const formData = {
       name: name,
       email: email,
       phone: phone,
       message: message
     };
 
     // Append the form data to an existing Excel file
     const excelFile = XLSX.readFile('contact_form_data.xlsx'); // Read the existing file
     const worksheet = excelFile.Sheets['Contact Form Data']; // Get the worksheet
     const newRow = XLSX.utils.json_to_sheet([formData]); // Convert the formData to a new row
     XLSX.utils.sheet_add_json(worksheet, newRow.data, { header: false, skipHeader: true }); // Append the new row to the worksheet
 
     // Save the updated Excel file
     const excelBlob = XLSX.write(excelFile, { type: 'blob' });
     const url = URL.createObjectURL(excelBlob);
     const a = document.createElement('a');
     a.href = url;
     a.download = 'contact_form_data.xlsx';
     a.click();
 
     console.log("Form submitted successfully with the following data:", formData);
     alert("Thank you! Your message has been submitted successfully and saved to an Excel file.");
 
     // Clear form fields
     document.getElementById('pgContactForm').reset();
   } catch (error) {
     console.error("Error submitting form:", error);
     alert("Error submitting form. Please try again.");
   }
 }