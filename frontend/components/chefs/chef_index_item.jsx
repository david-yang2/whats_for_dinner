import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../card/card';
import LikeChef from '../likeChef/like_chef';
import "./chef_index_item.css";


const ChefIndexItem = (props) => {

    // you can't call id on an null object, so use this to return null
    // if (!props.chef) {return null}
    return (
      <div className="chef-card">
          <div>
            <img src={props.chef.imagepath} alt="" />
            <h3>{props.chef.name}</h3>       
            <LikeChef />
            <br />
            <Link to={`/chefs/${props.chef.id}/items`}>Check out {props.chef.name}'s Items</Link>
            <Link to={`/chefs/${props.chef.id}`}>Quick Summary of Chef</Link>
            <br />
            <div> {props.chef.name}'s restaurant is located in {props.chef.location}</div>
            <p>{props.chef.bio}</p>
          </div>


      </div>

    )

};
export default ChefIndexItem;

{/* <Link to={`/chefs/${props.chef.id}/edit`}>Edit</Link>
<button onClick={() => props.deleteChef(props.chef.id)}>Delete</button>  */}

// return (
//   <Card chef={props.chef} />
// );