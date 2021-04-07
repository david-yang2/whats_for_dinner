import React from 'react';
import ItemIndexItem from './item_index_item';
import Randomizer from '../randomizer/randomizer';


class ItemIndex extends React.Component{
    componentDidMount() {
        this.props.fetchItems();
        console.log("here")
    }


    render() {
        const {items} = this.props;

        console.log(items)
        return (

            <div>
                <ul>
                    {
                    items.map(item => <ItemIndexItem
                                        item={item}
                                        key={item.id}
                                        />
                            )   
                    }
                </ul>

            </div>
        );
    }
}
export default ItemIndex;
