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
        <PrivateRoute path="/feed" comp={Feed}>

        </PrivateRoute>
        {/* <Route path="/feed">
          <Feed></Feed>
        </Route> */}

        <RedirectToFeed path="/login" comp={Login}></RedirectToFeed>
        {/* <Route path="/login">
          <Login></Login>
        </Route> */}

        <RedirectToFeed path="/signup" comp={SignUp}></RedirectToFeed>

        {/* <Route path="/signup">
          <SignUp> </SignUp>
        </Route> */}

        <PrivateRoute path="/profile" comp={Profile} >

        </PrivateRoute>
        {/* <Route path="/profile">
          <Profile> </Profile>
        </Route> */}

        <Redirect from ="/" to = "/feed"></Redirect> //if already logged in rediects to Feed else redirects to login
        <Route>
          <PageNotFound> </PageNotFound>
        </Route>
      </Switch>
    </AuthContextProvider>
  );
}

function PrivateRoute(props) {
  let Component = props.comp;
  let cUser = useContext(AuthContext);
  return (
    <Route
      {...props}

      render={
        (props) => {
          return cUser != null ? <Component {...props}></Component> : <Redirect {...props} to="/login"></Redirect>
        }
      }
    ></Route>
  )
}

function RedirectToFeed(props) {
  let Component = props.comp;
  let cUser = useContext(AuthContext);

  //cUser == null ? login : return to Feed

  return (<Route
    {...props}

    render={
      (props) => {
        return cUser != null ? <Redirect {...props} to="/feed"></Redirect> : <Component {...props}></Component>
      }
    }
  >
  </Route>)
}
export default App;
