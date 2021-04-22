import React from "react";
import { Route, Switch } from "react-router-dom";

import ChefIndexContainer from "./chefs/chef_index_container";
import ChefShowContainer from "./chefs/chef_show_container";
import EditChefFormContainer from "./chefs/edit_chef_form_container";
import ItemsIndexContainer from "./items/item_index_container";
import ChefsItemsShowContainer from "./items/chefs_items_show_container";
import NavBarContainer from "./nav/navbar_container";
import OurChefs from "./chefs/our_chefs";
import CartContainer from "./cart/cart_container";
import SignupContainer from './sessions/signup_container';
import Home from './home/home';
import {AuthRoute,
        ProtectedRoute} from "../util/route_api_util";
import UpdateCartCompContainer from "./user/updatecart_container";

// NB: this file is complete - you do not to write/edit anything!
const App = () => (


  <div>
      <Route path="/" component={NavBarContainer} />
      <Route exact path="/" component ={Home} />
      <Route exact path="/chefs" component ={ChefIndexContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <Route exact path="/chefs/:id" component={ChefShowContainer} />
      <Route path="/chefs/:id/items" component={ChefsItemsShowContainer} />
      <Route path="/chefs/:id/edit" component={EditChefFormContainer} />
      <Route exact path="/items" component={ItemsIndexContainer} />
      <ProtectedRoute path="/cart" component={CartContainer} />
      <Route path="/updatecart" component={UpdateCartCompContainer} />


  </div>
);

export default App;