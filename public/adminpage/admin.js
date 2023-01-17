const btnS = document.getElementById('btnS')
const formS = document.querySelector('.formS')
const btnT = document.getElementById('btnT')
const formT = document.querySelector('.formT')
const userbtn = document.getElementById('userBtn')
const formU = document.querySelector('.formU')
const submitUser = document.getElementById('submitUser')



submitUser.addEventListener('click', async (e) => {

    e.stopPropagation();
    let data = {

    }

    let user = await fetch('http://localhost:8989/user/add',
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST", mode: "no-cors",
            body: JSON.stringify(data)
        })

    console.log(user)

})

// ----------------------toggle------------------------
btnS.addEventListener('click', function () {


    if (!this.dataset.clicked) {
        this.setAttribute('data-clicked', 'true')

        formS.style.transform = "translateY(0px)";

    }
    else {
        this.removeAttribute('data-clicked')

        formS.style.transform = "translateY(-230px)";

        console.log('else')

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