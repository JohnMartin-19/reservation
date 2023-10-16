/*
$("#p1").hover(function(){
    alert("Click below to view wedding packages")
}
    );

$("#wedding").click(function(){
   prompt("Enter your email. Wedding packages will be sent to you.")
}
);
$("#cr").click(function(){
    prompt("Enter your email. Conferencing packages will be sent to you.")
 }
 );
 */
document.getElementById('p1').addEventListener('mouseenter', (e) =>{
    alert('Click below to view wedding packages')
})