import React, { Component } from 'react';
import Item from './Item';

class Items extends Component{

  	render() {
    	return (

    	<React.Fragment>
			<Item added={this.props.disPlay} deleItem={this.props.deleteItem}/>
		</React.Fragment>

    	);

  	}
}
export default Items;