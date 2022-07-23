// import logo from './logo.svg';
import './App.css';
import Feed from './components/Feed'
import Login from './components/Login'
import Profile from './components/Profile'
import PageNotFound from "./components/PageNotFound"
import SignUp from './components/Signup'
import { Route, Switch } from 'react-router-dom';
import { AuthContextProvider } from './context/Authcontext'

function App() {
  return (
    <AuthContextProvider>
      <Switch>
        <Route path="/feed">
          <Feed></Feed>
        </Route>

        <Route path="/login">
          <Login></Login>
        </Route>

        <Route path="/signup">
          <SignUp> </SignUp>
        </Route>

        <Route path="/profile">
          <Profile> </Profile>
        </Route>
        <Route>
          <PageNotFound> </PageNotFound>
        </Route>
      </Switch>
    </AuthContextProvider>
  );
}

export default App;
