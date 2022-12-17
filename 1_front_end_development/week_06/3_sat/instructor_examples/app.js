// const data = fetch('https://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen')

// console.log(data)


window.onload = (event) => {

  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()

    const search = document.querySelector('input[type="text"]').value

    fetch(`https://www.omdbapi.com/?apikey=53aa2cd6&t=${search}`).then((response) => {
      // console.log(response)
    return response.json()
    }).then((json) => {
      console.log(json, 'this was successful')
      document.querySelector('#title').innerText = json.Title
      document.querySelector('#year').innerText = json.Year
      document.querySelector('#rating').innerText = json.Rated
    },
    (err) => {
      console.log(err, 'this was an error')
    })

  })

  

}