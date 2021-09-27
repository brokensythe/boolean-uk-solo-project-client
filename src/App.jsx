import './App.css';
import { Switch, Route } from 'react-router-dom';
import GamePage from './pages/GamePage';
import GameStartPage from './pages/GameStartPage';

function App() {
  return (
    <Switch>
      <Route path="/game/:gameId">
        <GamePage />
      </Route>
      <Route path="/">
        <GameStartPage />
      </Route>
    </Switch>
  );
}

export default App;
