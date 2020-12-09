import React, { Component } from 'react';

import BoardContent from './BoardContent';

import BoardEdit from './BoardEdit';
class Board extends Component{
    constructor(props){  // 컴포넌트가 실행되면 젤 먼저 실행    초기화를 담당
        super(props);
        this.state = {
            login:false,
            data:[],
            mode:'list',
            clicked:0
        };  
        
        axios.get('/board/'+1)
        .then((response)=>{
            this.setState({
                data:response.data[0],
                login:response.data[1]
            });
        }).catch((err)=>{
            console.log(err);
        });
    
    }
    dataUpdate(){
        axios.get('/board/'+1)
        .then((response)=>{
            this.setState({
                data:response.data[0],
            });
        }).catch((err)=>{
            console.log(err);
        });
    }
 
    render(){
    
        var list = [];
        var datas = this.state.data;
        var i = 0
        while(i < datas.length){
            var data = datas[i];
            let j = i;
            list.push(
                <tr key={j} onClick={function(e){
                        this.setState({mode:'view', clicked:j});
                    }.bind(this)}>
                    <th>{data.id}</th>
                    <th>{data.title}</th>
                    <th>{data.user.name}</th>
                </tr>
            )
            i = i + 1
        };

        return(
            <div id="Board">
                <table id="boardTable">
                    <tbody>
                        <tr key='board_title'>
                            <th width="15%">번호</th>
                            <th width="70%">제목</th>
                            <th width="15%">작성자</th>
                        </tr>
                        {list}
                    </tbody>
                </table>
                {this.state.login ? <button onClick={function(e){
                    this.setState({mode:'create'})
                }.bind(this)}>글쓰기</button> : null}
                {this.state.mode == 'view' ? <BoardContent data={[this.state.data[this.state.clicked], this.state.login]} 
                onSelect={function(response){
                    if(response == 'edit'){
                        this.setState({mode:'edit'});
                    }else{
                        this.setState({mode:'list'});
                    }
                }.bind(this)}></BoardContent> : null}
                {this.state.mode == 'create' ? <BoardEdit onSelect={function(res){
                    this.setState({mode:'list'});
                    this.dataUpdate();
                }.bind(this)}></BoardEdit> : null}
                {this.state.mode == 'edit' ? <BoardEdit data={this.state.data[this.state.clicked]} onSelect={function(res){
                    this.setState({mode:'list'});
                    this.dataUpdate();
                }.bind(this)}></BoardEdit> : null}
            </div>
        )
    }
}

export default Board;