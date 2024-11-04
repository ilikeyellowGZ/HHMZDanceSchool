function sendMail(event){

    if (event) event.preventDefault();

    let parms = {
        name : document.getElementById("fullName").value,
        surname : document.getElementById("surName").value,
        phoneno : document.getElementById("phoneNo").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value
    }
    console.log(parms)
    emailjs.send("service_ohz7gp9","template_yfu64ch", parms).then(alert("emailhassent"))
}