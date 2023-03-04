import {useEffect, useState} from 'react'

const Form = (props) => {
  const [formData, setFormData] = useState({
    searchTerm: '',
    // myName: '',
  })
  console.log(formData)

  const onChangeText = (e) => {
    setFormData((prev) => (
      {
        ...prev, 
        [e.target.name]: e.target.value
      }
    ))
  }

  const performSearch = (e) => {
    e.preventDefault()
    props.getMovie(formData.searchTerm)
    setFormData({
      searchTerm: ''
    })
  }

  // useEffect(() => {
  //   setFormData({
  //     searchTerm: '',
  //   })
  // }, [props.movie])

  return (
    <>
      <form onSubmit={performSearch}>
        <input 
          onChange={onChangeText} 
          name='searchTerm'
          type='text' 
          value={formData.searchTerm} 
        />
        {/* <input 
          onChange={onChangeText}
          name='myName'
          type='text'
          value={formData.myName}
        /> */}
        <input type='submit' value='search' />
      </form>
    </>
  )
}

export default Form