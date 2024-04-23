

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
    

    let hijriDate =  `${result.data.date.hijri.year} ${result.data.date.hijri.day} - ${result.data.date.hijri.month.en}`
    let fajrTime = `${result.data.timings.Fajr}`
    let SunRise = `${result.data.timings.Sunrise}`
    let zuharTime = `${result.data.timings.Dhuhr}`
    let asrTime = `${result.data.timings.Asr}`
    let maghribTime = `${result.data.timings.Maghrib}`
    let ishaTime =  `${result.data.timings.Isha}`
    

    date.innerText =  `${hijriDate}`
    fajr.innerText =  `${fajrTime} `
    sunRise.innerText = `${SunRise}`
    zuhar.innerText = `${zuharTime}`
    asr.innerText = `${asrTime}`
    maghrib.innerText = `${maghribTime}`
    isha.innerText =`${ishaTime}`

    } else {
    alert('Please enter a city name');
    }

});


