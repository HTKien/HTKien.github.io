

function loadCapt(){
    let capt = Math.floor(Math.random() * 1000000);
    document.getElementById('show-capt').innerHTML = capt;



}
loadCapt(); 
document.getElementById('reload-captcha').onclick = loadCapt; 

document.querySelector('.btn-submit').onclick = function(){
    let count_username =0; 
    let count_password = 0;
    let count_capt = 0; 
    let username = document.getElementById('username').value; 
    let password = document.getElementById('password').value; 
    let capt = document.getElementById('verify').value; 

    
        
    if(username ===''){
        document.getElementById('username-error').innerHTML = 'Tên đăng nhập không được để trống!';
        document.getElementById('username').style.border = '1px solid red';
        count_username = 1; 


    }else{
        let valid = false;

        var atposition = username.indexOf("@");
        var dotposition = username.lastIndexOf(".");
        if (atposition < 1 || dotposition < (atposition + 2)
                || (dotposition + 2) >= username.length) {
            valid= false; 

        }else{
            valid = true; 
        }

        if(valid){
        document.getElementById('username-error').innerHTML = '';
        document.getElementById('username').style.border = '1px solid ';
        count_username = 0;

            
        }else{
        document.getElementById('username-error').innerHTML = 'Email không đúng định dạng!';
        document.getElementById('username').style.border = '1px solid rgb(160, 154, 154)';
        count_username = 1; 



        }


    }
    if(password===''){
        document.getElementById('password-error').innerHTML = 'Mật khẩu không được để trống!';
        document.getElementById('password').style.border = '1px solid red';
        count_password = 1; 



    }else{
        if(password.length <2){
        document.getElementById('password-error').innerHTML = 'Mật khẩu không ít hơn 2 kí tự!';
        document.getElementById('password').style.border = '1px solid red';
        count_password = 1; 



        }else if(password.length >20){
        document.getElementById('password-error').innerHTML = 'Mật khẩu không lớn hơn 20 kí tự!';
        document.getElementById('password').style.border = '1px solid red';
        count_password = 1; 



        }else{
        document.getElementById('password-error').innerHTML = '';
        document.getElementById('password').style.border = '1px solid rgb(160, 154, 154)';
        count_password = 0;


        }
    }
    if(capt===''){
        document.getElementById('capt-error').innerHTML = 'Mã xác thực không được để trống!';
        document.getElementById('verify').style.border = '1px solid red';
        count = 1; 



    }else{
        let capt_value = document.getElementById('show-capt').innerHTML;
        if(capt_value===capt){
            document.getElementById('capt-error').innerHTML = '';
            document.getElementById('verify').style.border = '1px solid rgb(160, 154, 154)';
            count_capt = 0; 



        }else{
            document.getElementById('capt-error').innerHTML = 'Mã xác thực không trùng khớp!';
            document.getElementById('verify').style.border = '1px solid red';
            count_capt = 1; 



        }
        


    }
    if(count_username===0&&count_password===0&&count_capt===0){
        window.location= "./login-success.html";
    }

    

  
}
$("#password").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#btn").click();
    }
});
$("#username").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#btn").click();
    }
});


$("#verify").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#btn").click();
    }
});
