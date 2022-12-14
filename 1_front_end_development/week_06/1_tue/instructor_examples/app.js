// console.log('Hello world!')

// console.log(document.getElementById("second_h1"))

// const allFoundH3s = document.getElementsByClassName('searching_for_this_class')
// console.log(allFoundH3s[allFoundH3s.length - 1])


// const allDivs = document.getElementsByTagName('div')
// console.log(allDivs)
// for(let i = 0; i < allDivs.length; i++){
//   allDivs[i].innerText = `This is div number ${i}`
// }

// const secondDiv = allDivs[1]
// secondDiv.innerHTML = '<a href="https://www.facebook.com">This is some other string</a>'

// const firstH1Tag = document.querySelector('h1')
// console.log(firstH1Tag)

// let userName = prompt('What is your name?')

// document.getElementById('name_h1').innerText = userName


// const nameH1 = document.querySelector('#name_h1')
// console.log(nameH1)

// const firstOfClass = document.querySelector('.searching_for_this_class')
// console.log(firstOfClass)

// const first_div = document.querySelector('div')
// console.log(first_div)
// first_div.style.backgroundColor = 'orange'


// const allDivs = document.querySelectorAll('div')
// console.log(allDivs)
// const showAllDivs = (divsArray) => {
//   // for(let el of divsArray){
//   //   el.style.display = 'block'
//   // }
//   const divArrayJs = [...divsArray]
//   console.log('this is the js div array', divArrayJs)
//   divArrayJs.map((div) => {
//     return div.style.display = 'block'
//   })
// }

// const hideAllDivs = (divsArray) => {
//   for(let el of divsArray){
//     el.style.display = 'none'
//   }
//   return setTimeout(() => showAllDivs(divsArray), 3000)
// }


// const allSearchingClass = document.querySelectorAll('.searching_for_this_class')
// console.log(allSearchingClass)

// setTimeout(() => hideAllDivs(allSearchingClass), 3000)

// const allNameH1Ids = document.querySelectorAll('#name_h1')
// console.log(allNameH1Ids)


// const allDivs = document.querySelectorAll('div')

// console.log(allDivs[0].attributes)

// const facebookLink = document.querySelector('a')


// // console.log(facebookLink.getAttribute('href'))

// facebookLink.setAttribute('href', 'https://www.instagram.com/')

// const fooDiv = document.querySelector('.foo')
// // fooDiv.classList.remove('foo')
// // fooDiv.classList.add('hide')
// fooDiv.classList.toggle('foo')
// fooDiv.classList.toggle('foo')


// const allDivs = document.querySelectorAll('div')

// console.log(allDivs)

// for(let i = 0; i < allDivs.length; i++){
//   allDivs[i].classList.toggle('hide', i < 2)
// }


// const h3BeforeFirstDiv = document.querySelector('div').previousSibling.previousElementSibling.previousSibling.previousElementSibling

// console.log(h3BeforeFirstDiv)

// const body = document.querySelector('body')

// const changeBodyToThis = 'This is the new text in the h1 in the body'

// body.innerHTML = `<h1>${changeBodyToThis}</h1>`

const div = document.querySelector('#great')
console.log(div.dataset)

div.style.backgroundColor = 'orange'
div.style.border = '10px solid green'







