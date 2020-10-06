import React, { Component } from 'react';
class Navigation extends Component{
    render(){
      return(
        <div id="navigation_div">
            <a className="nav_button">게시판 1</a>
            <a className="nav_button">게시판 2</a>
            <a className="nav_button">게시판 3</a>
        </div>
      )
    }
}

export default Navigation;