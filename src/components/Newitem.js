import React, { Component } from 'react';

class Newitem extends Component{
	state = {
		itemName:'',
		price:'',
		quantity:'',
        pix:'',
	} 	

	letsChange=(e)=>{
		this.setState({
			[e.target.id]: e.target.value

	}

	handleSubmit=(e)=>{
		e.preventDefault();
		this.props.onAdd(this.state);
        this.setState({
            itemName:'',
            price:'',
            quantity:'',
            pix:''
        })
	}

  	render() {
    	return (

    	<React.Fragment>
    		<div className="card mt-3 shadow-lg">
    			<div className="card-header bg-info text-white ">
    				<span>New Item</span>
    			</div>
    			<div className="card-body">
    				<form onSubmit={this.handleSubmit}>
    					<div className="form-group">
    						<input type="text" id="itemName" className="form-control" placeholder="New Item" onChange={this.letsChange} />
    					</div>

    					<div className="form-group">
    						<input type="text" id="price" className="form-control" placeholder="New Price" onChange={this.letsChange} />
    					</div>

    					<div className="form-group">
    						<input type="text" id="quantity" className="form-control" placeholder="New Quantity" onChange={this.letsChange} />
    					</div>
                        <div className="form-group">
                            <input type="file" id="pix" className="form-control" placeholder="New Picture" onChange={this.letsChange} />
                            {/*<div>{item}</div>*/}
                        </div>
    					<div className="form-group">
    						<button type="submit" className="btn btn-primary btn-block">Add New Items</button>
    					</div>
    				</form>
    				
    			</div>
  
    			
    		</div>
    	</React.Fragment>

    	);
  	}
}
export default Newitem;