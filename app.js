const endDate = "5 February 2024 10:00 PM" ;

document.getElementById("end-date").innerHTML= endDate;

const inputs = document.querySelectorAll("input");

function Clock (){
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000 ;

    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24; 
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}


Clock();

setInterval(
    ()=>{
        Clock()
    },1000
)
