function GetInfo() {

    var newName = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML = "Here's the weather for "+newName.value+".";

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=28702615b19ea4a83675da3a5c68a5cb&units=imperial')
.then(response => response.json())
.then(data => {
    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Temp").innerHTML = "" + Number(data.list[i].main.temp).toFixed(1)+ "°F";

    }

     for(i = 0; i<5; i++){
        document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
        data.list[i].weather[0].icon
        +".png";
    }

    console.log(data)


})

.catch(err => alert("Something Went Wrong: Try refreshing the page."))
}


function DefaultScreen(){
    document.getElementById("cityInput").defaultValue = "Lexington, Kentucky";
    GetInfo();
}
function resetPage(){
    window.location.reload();
} 


var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
    }