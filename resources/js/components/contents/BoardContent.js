import React, { Component } from 'react';
class Board extends Component{
    render(){
        return(
            <div id="BoardContent">
                <div>제목</div>
                <div>메인 내용</div>
                <button>돌아가기</button>
            </div>
      )
    }
}

export default Board;