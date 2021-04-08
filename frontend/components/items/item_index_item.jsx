import React from 'react';
// import { Link } from 'react-router-dom';
// import RateMe from '../rating/rate_me';

const ItemIndexItem = (props) => {
    console.log("starting item props")
    console.log(props)
    // you can't call id on an null object, so use this to return null
    // if (props.item) {return null}
    // const {items} = this.props
    return (
            <li>
                <p>ok</p>
                {props.item.name}
            </li>
    )
};
export default ItemIndexItem;