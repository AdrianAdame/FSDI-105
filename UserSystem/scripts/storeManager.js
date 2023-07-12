const USER_KEY = "users";

function saveUser(user){
    let currentUsers = readUsers();
    currentUsers.push(user);
    saveUsers(currentUsers);
}

function readUsers(){
    let currentUsers = JSON.parse(localStorage.getItem(USER_KEY)) || [];
    return currentUsers;
}

function saveUsers(users){
    localStorage.setItem(USER_KEY, JSON.stringify(users));
}