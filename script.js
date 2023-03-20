
setInterval(() => {
    let a = new Date
    let hrs= a.getHours();
    let min=a.getMinutes();
    let sec=a.getSeconds();
    console.log(sec)
    document.getElementById('sec').style.transform=`rotate(${(sec*6-90)}deg)`;
    document.getElementById('min').style.transform=`rotate(${((min*6+sec/10)-90)}deg)`;
    document.getElementById('hrs').style.transform=`rotate(${((hrs*30+5*min/12+5*sec/3600)-90)}deg)`;
    
}, 1000);