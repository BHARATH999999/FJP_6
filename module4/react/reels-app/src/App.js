// import logo from './logo.svg';
import './App.css';
import Feed from './components/Feed'
import Login from './components/Login'
import Profile from './components/Profile'
import PageNotFound from "./components/PageNotFound"
import SignUp from './components/Signup'
import { Redirect, Route, Switch } from 'react-router-dom';
import { AuthContext, AuthContextProvider } from './context/Authcontext'
import { Component, useContext } from 'react';

function App() {
  return (
    <AuthContextProvider>
      <Switch>
        <PrivateRoute path ="/feed" comp = {Feed}>

        </PrivateRoute>
        {/* <Route path="/feed">
          <Feed></Feed>
        </Route> */}

        <Route path="/login">
          <Login></Login>
        </Route>

        <Route path="/signup">
          <SignUp> </SignUp>
        </Route>

        <PrivateRoute path= "/profile" comp = {Profile} >

        </PrivateRoute>
        {/* <Route path="/profile">
          <Profile> </Profile>
        </Route> */}
        <Route>
          <PageNotFound> </PageNotFound>
        </Route>
      </Switch>
    </AuthContextProvider>
  );
}

function PrivateRoute(props){
  let Component = props.comp;
  let cUser = useContext(AuthContext);
    return(
      <Route
        {...props}

        render = {
          (props) => {
            return cUser != null ? <Component {...props}></Component> : <Redirect {...props} to = "/login"></Redirect>
          }
        }
      ></Route>
    )
}
export default App;
