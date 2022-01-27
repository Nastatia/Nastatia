const countDown = () => {
    const elapsedDate = new Date("Feburary 8, 2022 00:00:00").getTime();
    const newDate = new Date().getTime();
    const dateInterval = elapsedDate - newDate; 

    

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;

    const ActualHour = Math.floor(dateInterval / hour);
    const ActualMinute = Math.floor((dateInterval % hour)/minute);
    const ActualSecond = Math.floor((dateInterval % minute)/second);
    console.log(ActualHour);
    console.log(ActualMinute);
    console.log(ActualSecond);
    
    document.getElementById('hour').innerHTML= ActualHour+ ":";
    document.getElementById('minute').innerHTML= ActualMinute+ ":";
    document.getElementById('second').innerHTML= ActualSecond;



}
setInterval(countDown, 1000);