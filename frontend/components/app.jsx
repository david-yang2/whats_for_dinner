import React from "react";
import { Route, Switch } from "react-router-dom";

import ChefIndexContainer from "./chefs/chef_index_container";
import ChefShowContainer from "./chefs/chef_show_container";
import EditChefFormContainer from "./chefs/edit_chef_form_container";
import NavBar from "./nav/navbar";
import Randomizer from "./randomizer/randomizer_container";

// NB: this file is complete - you do not to write/edit anything!
const App = () => (


  <div>
      <NavBar />
      <Route exact path="/" component ={Randomizer} />
      <Route exact path="/chefs" component={ChefIndexContainer} />
      <Route exact path="/chefs/:id" component={ChefShowContainer} />
      <Route path="/chefs/:id/edit" component={EditChefFormContainer} />
  </div>
);

export default App;
