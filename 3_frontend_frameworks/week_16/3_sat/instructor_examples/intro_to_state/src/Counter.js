import {useState} from 'react'
import NameCard from './NameCard'
import CounterButtons from './CounterButtons'

const Counter = (props) => {
  const [count, setCount] = useState(0)
  const [person, setPerson] = useState({
    name: 'Bob',
    age: 31,
    profession: 'Doctor'
  })

  const updateCount = (plusOrMinus) => {
    setCount((prev) => {
      return plusOrMinus === '+' ? prev + 1 : prev - 1
    })
  }

  const updateAge = (plusOrMinus) => {
    setPerson((prev) => {
      return {
        ...prev,
        age: plusOrMinus === '+' ? prev.age + 1 : prev.age - 1
      }
    })
  }

  console.log(person)

  // const incrementCount = () => {
  //   setCount((prev) => prev + 1)
  // }

  // const decrementCount = () => {
  //   setCount((prev) => prev - 1)
  // }
  return (
    <>
      <NameCard name={person.name} />
      <span>Current Count: {person.age}</span>
      <CounterButtons updateAge={updateAge} />
    </>
  )
}

export default Counter