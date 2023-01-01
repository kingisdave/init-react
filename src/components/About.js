import React, { Component } from 'react';
class About extends Component{
	state = { } 	
  	render() {
    	return (
    	<React.Fragment>
    			<div className="jumbotron">
					<div className="container-fluid text-center">
				    	<h1>Online Store</h1>      
				    	<p>Mission, Vission n Values</p>
				  	</div>
				</div>
				<div className="container bg-info text-center">
					<div className="card">
						<div className="card-header">
							About Us
						</div>
						<div className="card-body bg-secondary">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi obcaecati 
							aspernatur sequi qui dicta inventore ipsa nesciunt ut corrupti blanditiis
							 beatae provident nisi iusto, autem rerum nam rem voluptatibus eveniet.
						</div>
					</div>
				</div>				
    		</React.Fragment>
    	);
  	}
}
export default About;
