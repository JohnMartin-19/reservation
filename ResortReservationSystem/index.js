/*$("document").ready(function(){
    alert("Welcome to LAKE ELEMENTAITA RESORT")
});
$("#cnt").click(function(){
    alert("Thank you. We will be in touch");
});

$("#cnt").click(function(){
    $("input").replace();
});
$("#news").click(function(){
    prompt("Our News Letter will be send to your E-Mail")
});
*/
document.addEventListener('DOMContentLoaded', run)
function run(){
    alert('Welcome to Lake Elementaita Resort, the place to be!', setTimeout(40000))

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