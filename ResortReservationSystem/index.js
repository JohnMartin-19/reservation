document.addEventListener('DOMContentLoaded', run)
function run(){
    alert('Welcome to Lake Elementaita Resort, the place to be!',(400000000))

}
document.getElementById('cnt').addEventListener('click', (e) =>{
    e.preventDefault()
    alert('Thank you. Our team will be in touch')
})
document.getElementById('book').addEventListener('click', (e)=> {
   // e.preventDefault()
    alert('Do you what to proceed for booking?')
})
document.getElementById('view-all').addEventListener('click',(e)=>{
    alert('View all of our room here')
})

const form = document.getElementById('form')
const fname = document.getElementById('name')
const email = document.getElementById('email')
const comment = document.getElementById('comment')
const formData = {
    'fname.value': '',
    'email.value': '',
    'comment.value': '',
}

form.addEventListener('submit', (e) =>{
    e.preventDefault()

    const connfigureObj = {
        method:'POST',
        header:{
            'Content-Type': 'application/json',
            Accept:'application/json'
        },
        body: JSON.stringify(formData)
    }
    fetch('htpp://localhost:3000/', connfigureObj)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
    })
})