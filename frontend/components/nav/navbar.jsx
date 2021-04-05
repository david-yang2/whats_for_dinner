import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component{

    render(){
        return (
            <div>
                <h1>navbar</h1>
                <ul>
                    <Link to="/chefs"></Link>
                </ul>
            </div>
        );
    }

}
export default NavBar;