function showTime(){
    var d = new Date();
    var y = d.getFullYear();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var session = "AM";
    var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    if(h>=12){
        session = "PM";
    }
    if(h>12){
        h = h-12;
    }
    if(h<10){
        h = "0"+h;
    }
    if(m<10){
        m = "0"+m;
    }
    if(s<10){
        s = "0"+s;
    }
    var time =h + " : " + m + " : " + s + " " + session;
document.getElementsByTagName('h1')[0].innerText = d.getDate() + " " + month[d.getMonth()] + " " + y + " " + day[d.getDay()];
document.getElementsByTagName('h1')[1].innerText = time;
setTimeout(showTime,1000);
}