const logout = document.querySelector("#logout");
logout.addEventListener("click", async () => {
    try {

        await fetch("http://localhost:8989/logout", { mode: "no-cors", method: "POST" })

    } catch (error) {
        console.log(error)
    }
})