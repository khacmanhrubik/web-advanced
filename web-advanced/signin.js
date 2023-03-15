let btn = document.getElementById('btn-login')
 btn.onclick = function(){
    let passData = document.getElementById('pass').value
    let emailData = document.getElementById('email').value

    if(localStorage.users){
        let users = JSON.parse(localStorage.users)
        let check = users.map(i => i.email == emailData && i.pass == passData)

        if(check[0] == true){
            alert("Đăng nhập thành công")
            location.replace('index.html')
        }else{
            alert("Tài khoản hoặc mật khẩu không đúng")
        }
        
    }else{
        alert("Tài khoản chưa tồn tại")
    }

    if(nameData.length == 0){
        alert('Vui lòng nhập tên')
    }else{

    }
    location.replace('signin.html')
 }