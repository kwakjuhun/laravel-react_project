import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Content from './Content';
import Footer from './Footer'
import '../App.css'

// function Index() {
class Index extends Component{
    constructor(props){  // 컴포넌트가 실행되면 젤 먼저 실행    초기화를 담당
        super(props);
        this.state = {
            selected_content_id:'main',
        //   mode:'read',
        //   selected_content_id:1,
        //   contents:[
        //     {id:1, title:'HTML', desc:'HTML is for infomation'},
        //     {id:2, title:'CSS', desc:'CSS is for infomation'},
        //     {id:3, title:'JavaScript', desc:'Javascript is for infomation'},
        //   ]
        }
    }
    render(){
        return (
            <div className="container">
                <Header onSelect={function(id){
                    this.setState({selected_content_id:id});
                    console.log(id, this.state.selected_content_id)
                }.bind(this)}></Header>
                <Content data={this.state.selected_content_id}></Content>
                <Footer></Footer>
            </div>
        ); 
    }
}

export default Index;

if (document.getElementById('Index')) {
    ReactDOM.render(<Index />, document.getElementById('Index'));
}
