import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import Prog1 from './components/prog1';
import {Navbar ,NavbarBrand} from 'reactstrap';
import {PROGRAMERS} from './shared/programs';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';


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
   
  


<Header/>

<Prog1 programers={this.state.programers}/>

<Footer/>


</div>
   )
 }
  
}

export default App;