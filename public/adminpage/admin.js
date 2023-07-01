const btnS = document.getElementById('btnS')
const formS = document.querySelector('.formS')
const btnT = document.getElementById('btnT')
const formT = document.querySelector('.formT')
const userbtn = document.getElementById('userBtn')
const formU = document.querySelector('.formU')
const submitUser = document.getElementById('submitUser')
let submitStudent = document.getElementById('submitStudent')
let submitTeacher = document.getElementById('submitTeacher')
const notificationBtn = document.querySelector('.notificationBtn')
const ntf = document.querySelector('.ntf')
const addBtn = document.querySelector('.addBtn')
const logoutbtn = document.querySelector("#logout")



// ----------------------------Adding user-----------------------------------------------
let tempUserId;
submitUser.addEventListener('click', async (e) => {
    e.stopPropagation();
    let name = document.getElementById("Uname").value
    let password = document.getElementById("Upassword").value
    let role = document.getElementById("Urole").value


    let user = await fetch('/user/add',
        {
            headers: {
                // 'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                name,
                password,
                role
            })
        })
    let userdata = await user.json()
    console.log(userdata.user)

    tempUserId = userdata.user._id

    if (userdata.status == "success") {
        let body = document.querySelector(".body")
        var popup = document.createElement("div")
        popup.innerHTML = "User Added Successfuly"
        popup.className = "popUp"
        body.appendChild(popup)
        let pp = document.querySelector(".popUp")
        setTimeout(function () {
            body.removeChild(pp)
        }, 5000)
    }
    else {
        let body = document.querySelector(".body")
        var popup = document.createElement("div")
        popup.innerHTML = "User not added"
        popup.className = "popUp"
        popup.style.color = "red"
        body.appendChild(popup)
        let pp = document.querySelector(".popUp")
        setTimeout(function () {
            body.removeChild(pp)
        }, 5000)
    }


    if (userdata.user.role == "student") {
        document.querySelector(".student").style.display = "block";
        document.querySelector(".user").style.display = "none";

    }
    else if (userdata.user.role == 'teacher') {
        document.querySelector(".teacher").style.display = "block";
        document.querySelector(".user").style.display = "none";
    }

    if (userdata.user.role == "teacher") {
        document.querySelector(".user").style.display = "none";
        document.querySelector(".teacher").style.display = "block"
    }


    document.getElementById("Uname").value = ""
    document.getElementById("Upassword").value = ""
    document.getElementById("Urole").value = ""
})

// ----------------------------Adding user-----------------------------------------------


// -------------------------------Adding Student----------------------------------------------

submitStudent.addEventListener('click', async (e) => {
    e.stopPropagation()
    let name = document.getElementById('Sname').value
    let sClass = document.getElementById('Sclass').value
    let section = document.getElementById('Ssection').value
    let rollnumber = document.getElementById('SrollNo').value


    let student = await fetch('/student/add', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            name,
            class: sClass,
            section,
            rollnumber: Number(rollnumber)
        })

    })
    let studentData = await student.json()

    document.getElementById('Sname').value = ""
    document.getElementById('Sclass').value = ""
    document.getElementById('Ssection').value = ""
    document.getElementById('SrollNo').value = ""
    await fetch('/user/edit', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify({
            userId: tempUserId,
            rollId: studentData.id
        })

    })
    document.querySelector(".student").style.display = "none";

    document.querySelector(".user").style.display = "block";


    let body = document.querySelector(".body")
    var popup = document.createElement("div")
    popup.innerHTML = "Student Added Successfuly"
    popup.className = "popUp"
    body.appendChild(popup)
    let pp = document.querySelector(".popUp")
    setTimeout(function () {
        body.removeChild(pp)
    }, 5000)
})







// -------------------------------Adding Student----------------------------------------------





// -------------------------------------Adding teacher----------------------------------------------------


submitTeacher.addEventListener('click', async (e) => {
    e.stopPropagation()
    let name = document.getElementById('Tname').value
    let subject = document.getElementById('subject').value
    let allClasses = document.getElementById('class').value
    let isClassIncharge = document.getElementById('classTeacher').value

    let teacher = await fetch("/teacher/add", {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            name,
            subject,
            class: allClasses,
            isClassIncharge
        })

    })
    let teacherData = await teacher.json()
    console.log(teacherData)
    document.getElementById('Tname').value = ""
    document.getElementById('subject').value = ""
    document.getElementById('class').value = ""
    document.getElementById('classTeacher').value = ""
    await fetch('/user/edit', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify({
            userId: tempUserId,
            rollId: teacherData.id
        })
    })
    let body = document.querySelector(".body")
    var popup = document.createElement("div")
    popup.innerHTML = "Teacher Added Successfuly"
    popup.className = "popUp"
    body.appendChild(popup)
    let pp = document.querySelector(".popUp")
    setTimeout(function () {
        body.removeChild(pp)
    }, 5000)

    document.querySelector(".teacher").style.display = "none";
    document.querySelector(".user").style.display = "block";
})










// -------------------------------------Adding teacher----------------------------------------------------



// ------------------------------------------Add Notificartion--------------------------------------------------
notificationBtn.addEventListener('click', function () {
    if (!this.dataset.clicked) {
        this.setAttribute('data-clicked', 'true')

        ntf.style.display = "block";

    }
    else {
        this.removeAttribute('data-clicked')

        ntf.style.display = "none";

    }
})


addBtn.addEventListener('click', async function () {
    let data = document.getElementById('notificationInput').value
    if (data == "") {
        alert('Add notifiction first')
    }
    else {
        let notification = await fetch('/notification/add', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                data,
                date: new Date().toDateString(),
                user: 'Sahil'
            })

        })

        alert('notification added')
        document.getElementById('notificationInput').value = ""
    }

})







// ------------------------------------------Add Notificartion--------------------------------------------------


// ----------------------toggle------------------------
btnS.addEventListener('click', function () {


    if (!this.dataset.clicked) {
        this.setAttribute('data-clicked', 'true')

        formS.style.transform = "translateY(0px)";

    }
    else {
        this.removeAttribute('data-clicked')

        formS.style.transform = "translateY(-230px)";

    }
})

btnT.addEventListener('click', function () {

    console.log('hit')
    if (!this.dataset.clicked) {
        this.setAttribute('data-clicked', 'true')

        formT.style.transform = "translateY(0px)";

    }
    else {
        this.removeAttribute('data-clicked')
        formT.style.transform = "translateY(-230px)";

        console.log('else')

    }
})

userbtn.addEventListener('click', function () {


    if (!this.dataset.clicked) {
        this.setAttribute('data-clicked', 'true')

        formU.style.transform = "translateY(0px)";

    }
    else {
        this.removeAttribute('data-clicked')
        formU.style.transform = "translateY(-230px)";

        console.log('else')

    }
})

// ----------------------toggle------------------------
// -----------------logout-------------
logoutbtn.addEventListener("click", () => {
    window.location.href = "/logout";
})