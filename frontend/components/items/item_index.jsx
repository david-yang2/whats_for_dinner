import React from 'react';
import ItemIndexItem from './item_index_item';
import Randomizer from '../randomizer/randomizer';


class ItemIndex extends React.Component{
    constructor (props) {
        super(props)
        this.state={
            searchTerm: ""
        };
        this.updateSearch = this.updateSearch.bind(this);

    }
    componentDidMount() {
        this.props.fetchItems();
        // console.log("here")

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
                                <ItemIndexItem
                                item={item}
                                key={item.id}
                                />
                            )
                        } else if (item.name.toLowerCase().includes(this.state.searchTerm )) {
                            return (
                                <ItemIndexItem
                                item={item}
                                key={item.id}
                                />
                            )
                        }
                    })

                }



                </ul>
            </div>
        );
    }
}
export default ItemIndex;























