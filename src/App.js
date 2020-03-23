import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import { Switch , Route} from 'react-router-dom';
import Home from './components/Home'
import UserProfile from './components/UserProfile'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
    <NavBar />
    <Container>
      <Switch>
        <Route exact path='/'
          render={() => <Home />} />
        <Route exact path='/userProfile'
          render={() => <UserProfile />} />
        

      </Switch>
    </Container>
  </>
  );
}

export default App;
