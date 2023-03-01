import Square from "./Square"

const Board = (props) => {
  const squares = []
  for(let i = 0; i < 9; i++){
    squares.push(<Square />)
  }
  return(
    <div className="board">
      {
        squares.map((s) => s)
      }
    </div>
  )
}

export default Board