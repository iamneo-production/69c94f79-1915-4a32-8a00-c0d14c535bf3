
import './App.css'
import Firstpage from './Firstpage.jsx';
import NewLogin from './Newlogin';
import AdminLogin from './AdminLogin';
import {useDispatch,useSelector} from 'react-redux';
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";
import Intro1 from './Intro1.jsx'
import Createpla from './Createpla';
import Myplaylist from './Myplaylist';
import Securitylogin from './Securitylogin';

function App() {
  return (
    <Router>
    <div className="App"> 
        <Switch> 
        <Route exact path="/" component={Firstpage}></Route>
        <Route exact path="/AdminLogin" component={AdminLogin}></Route>
        <Route exact path="/Newlogin" component={NewLogin}></Route>
        <Route exact path="/Intro1" component={Intro1}></Route>
        <Route exact path="/Createpla" component={Createpla}></Route>
        <Route exact path="/Myplaylist" component={Myplaylist}></Route>
         <Route exact path="/Securitylogin" component={Securitylogin}></Route>
       </Switch>
    </div> 
  </Router>
  );
}

export default App
