

function login() {
    let email = $("#txtEmail").val();
    let password = $("#txtPassword").val();

    console.log(email, password);

    let usersList = readUsers();
    let found = false;

    for(var i = 0; i < usersList.length; i++) {
        let user = usersList[i];

        if ( user.email === email && user.password === password ) {
            found = true;
            console.log("You are now logged in!");
            // SEND USERS TO ANOTHER PAGE
            saveLoggedIn(user)
            setTimeout( function() {
                window.location = "users.html"
            }, 800)
        }
    }

    if ( !found ) {
        console.log("Invalid Credentials!");
        $("#alertError").removeClass("hide").fadeOut( 4500 );
        setTimeout( function() {
            $("#alertError").addClass("hide");
        }, 4600 )
    }
}

function showProperForm() {
    // DATA LOADING
    let currentUser = isLoggedIn();
    if ( currentUser ) {
        // logged in
        $("#loggedIn").removeClass("hide"); // $("#loggedIn").show();
        $("#needLogin").addClass("hide"); // $("#needLogin").hide();
        $("#uList").removeClass("hide");

        $("#hEmail").text( currentUser );

    } else {
        // !logged in
        $("#needLogin").removeClass("hide");
        $("#loggedIn").addClass("hide");
        $("#uList").addClass("hide");

        
    }
}

function init() {
    console.log("Home Page")

    showProperForm();

    //HOOK EVENTS
    $("#btnLogin").click( login )
    $("#btnLogOut").click( function() {
        logOut();
        showProperForm();
    })
}


window.onload = init();