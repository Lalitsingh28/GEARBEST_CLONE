
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
    window.location.href="home.html"

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
