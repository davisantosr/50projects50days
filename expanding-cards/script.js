const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removingActive()
    setTimeout(() => {
      removeActiveClasses()
    }, 100) 
    setTimeout(() => {
      panel.classList.add('active')
    }, 200)
  })
})


function removingActive(){
  panels.forEach(panel => {
    panel.classList.add('removing')
  })
}

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}