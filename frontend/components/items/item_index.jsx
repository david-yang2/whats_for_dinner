import React from 'react';
import ItemIndexItem from './item_index_item';
import Randomizer from '../randomizer/randomizer';
import Cart from "../cart/cart_container";


class ItemIndex extends React.Component{
    constructor (props) {
        super(props)
        this.state={
            searchTerm: "",
            
        };
        this.updateSearch = this.updateSearch.bind(this);
        this.addToCart = this.addToCart.bind(this)
    }

    componentDidMount() {
        this.props.fetchItems();
        this.props.session.currentUser ? 
                (this.props.fetchCurrentUser(this.props.session.currentUser.id))
                : (null)
    }
    
    addToCart(currentItem){
        return this.props.updateCart({ 
                                user_id: this.props.user.id,
                                name: currentItem.name,
                                description: currentItem.description,
                                price: currentItem.price,
                                imagepath: currentItem.imagepath,
        })
    }
    updateSearch(){
        return e => {
            this.setState({searchTerm: e.currentTarget.value})
        };
    }
    render() {
        const {items} = this.props;
        //this.props.items will give us an array of items
        return (

            <div>
                <input type="text" 
                        placeholder="Search for an item.." 
                        onChange={this.updateSearch()} />
                <ul>
                {
                    items.map(item => {
                        if(this.state.searchTerm == '') {
 
                            return (
                                <div>
                                    <ItemIndexItem
                                    item={item}
                                    cart={this.state.cart}
                                    addToCart={this.addToCart}
                                    key={item.id}
                                    user={this.props.user}
                                    currentUser = {this.props.session.currentUser}
                                    />
                                </div>
                            )
                        } else if (item.name.toLowerCase().includes(this.state.searchTerm) ||
                                    item.description.toLowerCase().includes(this.state.searchTerm)) {
                            return (
                                <ItemIndexItem
                                item={item}
                                cart={this.state.cart}
                                addToCart={this.addToCart}
                                key={item.id}
                                user={this.props.user}
                                currentUser = {this.props.session.currentUser}
                                />
                            )
                        }
                    })

                }
                </ul>
                <div>
                    <Cart fromItemContainer={true}/>
                </div>
            </div>
        );
    }
}
export default ItemIndex;
























