import React from "react";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout";
import { Provider } from "react-redux";
import firebase from "firebase/app";
import "firebase/auth";
import { createStore } from "redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { rootReducer } from "./store/root.reducer";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import Form from './components/Form/Form';

const fbConfig = {
  apiKey: "AIzaSyCqNYsWlJGWRF63Bv4v-guKwO2qKMDkx1I",
  authDomain: "needyapp-40d95.firebaseapp.com",
  databaseURL: "https://needyapp-40d95.firebaseio.com",
  projectId: "needyapp-40d95",
  storageBucket: "needyapp-40d95.appspot.com",
  messagingSenderId: "341012445293",
  appId: "1:341012445293:web:c5ef18b0846a8f535ca764",
};

const rrfConfig = {
  userProfile: "users",
};

const initialState = {};
const store = createStore(rootReducer, initialState);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
};
firebase.initializeApp(fbConfig);

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
          <Switch>
            <Route path="/oddaj-rzeczy" exact component={Form} />
          </Switch>
          <Switch>
            <Route path="/logowanie" exact component={Login} />
          </Switch>
          <Switch>
            <Route path="/rejestracja" exact component={Register} />
          </Switch>
          <Switch>
            <Route path="/wylogowano" exact component={Logout} />
          </Switch>
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
