function login(){
    let users = readUsers();


    let email = $("#loginEmail").val()
    let pass = $("#loginPassword").val()

    if(email == "" || pass == ""){

    }else{
        let finded = false;

        users.forEach(user => {
            if(user.email === email && user.password === pass){
                finded = true;
                return;
            }
        })

        if(!finded){
            $("#notifications").append(`
            <div class="alert alert-danger" role="alert">
                Invaid Credentials
            </div>`)
        }else{
            window.location.href = "users.html"
        }
    }
}

function init(){

    $("#btn-login").on("click", () => {
        login()
    });
}

$(document).ready(init);