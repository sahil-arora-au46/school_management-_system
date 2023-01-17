const btnS = document.getElementById('btnS')
const formS = document.querySelector('.formS')
const btnT = document.getElementById('btnT')
const formT = document.querySelector('.formT')
const userbtn = document.getElementById('userBtn')
const formU = document.querySelector('.formU')
const submitUser = document.getElementById('submitUser')
let submitStudent = document.getElementById('submitStudent')
let check = document.querySelector(".student")
let check1 = document.querySelector(".user")


console.log(check,check1)

// ----------------------------Adding user-----------------------------------------------

submitUser.addEventListener('click', async (e) => {
    e.stopPropagation();
   let name = document.getElementById("Uname").value
   let password = document.getElementById("Upassword").value
   let role = document.getElementById("Urole").value
    
    let data = {

    }

    let user = await fetch('http://localhost:8989/user/add',
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
    // if(userdata)
  
    if(userdata.user.role=="student"){
        document.querySelector(".student").style.display= "block";
        document.querySelector(".user").style.display= "none";
        console.log("going in if")
     }
     else{
        console.log("not going in if")
     }

     if(userdata.user.role=="teacher"){
        document.querySelector(".user").style.display= "none";
        document.querySelector(".teacher").style.display="block"
     }
 
    
     document.getElementById("Uname").value = ""
     document.getElementById("Upassword").value = ""
     document.getElementById("Urole").value = ""
})

// ----------------------------Adding user-----------------------------------------------


// -------------------------------Adding Student----------------------------------------------

submitStudent.addEventListener('click',async(e)=>{
    e.stopPropagation()
    let name = document.getElementById('Sname').value
    let sClass = document.getElementById('Sclass').value
    let section = document.getElementById('Ssection').value
    let  rollnumber = document.getElementById('SrollNo').value

    console.log(name,sClass,section,rollnumber)
    console.log(typeof(sClass))

    let student = await fetch('http://localhost:8989/student/add',{
        headers:{
            'Content-Type': 'application/json'
        },
        method: "POST", 
        body: JSON.stringify({
            name,
            class:sClass,
            section,
           rollnumber: Number(rollnumber)
        })
        
    })
    let studentData = await student.json()
    console.log(studentData)
})



// -------------------------------Adding Student----------------------------------------------




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