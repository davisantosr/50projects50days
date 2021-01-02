const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
const number4 = document.getElementsByClassName('content')

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive = currentActive +1
  
  if(currentActive > circles.length) {
    currentActive = circles.length

  }
  update()
})

prev.addEventListener("click", () => {
  currentActive = currentActive -1
  
  if(currentActive < 1) {
    currentActive = 1

  }
  update()
})

function update() {
  circles.forEach((circle, index) => {
    if(index < currentActive) {
    circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')

  progress.style.width = (actives.length-1) / (circles.length-1) * 100 + '%'

  if(currentActive === 1){
    prev.disabled = true
  }else if (currentActive === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }

  if(currentActive === circles.length){
    circles[3].classList.remove('active')
    circles[3].classList.add('finished')
    circles[3].innerHTML = "FINALIZADO"

    setTimeout(() => {
      circles[3].classList.remove('finished')
    }, 5000)
    circles[3].classList.add('active')
    
  }

}


number4.innerHTML = 'TESTE'
console.log(number4)