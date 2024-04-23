

const button = document.getElementById('search-btn');
const input = document.getElementById('city-input');

const date = document.getElementById('date')
const fajr = document.getElementById('fajr')
const sunRise = document.getElementById('sunRise')
const zuhar = document.getElementById('zuhar')
const asr = document.getElementById('asr')
const maghrib = document.getElementById('maghrib')
const isha = document.getElementById('isha')

    date.innerHTML = 'Year - day - Month'
    fajr.innerText = '00:00'
    sunRise.innerText = '00:00'
    zuhar.innerText = '00:00'
    asr.innerText = '00:00'
    maghrib.innerText = '00:00'
    isha.innerText = '00:00'



async function getData(cityName) {
    try {
    const promise = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${cityName}&country=%27%27&method=8`);
    return await promise.json()
    
    } catch (error) {
    console.error(error);
    }
}

button.addEventListener('click', async () => {
    const value = input.value.trim();
    if (value !== '') {
    const result = await getData(value);
    // console.log(result);
    

    date.innerHTML =  `${result.data.date.hijri.year} ${result.data.date.hijri.day} - ${result.data.date.hijri.month.en}`
    fajr.innerText = `${result.data.timings.Fajr}`
    sunRise.innerText = `${result.data.timings.Sunrise}`
    zuhar.innerText = `${result.data.timings.Dhuhr}`
    asr.innerText = `${result.data.timings.Asr}`
    maghrib.innerText = `${result.data.timings.Maghrib}`
    isha.innerText = `${result.data.timings.Isha}`


    } else {
    alert('Please enter a city name');
    }

});


