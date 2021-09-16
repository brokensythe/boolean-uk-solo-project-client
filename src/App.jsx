import './App.css';
import { Switch, Route } from 'react-router-dom';
import GameBoardPage from './pages/GameBoardPage';

function App() {
  return (
    <Switch>
      <Route path="/">
        <GameBoardPage />
      </Route>
    </Switch>
  );
}

export default App;
