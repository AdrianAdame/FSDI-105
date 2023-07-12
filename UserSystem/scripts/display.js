function displayUsers(userArray){
    console.log(userArray)

    const TBODY = $("#usersTable tbody")

    userArray.map((user, index)=> {
        let tr = `
        <tr>
            <td>${user.email}</td>
            <td>${user.firstName + " " +user.lastName}</td>
            <td>${user.age}</td>
            ${user.grades.map(grade => {
                return `<td>${grade}</td>`
            })}
            <td>${user.gpa}</td>
        </tr>`

        TBODY.append(tr)
    })
}

function init(){
    let users = readUsers();

    displayUsers(users)
}

window.onload = init;