import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Items from './components/Items';
// import Newitem from './components/Newitem';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component{
 //  state = {
 //    items: []
 //  }
 //  addItem=(item)=>{
 //    this.setState({
 //      items:[...this.state.items, item]
 //    })
 // console.log(this.state.items)
 //  }  

 //  deleteItem=(itemIndex)=>{
 //    let newArray = this.state.items.filter((item, index) => index !== itemIndex);
 //    this.setState({
 //      items: newArray
 //    })
 //  }

  render() {
    return (  
      <BrowserRouter>
        <Navbar/>
        <Switch>
           <Route path="/" component={Home} exact />
           <Route path="/about" component={About} />
           <Route path="/contact" component={Contact} />
           <Route path="/products" component={Products} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;

// class App extends React.Component{
//   state = {
//     students: [
//       {firstname: 'Lekan', lastname: 'Opeyemi', age: '29'},
//       {firstname: 'Gabriel', lastname: 'Odeyemi', age: '39'},
//       {firstname: 'Okanna', lastname: 'Oyeyemi', age: '49'},
//       {firstname: 'Ayinde', lastname: 'Oluyemi', age: '59'},
//       {firstname: 'Alade', lastname: 'Olayemi', age: '69'},
//       {firstname: 'Samuel', lastname: 'Ojeyemi', age: '19'},
//     ]   
//   }



//   render() {
//     return (
//       <React.Fragment>
       
//           {this.state.students.map((s, index)=>
//             {

//             return (

//               <div>
//                 <p>{index + " " + s.firstname + " " + s.lastname + " " + s.age}</p>
//               </div> 
//             );

//           })}

//       </React.Fragment>
//     );
//   }
// }

//function App() {
// return (
//    <div>
//     <p>David</p>
//      <p>Oluwafemi</p>
//    </div>

    // <div className="App">
    // <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
//  );
//}

// export default App;
