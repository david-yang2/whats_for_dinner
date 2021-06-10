import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../card/card';
import LikeChef from '../likeChef/like_chef';


const ChefIndexItem = (props) => {

    // you can't call id on an null object, so use this to return null
    // if (!props.chef) {return null}
    return (
      <div className="chef-card">
          <div>
            <img className="chefimg"src={props.chef.imagepath} alt="" />
            <div className="chefheader">
              <h3 className="chefname">{props.chef.name}</h3>   
              <div className="cheflike"><LikeChef /></div> 
            </div>   
            <br />
            {/* <Link className="cheflink" to={`/chefs/${props.chef.id}/items`}>Check out {props.chef.name}'s Items</Link>
            <Link className="cheflink" to={`/chefs/${props.chef.id}`}>Quick Summary of Chef</Link>
            <br />
            <div> {props.chef.name}'s favorite quote:</div>
            <p className="chefquote">{props.chef.bio}</p> */}
          </div>


      </div>

    )

};
export default ChefIndexItem;
