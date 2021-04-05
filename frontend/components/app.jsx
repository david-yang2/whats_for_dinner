import React from "react";
import { Route, Switch } from "react-router-dom";

import ChefIndexContainer from "./chefs/chef_index_container";
import ChefShowContainer from "./chefs/chef_show_container";
import EditChefFormContainer from "./chefs/edit_chef_form_container";

// NB: this file is complete - you do not to write/edit anything!
const App = () => (
  <div>
    <Switch>
      // route for the index container
      <Route exact path="/" component={ChefIndexContainer} />
      // route for the show container
      <Route exact path="/chefs/:id" component={ChefShowContainer} />
      // route for the EditPostFormContainer
      <Route path="/chefs/:id/edit" component={EditChefFormContainer} />
    </Switch>
  </div>
);

export default App;
