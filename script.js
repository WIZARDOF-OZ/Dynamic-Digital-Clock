let section =  document.querySelector('section'),
icons = document.querySelector(".icons")
icons.onclick = ()=>{
    section.classList.toggle("dark")
}

// creating a function and calling it in every seconds

setInterval(() => {

   let date = new Date(),
    hour = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();


    let d;

d = hour < 12 ? "AM" : "PM"; // if hour is smaller than 12 then its value will be AM else its value will be PM
hour = hour > 12 ? hour - 12 : hour; // if hour value is greater than 12 then 12 will be subtract (by doing this we will get value till 12)
hour = hour == 0 ? hour = 12 : hour; // if hour value is 0 then its value will be 12

// adding 0 to all the value if they wull less than 10
hour = hour < 10 ? "0" + hour : hour
min =  min < 10 ? "0" +  min :  min
sec = sec < 10 ? "0" + sec : sec


    console.log(hour);
    console.log(min);
    console.log(sec);



    document.querySelector('.hour_num').innerHTML = hour
    document.querySelector('.min_num').innerHTML = min
    document.querySelector('.sec_num').innerHTML = sec
    document.querySelector('.am_pm').innerHTML = d


}, 1000) // 1000 milliseconds = 1second
