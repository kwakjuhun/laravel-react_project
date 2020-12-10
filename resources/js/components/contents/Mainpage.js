import React, { Component } from 'react';
class Board extends Component{
    render(){
        return(
            <div id="Mainpage">
                <h1>메인페이지</h1>
                <img src={ require('../../../../storage/cat.jpg')}/>
            </div>
      )
    }
}

export default Board;