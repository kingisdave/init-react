import React, { Component } from 'react';
import Items from './Items';
import Newitem from './Newitem'; 

class Home extends Component{
  state = {
    items: []
  }
  addItem=(item)=>{
    this.setState({
      items:[...this.state.items, item]
    })
 console.log(this.state.items)
  }

  deleteItem=(itemIndex)=>{
    let newArray = this.state.items.filter((item, index) => index !== itemIndex);
    this.setState({
      items: newArray
    })
  }

  render() {
    return (
        <React.Fragment>
    
       		<div className="container-fluid">
      
                <div className="row">
                  <div className="col-md-8">
                    <Items disPlay={this.state.items} deleteItem={this.deleteItem} />
                  </div>
                   <div className="col-md-4">
                    <Newitem onAdd={ this.addItem } />
                  </div>
                </div>
              </div>
        </React.Fragment>

   		);
  	}
}
export default Home;
