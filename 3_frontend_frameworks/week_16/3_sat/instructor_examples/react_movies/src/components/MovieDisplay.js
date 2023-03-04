const MovieDisplay = ({movie: {Title, Poster, Year, Plot}}) => {
  return (
    <>
      <h3>Search Result</h3>
      <img src={Poster} alt={Title}/>
      <h1>{Title}</h1>
      <h5>{Year}</h5>
      <p>{Plot}</p>
    </>
  )
}

export default MovieDisplay