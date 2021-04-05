import React from 'react';
import { Link } from 'react-router-dom';

const ChefIndexItem = (props) => {

    // you can't call id on an null object, so use this to return null
    // if (!props.chef) {return null}
    return (
      <li>
        <Link to={`/chefs/${props.chef.id}`}>{props.chef.name}</Link>
        <Link to={`/chefs/${props.chef.id}/edit`}>Edit</Link>

        <button onClick={() => props.deleteChef(props.chef.id)}>Delete</button>
    </li>
    );
};
export default ChefIndexItem;