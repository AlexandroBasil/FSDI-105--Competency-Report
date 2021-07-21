const KEY_USERS = 'users';
const KEY_LOGIN = 'login';


function saveUser(user) {
    // load old data
    let data = readUsers();

    // merge
    data.push(user);

    // save
    let val = JSON.stringify(data); // parse into a JSON string
    localStorage.setItem("KEY_USERS", val);
}


function readUsers() {
    let data = localStorage.getItem("KEY_USERS");
    if (!data) {
        return [];
    }
    else {
        let list = JSON.parse(data); // parse string back into object
        return list;
    }
}


function isLoggedIn() {
    let dataStr = localStorage.getItem(KEY_LOGIN);
    if (dataStr) {
        return JSON.parse(dataStr);
    }
    return null;
}
function saveLoggedIn(user) {
    localStorage.setItem(KEY_LOGIN, JSON.stringify(user));
}
function logOut() {
    localStorage.removeItem(KEY_LOGIN)
}


function clearUsers() {
    localStorage.removeItem("KEY_USERS");
}

function clearData() {
    // WARNING: This will clear all data stored in local storage
    localStorage.clear();
    location.reload();
}