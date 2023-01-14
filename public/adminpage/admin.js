const btnS = document.getElementById('btnS')    
const formS = document.querySelector('.formS')
const btnT = document.getElementById('btnT')    
const formT = document.querySelector('.formT')
console.log(formT)
console.log(btnT)
btnS.addEventListener('click',function(){
    
    console.log('hit')
    if(!this.dataset.clicked){
        this.setAttribute('data-clicked','true')
        
        formS.style.transform = "translateY(0px)";
       
    }
    else{
        this.removeAttribute('data-clicked')

        formS.style.transform = "translateY(-230px)";
     
        console.log('else')
      
    }
})

btnT.addEventListener('click',function(){
    
    console.log('hit')
    if(!this.dataset.clicked){
        this.setAttribute('data-clicked','true')
       
        formT.style.transform = "translateY(0px)";
       
    }
    else{
        this.removeAttribute('data-clicked')
        formT.style.transform = "translateY(-230px)";
       
        console.log('else')
      
    }
})