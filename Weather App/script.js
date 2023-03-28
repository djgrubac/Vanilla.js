let cityName = document.querySelector('.city');
let temp = document.querySelector('.temp');
let humidity = document.querySelector('.humidity');
let wind = document.querySelector('.wind');

let searchBox = document.querySelector('.search input');
let searchBtn = document.querySelector('.search button');

let weatherIcon = document.querySelector('.weather-icon');

const apiKey = '14a93e1be88542f17b854bfd0e8e07b3' ;
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}` );
        if(response.status == 404){
            document.querySelector('.error').style.display = 'block';
            humidity.style.display = 'none';
            wind.style.display = 'none';
            temp.innerText = '';
            cityName.innerText = '';
           weatherIcon.src = "images/404.png";
        }else{
            const data = await response.json();
                cityName.innerHTML = data.name;
                temp.innerHTML = Math.round(data.main.temp) + '°c';
                humidity.innerHTML = data.main.humidity + '%';
                wind.innerHTML = data.wind.speed + ' km/h';            

            switch(data.weather[0].main) {
                case 'Clear':
                    weatherIcon.src = "images/clear.png";
                    break;
                case 'Clouds':
                    weatherIcon.src = "images/clouds.png";
                    break;
                case 'Drizzle':
                    weatherIcon.src = "images/drizzle.png";
                    break;
                case 'Rain':
                    weatherIcon.src = "images/rain.png";
                    break;
                case 'Mist':
                    weatherIcon.src = "images/mist.png";
                    break;
                default:
                    weatherIcon.src = "images/clear.png";
            }
        
            document.querySelector('.weather').style.display = 'block';
            document.querySelector('.error').style.display = 'none';
            humidity.style.display = 'block';
            wind.style.display = 'block';
        }
}    

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});   
