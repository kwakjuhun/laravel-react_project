import React, { Component } from 'react';
import Board from './contents/Board'
import Mainpage from './contents/Mainpage'
class Content extends Component{
    getSelectedContent(){
      var selected = this.props.data;
      if(selected == 'main'){
        return <Mainpage></Mainpage>
      }else{
        return <Board></Board>
      }
    }
    render(){
      
      return(
        <div>
            {this.getSelectedContent()}
        </div>
      )
    }
}

export default Content;