import './App.css';
import { Switch, Route } from 'react-router-dom';
import GamePage from './pages/GamePage';

function App() {
  return (
    <Switch>
      <Route path="/game">
        <GamePage />
      </Route>
      <Route path="/">
        <GamePage />
      </Route>
    </Switch>
  );
}

export default App;
