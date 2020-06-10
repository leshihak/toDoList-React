import React from 'react';
import MainPageToDoList from './toDos/MainPageToDoList';
import Home from './pages/Home';
import Header from './Header';
import About from './pages/About';
import Contact from './pages/Contact';
import SignUpForm from './pages/SignUpForm';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

export default function Main2() {
  return (

      <BrowserRouter>
        <Switch>
          <div className='container'>
            <Header />
            <Route path='/' component={Home} exact/>
            <Route path='/toDos' component={MainPageToDoList}/>
            <Route path='/signUp' component={SignUpForm}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
          </div>
        </Switch>
      </BrowserRouter>

  )
}
