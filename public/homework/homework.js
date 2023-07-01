const profilebtn = document.getElementById('showProfile');
const profile = document.querySelector('.profile');
const dashbord = document.querySelector('.dashbord');
const notification = document.querySelector('.Notification');
const homework = document.querySelector('.Homework');
const result = document.querySelector('.Result');
const logout = document.querySelector('#logout');




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
    window.location.href = "/dashboard"
})

notification.addEventListener('click', () => {
    console.log('clicked')
    window.location.href = "/notification"
})

homework.addEventListener('click', () => {
    window.location.href = "/homework"
})

result.addEventListener('click', () => {
    window.location.href = "/result"
})
logout.addEventListener("click", async () => {
    try {

        await fetch("/logout", { method: "POST" })
        // alert("log out")
        window.location.href = "/"

    } catch (error) {
        console.log(error)
    }
});