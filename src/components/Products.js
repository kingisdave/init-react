import React, { Component } from 'react';

class Products extends Component{
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
				<div className="container-fluid">
					<div className="card">
						<div className="card-body">
							<div id="demo" className="carousel slide" data-ride="carousel">
							  	<ul className="carousel-indicators">
							    	<li data-target="#demo" data-slide-to="0" className="active"></li>
							    	<li data-target="#demo" data-slide-to="1"></li>
							    	<li data-target="#demo" data-slide-to="2"></li>
							  	</ul>
							  	<div className="carousel-inner">
							    	<div className="carousel-item active">
								      	<img src="car.jpg" alt="Los Angeles" width="1100" height="500"/>
								     	<div className="carousel-caption">
									        <h3>Los Angeles</h3>
									        <p>We had such a great time in LA!</p>
								    	</div>   
							    	</div>
								    <div className="carousel-item">
									    <img src="cars2.jpg" alt="Chicago" width="1100" height="500"/>
									    <div className="carousel-caption">
									        <h3>Chicago</h3>
									        <p>Thank you, Chicago!</p>
									    </div>   
								    </div>
								    <div className="carousel-item">
								      	<img src="laptop.jpg" alt="New York" width="1100" height="500"/>
								      	<div className="carousel-caption">
								        	<h3>New York</h3>
								        	<p>We love the Big Apple!</p>
								      	</div>   
							    	</div>
							  	</div>
							  	<a className="carousel-control-prev" href="#demo" data-slide="prev">
							    	<span className="carousel-control-prev-icon"></span>
							  	</a>
							  	<a className="carousel-control-next" href="#demo" data-slide="next">
							    	<span className="carousel-control-next-icon"></span>
							  	</a>
							</div>
						</div>
					</div>
				</div>
				<div className="container bg-secondary text-center">
					<h3>These are the available products.</h3>
					<div className="row">
						<div className="col-xs-6 col-sm-4 col-lg-2">
							<div className="card m-2">
								<img src="laptop.jpg" alt="my pic" className="img-fluid"/>
								<div className="card-body">
									<p>These are the available products.</p>
								</div>
							</div>
						</div>
						<div className="col-xs-6 col-sm-4 col-lg-2">
							<div className="card m-2">
								<img src="laptop.jpg" alt="my pic" className="img-fluid"/>
								<div className="card-body">
									<p>These are the available products.</p>
								</div>
							</div>
						</div>
						<div className="col-xs-6 col-sm-4 col-lg-2">
							<div className="card m-2">
								<img src="laptop.jpg" alt="my pic" className="img-fluid"/>
								<div className="card-body">
									<p>These are the available products.</p>
								</div>
							</div>
						</div>
						<div className="col-xs-6 col-sm-4 col-lg-2">
							<div className="card m-2">
								<img src="laptop.jpg" alt="my pic" className="img-fluid"/>
								<div className="card-body">
									<p>These are the available products.</p>
								</div>
							</div>
						</div>
						<div className="col-xs-6 col-sm-4 col-lg-2">
							<div className="card m-2">
								<img src="laptop.jpg" alt="my pic" className="img-fluid"/>
								<div className="card-body">
									<p>These are the available products.</p>
								</div>
							</div>
						</div>
						<div className="col-xs-6 col-sm-4 col-lg-2">
							<div className="card m-2">
									<img src="laptop.jpg" alt="my pic" className="img-fluid"/>
								<div className="card-body">
									<p>These are the available products.</p>
								</div>
							</div>
						</div>
					</div>
				</div>				
    		</React.Fragment>
    	);
  	}
}
export default Products;
