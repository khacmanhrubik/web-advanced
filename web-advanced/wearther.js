const inputSearch = document.getElementById('input-search')
const nameCity = document.getElementById('city')
const status = document.getElementById('status')
const img = document.getElementById('img')
const numberC = document.getElementById('numberC')


const API_KEY = 'ea911504283686a3e6f7f933651c0b3c'

inputSearch.addEventListener('change',(event) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=${API_KEY}&lang=vi&units=metric`)
        .then(res => res.json())
        .then((data)=>{
            console.log(data)
            console.log(data.name)
            console.log(data.weather[0].description)
            console.log(data.weather[0].icon)
            console.log(data.main.temp)
            
            console.log(data.value)
            nameCity.innerHTML= data.name
            status.innerHTML= data.weather[0].description
            img.src= `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            numberC.innerHTML = Math.round(data.main.temp)
            
        } )
    
})
