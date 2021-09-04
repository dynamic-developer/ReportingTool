import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { allReducers } from './redux/reducers';
import Loadable from 'react-loadable';
import { PropagateLoader } from 'react-spinners';
import './App.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const store = createStore(
  allReducers,
  {},
  window.devToolsExtension && window.devToolsExtension()
);

const loading = () => <div className="loading">{' '}<PropagateLoader color={'#165d93'} /></div>;

// Containers
const DefaultLayout = Loadable({
  loader: () => import('./containers/DefaultLayout'),
  loading: () => null
});

// Pages
const Login = Loadable({
  loader: () => import('./views/Pages/Login'),
  loading
});

const Home = Loadable({
  loader: () => import('./views/Home/Home'),
  loading
});

const Register = Loadable({
  loader: () => import('./views/Pages/Register'),
  loading
});

const Page404 = Loadable({
  loader: () => import('./views/Pages/Page404'),
  loading
});

const Page500 = Loadable({
  loader: () => import('./views/Pages/Page500'),
  loading
});


const history = createBrowserHistory();

const PrivateRoute = ({ component: Component }) => (
  <Route render={(props) =>
    localStorage.getItem('access_token') ? <Component {...props} /> : <Redirect to='/login' />
  } />
);

const RedirectRoute = ({ component: Component }) => (
  <Route render={(props) =>
    localStorage.getItem('access_token') ? <Redirect to='/demographics' /> : <Component {...props} />
  } />
);

toast.configure({
  autoClose: 2000,
  draggable: false,
});

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <React.Suspense fallback={loading()}>
            <Switch>
              <RedirectRoute exact path="/login" name="Login Page" component={Login} />
              <RedirectRoute exact path="/register" name="Register Page" component={Register} />
              <Route exact path="/404" name="Page 404" component={Page404} />
              <Route exact path="/500" name="Page 500" component={Page500} />
              <RedirectRoute exact path="/home" name="Home" component={Home} />
              <PrivateRoute path="/" name="Home" component={DefaultLayout} />
            </Switch>
          </React.Suspense>
        </Router>
      </Provider>
    );
  }
}

export default App;
