
// let btn = document.querySelector(".sbmit");
// const nameInput = document.querySelector("#username")
// const passwordInput = document.querySelector("#password")
// btn.addEventListener("click", async (e) => {
//     e.preventDefault()
//     let data;
//     const name = nameInput.value
//     const password = passwordInput.value
//     console.log("login js se ", name, password)

//     var details = {
//         'name': name,
//         'password': password,

//     };

//     var formBody = [];
//     for (var property in details) {
//         var encodedKey = encodeURIComponent(property);
//         var encodedValue = encodeURIComponent(details[property]);
//         formBody.push(encodedKey + "=" + encodedValue);
//     }
//     formBody = formBody.join("&");

//     const login = await fetch('/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
//         },
//         body: formBody
//     });
//     if (login) {
//         data = await login.json()
//     } // Add await keyword to get the parsed JSON response

//     if (data.status === "error") {
//         window.location.href = "/"

//         alert("Incorrect User Name")
//     }
//     else if (data.msg) {
//         window.location.href = "/"
//         alert(data.msg)
//     }





// })