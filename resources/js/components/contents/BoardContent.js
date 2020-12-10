import Axios from 'axios';
import React, { Component } from 'react';
class Board extends Component{
    render(){
        return(
            <div id="BoardContent">
                <div className='board_title'>{this.props.data[0].title}</div>
                <div className='board_body'>{this.props.data[0].body}</div>
                {this.props.data[1] == this.props.data[0].user_id ? 
                <button onClick={function(e){
                    e.preventDefault();
                    this.props.onSelect('edit');
                }.bind(this)}>수정</button> : null}
                {this.props.data[1] == this.props.data[0].user_id ? 
                <button onClick={function(e){
                    e.preventDefault();
                    axios.delete('/post/'+this.props.data[0].id)
                    .then((res)=>{
                        this.props.onSelect('list');
                    }).catch((res)=>{console.error(res)})
                }.bind(this)}>삭제</button> : null}
                <button className='board_back_btn' onClick={function(e){
                    e.preventDefault();
                    this.props.onSelect('list');
                }.bind(this)}>돌아가기</button>
            </div>
        )
    }
}

export default Board;