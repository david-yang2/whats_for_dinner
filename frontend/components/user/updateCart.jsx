import React from "react";

class UpdateCartComp extends React.Component{
    constructor(props){
        super(props);
        // this.addToUsersCart = this.addToUsersCart.bind(this);
    }

    componentDidMount(){

        this.props.fetchCurrentUser(this.props.session.currentUser.id);
        // console.log("component mounted")
    }

    // addToUsersCart(itemToBeAdded){
    //     this.props.updateCart(itemToBeAdded)
    // }

    render() {
        // if (!this.props.user) return null

        return(
            <div>
                {this.props.updateCart({ user_id: this.props.user.id,
                                        name: this.props.name,
                                        description: this.props.description,
                                        price: this.props.price,
                                        review: ""
                                    })}
            </div>
            // <div>
            //     <h1>Hello</h1>
            //     <h3>{this.props.user.username}</h3>
            //     <button onClick={()=>this.addToUsersCart({
            //                                             user_id: this.props.user.id,
            //                                             name: "blt sandwich",
            //                                             price: 4.99,
            //                                             description: "bacon, lettuce, tomatoes, wheat bread"
            //                                             })}>add this</button>
            // </div>

        )
    }
}

export default UpdateCartComp;