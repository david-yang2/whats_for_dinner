import React from 'react';

class Home extends React.Component{
    constructor(props){
        super(props)

        this.redirectToChefs = this.redirectToChefs.bind(this)
        this.redirectToItems = this.redirectToItems.bind(this)
    }

    redirectToChefs(){
        this.props.history.push(`/chefs`)
    }

    redirectToItems(){
        this.props.history.push(`/items`)
    }

    render(){
        return(
            <div className="home">
                <div>
                    <div>What's for dinner?</div>
                    <div>Let me help you out with these 2 unique features!</div>
                    <div className="redirect-container">
                        <button className="redirect-btn" onClick={this.redirectToChefs}>Choose From <span className="btn-choice">Chefs</span></button>
                        <button className="redirect-btn" onClick={this.redirectToItems}>Choose From <span className="btn-choice">Items</span></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;