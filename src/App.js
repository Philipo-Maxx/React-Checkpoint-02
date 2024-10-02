import players from "./players";
import PlayerList from "./components/PlayerList";
function App() {
  return (
    <div>
      <PlayerList playerList={players} />
    </div>
  );
}

export default App;
