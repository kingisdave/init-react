import React, { Component } from 'react';

	class Item extends Component {
		
		state = {}

		render(){
			let total = 0;
			
			return(
				<React.Fragment>
		    		<div className="card mt-3 shadow-lg">
		    			<div className="card-header bg-info text-white">
		    				<span>Items</span>
		    			</div>
		    			<div className="card-body">
		    			{ (this.props.added.length > 0) ? (
		    			<div>
	    				<table className="table">
	    					<thead>
	    						<tr>
	    							<th>S/N</th>
	    							<th>Item</th>
	    							<th>Price</th>
	    							<th>Quantity</th>
	    							<th>Picture</th>
	    							<th>Total</th>
	    							<th>Operation</th>
	    						</tr>
	    					</thead>
	    					<tbody>
	    						{ this.props.added.map((myitem, index)=> 
	    							{
	    							return(			
			    						<tr key={index}>
				    						<td>{index+1}</td>
				    						<td>{myitem.itemName}</td>
				    						<td>{myitem.price}</td>
				    						<td>{myitem.quantity}</td>
				    						<td><img src="" className="img" alt="" width="50" height="50"/> {myitem.pix} </td>
				    						<td>{myitem.price * myitem.quantity}</td>
				    						<td>
				    							<span className="badge badge-danger ml-3" onClick={ () => this.props.deleItem(index) } >&times;</span>
				    						</td>
	 		    						</tr>	
	    							)
	    							})
	    						}
	    					</tbody>
	    				</table>
		    			{this.props.added.map(myitem => {
		    					 
                      total += myitem.quantity * myitem.price
                     	 })}
                      <span className="divider"></span>
                       <span className="h4">Total: { total }.00</span>
                  </div>
              	) : <span> No record available</span>}
		    			</div>
		    		</div>
			   </React.Fragment>
			)
		}	
	}
export default Item;