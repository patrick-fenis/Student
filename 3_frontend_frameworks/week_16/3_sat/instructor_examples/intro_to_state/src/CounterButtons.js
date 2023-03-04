const CounterButtons = (props) => {
  return (      
    <section>
      <button onClick={() => props.updateAge('-')}>-</button>
      <button onClick={() => props.updateAge('+')}>+</button>
    </section>
  )
}

export default CounterButtons