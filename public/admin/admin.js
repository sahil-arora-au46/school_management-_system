const logout = document.querySelector("#logout");
logout.addEventListener("click", async () => {
    try {

        await fetch("http://localhost:8989/user/", { mode: "no-cors", method: "POST" })
        alert("log out")

    } catch (error) {
        console.log(error)
    }
})