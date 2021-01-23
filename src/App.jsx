import './App.css';
import Nav from './components/Nav'
import ListsContainer from './components/ListsContainer'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BoardsContainer from './components/BoardsContainer'
function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route exact path="/">
          <Link to="/boards">boards</Link>
        </Route>
        <Route exact path="/boards">
          <BoardsContainer />
        </Route>
        <Route path="/boards/:id" component={ListsContainer} />
      </Switch>
    </Router>
    
  );
}

export default App;
