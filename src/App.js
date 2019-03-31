import React from 'react';
import {Route} from 'react-router-dom';
import Login from './login';
import SignUp from './signup';
import CredentialForm from './credentials';
import Posts from './posts';

const App = () => {
  return (
    <div>
      <Route path="/" component={CredentialForm} exact />
      <Route path="/signup" component={SignUp} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/posts" component={Posts} exact />
    </div>
  )
}

export default App;
