"use strict"
const input = document.querySelector('#input')
const btn = document.querySelector ("#btnn")
const nameCity = document.querySelector ('#cityName')
const degree = document.querySelector ('#degree')
const humidity = document.querySelector ('#humidity')
const wind = document.querySelector ('#wind')
const condition = document.querySelector ('#weatherCondition')


const apiKey ="a691c3fbb2550adcd109d80702b455c8 ";

// async function fetchData(city){
//    try{
//        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
//        const data = await response.json()
//        console.log(data);
//        nameCity.textContent = data.name;
//        degree.textContent = data.main.temp + ' °C';
//        humidity.textContent = data.main.humidity + ' is coffecient of humidity';
//        wind.textContent = data.wind.speed + ' km/h is wind speed';
//        condition.style.display = 'block';
//        condition.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

//    }
//    catch (error) {
//         console.log("sevh");
//    }
// }
async function fetchData5days(cityName) {
    
    try {
        const res =  await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`)
        const data = await res.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

function cityfinder(){
    const cityName = input.value
    fetchData5days(cityName)
}

btn.addEventListener('click',cityfinder)

