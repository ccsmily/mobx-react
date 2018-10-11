import React, { Component } from 'react';
import { BrowserRouter as Router, Route ,NavLink} from 'react-router-dom'
import List from './list/index'
import Form from './form/index'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="navbar">
            <div className="nav-list container">
              <NavLink to="/form" activeClassName="activeLink">form</NavLink>
              <NavLink to="/list" activeClassName="activeLink">list</NavLink>
            </div>
          </div>
          <Route path="/list" component={List}/>
          <Route path="/form" component={Form}/>
          <Route path="/" exact stricte component={Form}/>
        </div>
      </Router>
    );
  }
}


export default App;
