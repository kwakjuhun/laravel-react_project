import React, { Component } from 'react';
import Board from './contents/Board'
import Mainpage from './contents/Mainpage'
import './contents/contents.css'

class Content extends Component{
  getSelectedContent(){
    var selected = this.props.data;
    if(selected == 'main'){
      return <Mainpage></Mainpage>
    }
    else if(selected == 0){
      return <Board></Board>
    }
  }
  render(){     
    return(
      <div id='content'>
          {this.getSelectedContent()}
      </div>
    )
  }
}

export default Content;