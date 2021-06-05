import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import Prog1 from './components/prog1';
import {Navbar ,NavbarBrand} from 'reactstrap';
import {PROGRAMERS} from './shared/programs';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import { Switch, Route, Redirect,BrowserRouter ,Router} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';


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
   
  
<BrowserRouter>

<Header/>

<Prog1 programers={this.state.programers}/>

<Footer/>
<Switch>
              <Route path='/Home' components={Home} />
              <Route path='/Contact' components={Contact}    />
              <Route exact path='/Prog1' components={() => <Prog1 programers={this.state.programers} />} />
              <Redirect to="/Home" />
          </Switch> 



</BrowserRouter>
</div>
   )
 }
  
}

export default App;