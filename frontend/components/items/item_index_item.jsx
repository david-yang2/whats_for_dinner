import React from 'react';
// import { Link } from 'react-router-dom';
// import RateMe from '../rating/rate_me';
import Card from '../card/card';

const ItemIndexItem = (props) => {

    // you can't call id on an null object, so use this to return null
    // if (props.item) {return null}
    // const {items} = this.props
    return (
        <div>
            <Card item={props.item} />
        </div>
            
    )
};
export default ItemIndexItem;


{/* <h3>
{props.item.name}
</h3>
<h5>
{props.item.description}
</h5>
<h4>
{props.item.price}
</h4> */}