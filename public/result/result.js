const profilebtn = document.getElementById('showProfile')
const profile = document.querySelector('.profile')
const circule = document.querySelector('.circul')
const percentage = document.querySelector('.percentage')
const Mcircule = document.querySelector('.Mcircul')
const Mpercentage = document.querySelector('.Mpercentage')
const Ecircule = document.querySelector('.Ecircul')
const Epercentage = document.querySelector('.Epercentage')
const dashbord = document.querySelector('.dashbord')
const notification = document.querySelector('.Notification')
const homework = document.querySelector('.Homework')
const result = document.querySelector('.Result')
const logout = document.querySelector('#logout')


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
});
logout.addEventListener("click", async () => {
    try {

        await fetch("http://localhost:8989/logout", { mode: "no-cors", method: "POST" })
        // alert("log out")
        window.location = "http://localhost:8989/"

    } catch (error) {
        console.log(error)
    }
});

let sValue = 0;
let sEndValue = 75
let sSpeed = 20

let science = setInterval(() => {
    sValue++
    percentage.textContent = `${sValue}%`
    circule.style.background = `conic-gradient(
        #fe9f56 ${sValue * 3.6}deg,
        #1f1c3b ${sValue * 3.6}deg
    )`
    if (sValue == sEndValue) {
        clearInterval(science)
    }

}, sSpeed)

let mValue = 0;
let mEndValue = 60


let math = setInterval(() => {
    mValue++
    Mpercentage.textContent = `${mValue}%`
    Mcircule.style.background = `conic-gradient(
        #fe9f56 ${sValue * 3.6}deg,
        #1f1c3b ${sValue * 3.6}deg
    )`
    if (mValue == mEndValue) {
        clearInterval(math)
    }

}, sSpeed)

let eValue = 0;
let eEndValue = 87


let english = setInterval(() => {
    eValue++
    Epercentage.textContent = `${eValue}%`
    Ecircule.style.background = `conic-gradient(
        #fe9f56 ${eValue * 3.6}deg,
        #1f1c3b ${eValue * 3.6}deg
    )`
    if (eValue == eEndValue) {
        clearInterval(english)
    }

}, sSpeed)