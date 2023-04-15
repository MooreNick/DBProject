let userLogin = function () {
    let form = document.getElementById("login-form");
    let Username = form.nextElementSibling.namedItem("Username").value;
    let Password = form.nextElementSibling.namedItem("Password").value;
    let credentials = "Username=" + Username + "&Password=" + Password;
    const xml = new XMLHttpRequest();

    xml.onreadystatechange = function () {
        console.log(xml.response);
    };

    xml.open("POST", "login.php");
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.send(credentials);

};


