import React, { Component } from 'react';
class Header extends Component{
    render(){
      
      return(
        <header id="Header">
            <h1 id="logo" onClick={function(e){
              e.preventDefault();
              this.props.onSelect('main');
            }.bind(this)}>게시판 프로젝트</h1>
          <div id="navigation_div">
            <a className="nav_button" onClick={function(e){
              e.preventDefault();
              this.props.onSelect(0);
            }.bind(this)}>게시판 1</a>
            <a className="nav_button">게시판 2</a>
            <a className="nav_button">게시판 3</a>
          </div>
        </header>
      )
    }
}

export default Header;