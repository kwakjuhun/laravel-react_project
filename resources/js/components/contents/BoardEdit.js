import React, { Component } from 'react';


class Board extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:null,
            title:'',
            body:'',
        };
        if(this.props.data){
            this.state = {
                id:this.props.data.id,
                title:this.props.data.title,
                body:this.props.data.body,
            };
        }
        
    }
                
    onChange(e){
        const { value, name } = e.target;
        if(name=='title'){
            this.setState({title:value})
        }else{
            this.setState({body:value});
        }        
    }
      
    postData(){
        var bind = this.props;
        if(this.state.id != null){
            axios.patch('post/'+this.state.id,{
                title:this.state.title,
                body:this.state.body
            })
            .then(function (response) {
                bind.onSelect(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
        else{
            axios.post('post',{
                title:this.state.title, 
                body:this.state.body,
                board_id:1
            })
            .then(function (response) {
                bind.onSelect(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
    render(){
        return(
            <div id="BoardEdit">
                <input type="text" className='edit_title' name="title" onChange={this.onChange.bind(this)} placeholder="제목" value={this.state.title}></input>
                <textarea className='edit_body' name="body" onChange={this.onChange.bind(this)} placeholder="내용" value={this.state.body}></textarea>
                <div>
                    <button className='edit_save_btn' onClick={this.postData.bind(this)}>저장</button>
                    <button className='edit_back_btn' onClick={function(e){
                        this.props.onSelect('list');
                    }.bind(this)}>취소</button>
                </div>
            </div>
        )
    }
}

export default Board;