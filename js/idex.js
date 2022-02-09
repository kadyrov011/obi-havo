let elInfo = document.querySelector('.info__city');
let  elInput = document.querySelector('.js__input');
let elListUl = document.querySelector('.elListUl')



function handleTarget(evt){
  console.log(evt.target.dataset.lat);
  fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${evt.target.textContent}&limit=1&appid=d333810d973a09b861b11c830ecb267f`
  )
    .then((res) => res.json())
    .then((data) => data.forEach(element => {
      var lat = evt.target.dataset.lat = element.lat
      var lon = evt.target.dataset.lon = element.lon 
      localStorage.setItem("let",lat);
      localStorage.setItem("lon",lon);
      window.location = 'http://127.0.0.1:5500/info.html'
    }));
  
}

elInfo.addEventListener('click',handleTarget)
 

function hendleClickBtn(evt){
  localStorage.setItem('let',evt.target.dataset.lat)
  localStorage.setItem('lon',evt.target.dataset.lon)
  window.location = 'https://kadyrov011.github.io/obi-havo/info.html'
  }

function handleInput(evt){
  elListUl.innerHTML = ""
  fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${evt.target.value}&limit=5&appid=d333810d973a09b861b11c830ecb267f`
  )
    .then((res) => res.json())
    .then(data => data.forEach(value => {
      var elLi = document.createElement('li')
      var elBtn = document.createElement('button')
      
      elBtn.textContent = value.name
      elBtn.classList.add('btnJs')
      elLi.classList.add('btnli')
      var btnLat = elBtn.dataset.lat = value.lat
      var btnLon = elBtn.dataset.lon = value.lon
      
      elBtn.addEventListener("click",hendleClickBtn)
     
      elLi.append(elBtn)
      elListUl.append(elLi)

    
    })
    )
   

}

elInput.addEventListener('input', handleInput)

