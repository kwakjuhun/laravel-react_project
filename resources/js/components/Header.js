import React, { Component } from 'react';
import MainHeader from './headers/MainHeader';
import Navigation from './headers/Navigation';
class Header extends Component{
    render(){
      return(
        <header id="Header">
            <MainHeader></MainHeader>
            <Navigation></Navigation>
        </header>
      )
    }
}

export default Header;