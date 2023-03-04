import {useEffect, useState} from 'react'
import Form from "../components/Form"
import MovieDisplay from "../components/MovieDisplay"

const Home = (props) => {
  const [movie, setMovie] = useState({})

  const getMovie = async (searchTerm) => {
    const response = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=2a08f43e&t=${searchTerm}`
    )
    const data = await response.json()
    console.log(data)
    setMovie(data)
  }

  useEffect(() => {
    getMovie('Clueless')
  }, [])

  console.log(movie)
  return(
    <>
      <h1>Home Screen</h1>
      <Form movie={movie} getMovie={getMovie}/>
      {movie.Title && 
        <MovieDisplay movie={movie} />
      }
    </>
  )
}

export default Home