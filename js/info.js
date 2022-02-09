let elBack = document.querySelector('.js-back')
let elTitle = document.querySelector(".title")
let eltext = document.querySelector('.js-p')
let eltext2 = document.querySelector('.js-p2')
let eltext3 = document.querySelector('.js-p3')
let eltext4 = document.querySelector('.js-p4')



var let = localStorage.getItem("let")
var lon = localStorage.getItem("lon")


      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${let}&lon=${lon}&appid=d333810d973a09b861b11c830ecb267f`
      )
      .then((res) => res.json())
      .then((data =>{ 
          console.log(data)
          elTitle.textContent = data.name
        eltext.textContent = data.main.temp
        eltext2.textContent = data.weather[0].main
        eltext3.textContent = data.wind.speed
        eltext4.textContent = data.wind.deg
    }))
function handleBack() {
    
    console.log(window.location = 'https://kadyrov011.github.io/obi-havo//index.html');
}

elBack.addEventListener('click',handleBack)
