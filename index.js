function validate(){
    var username=document.getElementById('username').value
    var email=document.getElementById('email').value
    var password=document.getElementById('password').value
    var cnfpassowrord=document.getElementById('cnfpassword').value
    checkusername(username)
    checkemail(email)
    checkpassword(password)
    checkpasswordmatch(password,cnfpassowrord)
}
function checkusername(username){
    if(username.length>7){
        document.getElementById('username').classList.add('success')
        document.getElementById('username').classList.replace('error','success')
        document.getElementById('username_err').innerHTML=""
        
    }
    else{

     document.getElementById('username').classList.add('error')
     document.getElementById('username_err').innerHTML="Username must have at least 8 characters."
    }

}
function checkemail(email){
    if(email.length>7 && email.includes('@gmail')){
        document.getElementById('email').classList.add('success')
        document.getElementById('email').classList.replace('error','success')
        document.getElementById('email_err').innerHTML=""
        
    }
    else{

     document.getElementById('email').classList.add('error')
     document.getElementById('email_err').innerHTML="Email must contains @gmail.com and have at least 8 character long."
    }

}
function checkpassword(password){
    if(password.length>7 && password.includes('.')){
        document.getElementById('password').classList.add('success')
        document.getElementById('password').classList.replace('error','success')
        document.getElementById('password_err').innerHTML=""
        
    }
    else{

     document.getElementById('password').classList.add('error')
     document.getElementById('password_err').innerHTML="password must have . character and at least 8 character long."
    }

}
function checkpasswordmatch(password,cnfpassoword){
    if(cnfpassoword===password && password!==null){
        document.getElementById('cnfpassword').classList.add('success')
        document.getElementById('cnfpassword').classList.replace('error','success')
        document.getElementById('cnfpassword_err').innerHTML=""
        
    }
    else{
     document.getElementById('cnfpassword').classList.add('error')
     document.getElementById('cnfpassword_err').innerHTML="Password and confirm password must match."
    }

}