import './App.css';
import Nav from './components/Nav'
import ListsContainer from './components/ListsContainer'
import BoardsContainer from './components/BoardsContainer'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { NotificationContainer } from "react-notifications";
import 'react-notifications/lib/notifications.css';


function App() {
  return (
    <>
      <Router>
        <Nav/>
        <Switch>
          <Route exact path="/">
            <BoardsContainer />
          </Route>
          <Route exact path="/boards">
            <BoardsContainer />
          </Route>
          <Route path="/boards/:id" component={ListsContainer} />
        </Switch>
      </Router>
      <NotificationContainer/>

    </>
    
  );
}

export default App;
