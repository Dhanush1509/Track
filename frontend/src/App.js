import logo from './logo.svg';
import {Switch,BrowserRouter as Router,Link,Route} from "react-router-dom"
import Appbar from "./components/layout/Appbar"
import Home from "./components/pages/Main"
import Register from "./components/Auth/Register"
import Login from "./components/Auth/Login"
import AuthState from "./components/context/Auth/AuthState"
import AlertState from "./components/context/Alert/AlertState"
import Alerts from "./components/layout/Alerts"
import Main from "./components/pages/Attendance";
import Profile from "./components/pages/Profile"
function App() {
  return (
    <div className="App">
      <AuthState>
 
          <AlertState>
            <Router>
              <Appbar />
              <Alerts />
              <Switch>
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/main" component={Main} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/" component={Home} />
              </Switch>
            </Router>
          </AlertState>
   
      </AuthState>
    </div>
  );
}

export default App;
