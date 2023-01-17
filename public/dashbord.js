const profilebtn = document.getElementById('showProfile')
const profile = document.querySelector('.profile')
const dashbord = document.querySelector('.dashbord')
const notification = document.querySelector('.Notification')
const homework = document.querySelector('.Homework')
const result = document.querySelector('.Result')
const logout = document.getElementById('logout')

logout.addEventListener("click", async () => {
    try {

        await fetch("http://localhost:8989/logout", { mode: "no-cors", method: "POST" })
        // alert("log out")
        window.location = "http://localhost:8989/"

    } catch (error) {
        console.log(error)
    }
})



profilebtn.addEventListener('click', function () {


    if (!this.dataset.clicked) {
        this.setAttribute('data-clicked', 'true')

        profile.style.right = "0px";

    }
    else {
        this.removeAttribute('data-clicked')

        profile.style.right = "-280px";

        console.log('else')

    }
})

dashbord.addEventListener('click', () => {
    window.location.href = "http://localhost:8989/dashbord"
})

notification.addEventListener('click', () => {
    console.log('clicked')
    window.location.href = "http://localhost:8989/notification"
})

homework.addEventListener('click', () => {
    window.location.href = "http://localhost:8989/homework"
})

result.addEventListener('click', () => {
    window.location.href = "http://localhost:8989/result"
})