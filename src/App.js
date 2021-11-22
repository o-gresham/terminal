import './App.css';
import Game from './game';
import Canvas from './Canvas';

function App() {
  const w = 800;
  const h = 600;
  const options = {
    context: '2d'
  }
  let game = new Game(w, h);

  const draw = (ctx) => {
    game.draw(ctx);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Canvas draw={draw} options={options} width={w} height={h}/>
      </header>
    </div>
  );
}

export default App;
