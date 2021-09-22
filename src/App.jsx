import './App.css';
import { Switch, Route } from 'react-router-dom';
import GameBoardPage from './pages/GameBoardPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <Switch>
      <Route path="/game">
        <GameBoardPage />
      </Route>
      <Route path="/">
        <SignUpPage />
      </Route>
    </Switch>
  );
}

export default App;
