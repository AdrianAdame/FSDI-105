function displayUsers(userArray){
    console.log(userArray)

    const TBODY = $("#usersTable tbody")

    userArray.map((user, index)=> {
        let tr = `
        <tr id=user-${index}>
            <td>${user.email}</td>
            <td>${user.firstName + " " +user.lastName}</td>
            <td>${user.age}</td>
            ${user.grades.map(grade => {
                return `<td>${grade}</td>`
            })}
            <td>${Number(user.gpa).toFixed(2)}</td>
        </tr>`

        TBODY.append(tr)

        if(user.gpa < 2){
            $(`#user-${index} td`).addClass("table-danger")
        }
    })
}

function init(){
    let users = readUsers();

    displayUsers(users)
}

window.onload = init;