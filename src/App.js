
import { useState } from 'react';
import './App.css';

import {BrowserRouter as Router,
        Switch,
        Route,
        Link
      } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Summary from './components/Summary'

function App() {
  
  const [loginStatus, SetLoginStatus] = useState(false);

  return (<>
    <Router>
    <Topbar loginStatus={loginStatus}/>
    
      <Switch>
           {//<Route exact path="/"><Dashboard/><UserList/></Route>
}
          <Route exact path="/"><LandingPage/></Route>
          <Route exact path="/dashboard">
            <Sidebar/>
            <div className="main">
            <Dashboard/>
            </div>
            </Route>
          <Route exact path="/summary">
            <Sidebar/>
            <div className="main">
            <Summary/>
            </div>
          </Route>
       </Switch>
    </Router>
    </>
  );
}

export default App;
