
let userdata=JSON.parse(localStorage.getItem("user"));
console.log(userdata)
let form = document.getElementById("form");
form.addEventListener("submit",function(event){
console.log("yes")

    event.preventDefault();
    let data = {
        email:form.mail.value,
        pass:form.passwd.value,
        
    }
    console.log(data)
    if(userdata == "")
    {
      
        alert("Create your account first");
    }
  else if(userdata.passwd==data.pass && userdata.email==data.email)
  {
    localStorage.setItem("sign",JSON.stringify(userdata))
<<<<<<< HEAD
    window.location.href="super.html"
=======
    window.location.href="home.html"
>>>>>>> 290353e59dfcc3a2cab752c1cc53199b04e50fed

    alert("Signin Successfully");
  }
  else
  {
    alert("User doen't exist");
  }
});

function mysign(checkbox)
{
  if(checkbox.checked==true)
  {
    document.getElementById("btn").removeAttribute("disabled")
  }
  else{
    document.getElementById("btn").setAttribute("disabled","disabled")
  }
}
