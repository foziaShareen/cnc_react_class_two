import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import Prog1 from './components/prog1';
import {Navbar ,NavbarBrand} from 'reactstrap';
import {PROGRAMERS} from './shared/programs';

class App extends Component  {
 constructor(props){
   super(props)
   this.state={
     programers:PROGRAMERS
   }
 }
 render(){
   return(
     <div>
    <Navbar dark color="primary">

     <div className="container">
  <NavbarBrand href="/">
Hire the top level Programers
  </NavbarBrand >
  </div>

</Navbar>

<Prog1 programers={this.state.programers}/>
</div>
   )
 }
  
}

export default App;