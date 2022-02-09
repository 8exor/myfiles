const uname = document.getElementById("name");
const mail = document.getElementById("email");
const mobile = document.getElementById("phone");
const password1 = document.getElementById("pass1");
const password2 = document.getElementById("pass2");
uname.addEventListener("blur", () => {
    console.log("name is blurred");
    let regex = /([A-Za-z]){3,20}/;
    let str = uname.value;
    //    console.log(regex,str);
    if (regex.test(str)) {
        console.log('it matched');
        uname.classList.remove('is-invalid');
    }
    else {
        console.log('please enter a valid name');
        uname.classList.add('is-invalid');
    }

})

mail.addEventListener("blur", () => {
    console.log("mail is blurred");
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let str = mail.value;
    //    console.log(regex,str);
    if (regex.test(str)) {
        console.log('it matched');
        mail.classList.remove('is-invalid');
    }
    else {
        console.log('please enter a valid name');
        mail.classList.add('is-invalid');
    }

})


mobile.addEventListener("blur", () => {
    console.log("phone is blurred");
    let regex = /^[0-9\-\+]{10}$/;
    let str = mobile.value;
    //    console.log(regex,str);
    if (regex.test(str)) {
        console.log('it matched');
        mobile.classList.remove('is-invalid');
    }
    else {
        console.log('please enter a valid name');
        mobile.classList.add('is-invalid');
    }
    console.log("mobile is blurred");
})


password1.addEventListener("blur", () => {
    console.log("pass1 is blurred");
    
    let regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    let str = password1.value;
    //    console.log(regex,str);
    if (regex.test(str)) {
        console.log('it matched');
        password1.classList.remove('is-invalid');
    }
    else {
        console.log('please enter a valid name');
        password1.classList.add('is-invalid');
    }
    console.log("mobile is blurred");
})




password2.addEventListener("blur", () => {

    console.log("pass2 is blurred");
    
    let regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    let str = password2.value;
    //    console.log(regex,str);
    if (regex.test(str)) {
        console.log('it matched');
        password2.classList.remove('is-invalid');
    }
    else {
        console.log('please enter a valid name');
        password2.classList.add('is-invalid');
    }
    console.log("mobile is blurred");
})

function allowNum(e){
var code= (e.which) ? e.which : e.keyCode;
if(code>30 && (code<48 || code >57)){
    e.preventDefault();
}
}



// console.log(uname,mail,mobile,pass1,pass2);


// function validate(uname,mail,phone,pass1,pass2){
//     var uname= document.getElementById('name');
//     console.log(uname);
//     if (uname==""){
//         document.getElementById("username").innerHTML="** please fill the above field";

// }
// }





function errmail(errmsg, errcode) {

    document.getElementById("alert").innerHTML = errmsg;
    document.getElementById("alert").style.display = "block";
    if (errcode == 0) {
        document.getElementById("alert").className = "alert-danger text-center";

    }
    else {
        document.getElementById("alert").className = "alert-success text-center";
    }
    }


    function submitData() {
        name1 = $('#name').val(),
        email = $('#email').val(),
        phone = $('#phone').val(),
        pass1 = $('#pass1').val(),
        pass2 = $('#pass2').val()
    if (name1 != "" && email != "" && phone != "" && pass1 != "" && pass2 != "") {
        $.ajax({    
            url: "register.php",
            method: "POST",
            data: {
                name1: name1,
                email: email,
                phone: phone,
                pass1: pass1,
                pass2: pass2,
                callmethod: 'hello',

            },




            success: function (abc) {


                var x = JSON.parse(abc);
                var errcode = x.statusCode;
                errmsg = x.msg;



                if (errcode == 0) {
                    errmail(errmsg, 0);
                    console.log('error')
                }
                else {
                    errmail(errmsg, 1);
                    console.log('alright')
                    let redirect= setTimeout(function (){
                        location.replace("http://localhost/projects/js/jslogin/login.html");
                        window.clearTimeout(redirect);

                    },3000)
                }
            },
        })
    }
    else {
        window.alert('please fill all the fields')

    }

}