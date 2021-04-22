import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import App from '../src/components/App';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Contacts from './components/Contacts';


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/about" component={About}/>
                <Route path="/services" component={Services}/>
                <Route path="/products" component={Products}/>
                <Route path="/contacts" component={Contacts}/>
            </Switch>
            <Footer/>
        </Router>
    </React.StrictMode>
    , document.getElementById('root'));

