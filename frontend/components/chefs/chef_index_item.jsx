import React from 'react';
import { Link } from 'react-router-dom';
import RateMe from '../rating/rate_me';

const ChefIndexItem = (props) => {

    // you can't call id on an null object, so use this to return null
    // if (!props.chef) {return null}
    return (
      <li>
        <Link to={`/chefs/${props.chef.id}`}>{props.chef.name}</Link>
        <br />
        <div> {props.chef.name}'s restaurant is located in{props.chef.location}</div>
        <p>{props.chef.bio}</p>
        <Link to={`/chefs/${props.chef.id}/edit`}>Edit</Link>
        <RateMe />
        <button onClick={() => props.deleteChef(props.chef.id)}>Delete</button>
      </li>
    );
};
export default ChefIndexItem;