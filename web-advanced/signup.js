let btn = document.getElementById('btn-register')
btn.onclick = function () {
    //let nameData = document.getElementById('name').value
    let passData = document.getElementById('pass').value
    let emailData = document.getElementById('email').value

    // alert(name + " " + pass + " " + email)
    if (emailData.length == 0) {
        alert('Tên không được bỏ trống')
    } else {
        if (passData.length == 0) {
            alert('Pass không được bỏ trống')
        } else {
            if (localStorage.users) {
                let users = JSON.parse(localStorage.users)
                let check = users.map(i => i.email == emailData)
                if (check[0] == false) {
                    alert("Tài khoản đã tồn tại")
                } else {
                    users.push({
                        //name: nameData,
                        email: emailData,
                        pass: passData,
                    })
                    let users = JSON.stringify(users)
                    localStorage.setItem("users", users)
                }

            } else {

                localStorage.setItem("users", JSON.stringify(
                    [
                        {
                            //name: nameData,
                            email: emailData,
                            pass: passData,
                        }
                    ]
                ))
            }
            location.replace('signup.html')

        }
    }

}
