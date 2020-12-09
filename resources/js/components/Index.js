import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Content from './Content';
import Footer from './Footer'
import '../App.css'
import axios from 'axios';

class Index extends Component{
    constructor(props){
        super(props);
        this.state = {
            user:false,
            selected_content_id:'main',
        } 
    }
     render(){
        return (
            <div id="container">
                <Header data={this.state.user} onSelect={function(id){
                    this.setState({selected_content_id:id});
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
