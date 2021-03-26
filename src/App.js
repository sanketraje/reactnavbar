import logo from './logo.svg';
import './App.css';
// import './imageG.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Login from './Login';
import Contact from './Contact';
import Services from './Services';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={gal}/>
          <Route path="/Home" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Contact" component={Contact}/>
          <Route path="/Services" component={Services}/>
        </Switch>
      </div>
   </Router>
  );
}

const gal= () =>(
  <div>
    <h1>Gallery</h1>
  </div>
)

export default App;
