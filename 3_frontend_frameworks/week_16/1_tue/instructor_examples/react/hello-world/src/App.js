import Header from './components/Header'
import Player from './components/Player'
import Board from './components/Board'
import './styles.css'

const App = () => {
  return (
    <>
      <Header />
      <Player whichPlayer='x' />
      <Player whichPlayer='o' />
      <Board />
    </>
  );
}

export default App;
