
function setNavInfo() {
    // get array of users
    let list = readUsers();
    let count = list.length;

    // update the labels
    $(".menu-info > label").text(count + " users")
}

setNavInfo();