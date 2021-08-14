import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Letter from './pages/Letter';
import Picture from './pages/Picture';
import Camera from './pages/Camera';
import Gift from './pages/Gift';
import HBD from './pages/HBD';
import './App.css';


class App extends React.Component{
  render(){

    return (
      <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/letter' component={Letter} />
          <Route path='/picture' component={Picture} />
          <Route path='/camera' component={Camera} />
          <Route path='/gift' component={Gift} />
          <Route path='/hbd' component={HBD} />
  
        </Switch>
      </Router>
        
      </>
    );
  }

}

export default App;
