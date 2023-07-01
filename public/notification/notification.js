const profilebtn = document.getElementById('showProfile');
const profile = document.querySelector('.profile');
const dashbord = document.querySelector('.dashbord');
const notification = document.querySelector('.Notification');
const homework = document.querySelector('.Homework');
const result = document.querySelector('.Result');
const logout = document.querySelector('#logout');
const notificationBtn = document.querySelector('.notificationBtn')
const ntf = document.querySelector('.ntf')
const addBtn = document.querySelector('.addBtn')

window.addEventListener('load', async () => {
    let notification = await fetch('/notification/all')
    let notifi = await notification.json()

    for (i = 0; i < notifi.length; i++) {
        const container = document.querySelector(".top")
        let div = document.createElement("div")
        div.className = 'notifi'
        div.innerHTML = `<div class="head">
        <h2>${notifi[i].user}</h2>
        <h4>Admin</h4>
        <h4>${notifi[i].date}</h4>
      </div>
      <p>
        ${notifi[i].data}
      </p>`
        container.prepend(div)
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
    window.location.href = "/dashbord"
})

notification.addEventListener('click', () => {
    console.log('clicked')
    window.location.href = "/notification"
})

homework.addEventListener('click', () => {
    console.log("not homew")
    window.location.href = "/homework"
})

result.addEventListener('click', () => {
    window.location.href = "/result"
})
logout.addEventListener("click", async () => {
    try {

        await fetch("/logout", { mode: "no-cors", method: "POST" })
        // alert("log out")
        window.location = "/"

    } catch (error) {
        console.log(error)
    }
});