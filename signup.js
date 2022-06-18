
let form=document.getElementById("form")
// form.addEventListener("submit",myfun)
// let userdata=JSON.parse(localStorage.getItem("user")) || [];
// console.log(userdata)
// function myfun()
// {
//     event.preventDefault();

//     let obj={
//         email:form.mail.value,
//         passwd:form.passwd.value,
//         repasswd:form.repasswd.value,
//         captcha:form.captcha.value,
//         checkbox:form.check.value,
//     }
//     // userdata.push(obj)
//     // localStorage.setItem("user",JSON.stringify(userdata));
// if(obj.passwd == obj.repasswd && obj.checkbox =="false" )
// {
//     userdata.push(obj)
//     localStorage.setItem("user",JSON.stringify(userdata));
//     alert("Account has been created")

// }
// else if(obj.passwd != obj.repasswd)
// {
//     alert("wrong password, Eneter valid password")
// }
// // else if(obj.checkbox ==null)
// // {
// //     alert("Ensure Checkbox Tick")
// // }

// }
form.addEventListener("submit",function(event){
    event.preventDefault();

    let obj={
        email:form.mail.value,
        passwd:form.passwd.value,
        repasswd:form.repasswd.value,
        captcha:form.captcha.value,
        // checkbox:form.check.value,
    }

// console.log(obj.email)
  
    if(obj.email == "" || obj.passwd=="" || obj.repasswd==""){
        alert("Enter valid details")
    }
   else if(obj.passwd == obj.repasswd && check.checked ==true )
    {
  
    localStorage.setItem("user",JSON.stringify(obj));
    alert("Account has been created")

    }
else if(obj.passwd != obj.repasswd)
{
    alert("wrong password, Eneter valid password")
}

})
// document.getElementById("check").addEventListener("click",myfun(this))

// myfun()
function myfun(checkbox)
{

    if(checkbox.checked==true){
        document.getElementById("btn").removeAttribute("disabled")

    }
    else{
        document.getElementById("btn").setAttribute("disabled","disabled")

    }


}
