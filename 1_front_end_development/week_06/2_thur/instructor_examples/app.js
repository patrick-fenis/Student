

// window.addEventListener('scroll', () => {
//   console.log('scrolled')
// })

const button = document.querySelector('.js-button')

const triggerOnMouseOver = () => {
  console.log('This logs to the terminal on button click')
  alert('You clicked the button!')
}

button.addEventListener('mouseover', triggerOnMouseOver)


let sheepCount = 0

const sheepButton = document.querySelector('#count-sheep-button')

sheepButton.addEventListener('click', () => {
  sheepCount++
  alert(`${sheepCount} sheep fly by!`)
})


document.querySelector('#facebook-link').addEventListener('click', (e) => {
  e.preventDefault()
  console.log(e.target)
})


