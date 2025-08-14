import "./App.css";
import Player from "./lib/AdzyPlayer";
function App() {
  return (
    <>
      <div>
        <Player
          w="100vw"
          h="100vh"
          skinUrl="/my-custom-skin.png"
          color1="#fec163"
          color2="#de4313"
        />
      </div>
    </>
  );
}

export default App;
