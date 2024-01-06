
document.addEventListener("DOMContentLoaded", function () {

    var contactForm = document.getElementById("contact-form");


    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;


        alert("Data submitted successfully:\nName: " + name + "\nEmail: " + email + "\nMessage: " + message);


        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    });
});

