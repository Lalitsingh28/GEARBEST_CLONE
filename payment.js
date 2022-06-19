var arr = JSON.parse(localStorage.getItem("user"));



function click2(){
    alert("Order placed");
    window.location.href = "last.html"
}


document.getElementById("paypal").addEventListener("click",paypalFunction)


function paypalFunction(){
    var data = JSON.parse(localStorage.getItem("user"));
    console.log(data)
    display(data)
}

function display(data){
    document.getElementById("appendHere").innerHTML = "";
  
        let box = document.createElement("div");

        let add = document.createElement("h3");
    
        add.innerText= data.add1;
        box.append(add);
        document.getElementById("appendHere").append(box);
   
    
    
}