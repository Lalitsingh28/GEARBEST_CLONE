

let form = document.getElementById("formFill");

// form.addEventListener("submit",submitFunction);
// var arr = JSON.parse(localStorage.getItem("user")) || [];
// console.log(arr);
// function submitFunction(){
//     event.preventDefault()

//     var obj= {
//         name: form.details.value,
//         name2: form.details2.value,
//         add1: form.details3.value,
//         add2: form.details4.value,
//         country: form.select.value,
//         state: form.select2.value,
//         city: form.details5.value,
//         zip:form.details6.value,
//         email:form.details8.value,

//     }
//     arr.push(obj);
//     localStorage.setItem("user",JSON.stringify(arr));
//     alert("Address Saved Successful");
//     window.location.href = "payment.html";
//     console.log("yes")
//     // window.location.reload();
// }
form.addEventListener("submit",function(){
    event.preventDefault()

        var obj= {
            name: form.details.value,
            name2: form.details2.value,
            add1: form.details3.value,
            add2: form.details4.value,
            country: form.select.value,
            state: form.select2.value,
            city: form.details5.value,
            zip:form.details6.value,
            email:form.details8.value,
    
        }
        // arr.push(obj);
        localStorage.setItem("user",JSON.stringify(obj));
        alert("Address Saved Successful");
        window.location.href = "payment.html";
        console.log("yes")
        // window.location.reload();
});



function cancle(){
    

    confirm("Are you Sure?")
    alert("Address not Saved");

}


