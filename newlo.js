function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "sourjadip" && password == "sourjadipAUV") {
         alert("LOGGED IN SUCCESFULLY");
         window.location.href="https://www.google.com";
        try {
            // window.location.href = "./login.html";
            setTimeout(function(){document.location.href = "https://www.google.com"},500);

        } catch(err) {
            console.log(err);
        }
        // location.
    }
    else {
        alert("FAILED TO LOG IN. PLEASE CHECK YOUR CREDENTIALS");
    }
}