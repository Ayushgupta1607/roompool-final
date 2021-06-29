

import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import ComingSoon from './components/Comingsoon';
import Header from './components/header/header';
import getStarted from './components/getStarted';
import landing from './containers/landing';
import Signup from './components/Signup';
import Login from './components/Login';
import Flat from './components/flat';
import Roommate from './components/Roommate';


function App() {
  return (
     <Router>
          <Route path="*" component={Header}></Route>
          <Route path="/" exact component={landing} />
          <Route path="/flat" exact component={Flat}/>
          <Route path="/Roommate" exact component={Roommate}/>
          <Route path="/flatPool" exact component={getStarted} />
          <Route path="/water" exact component={ComingSoon} />
          <Route path="/pg" exact component={ComingSoon} />
          <Route path="/wifi" exact component={ComingSoon} />
          <Route path="/food" exact component={ComingSoon} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/Login" exact component={Login}></Route>
          <Route path="*" exact component={Footer} />
     </Router>
  );
}

export default App;
