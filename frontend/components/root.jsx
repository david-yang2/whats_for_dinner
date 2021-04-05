import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './app';
import ChefIndexContainer from './chefs/chef_index_container';
import ChefShowContainer from './chefs/chef_show_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App store={store}/>
    </HashRouter>
  </Provider>
);

export default Root;