import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Content from './Content';
import Footer from './Footer'
import '../App.css'

function Index() {
    return (
        <div className="container">
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
        </div>
    );
}

export default Index;

if (document.getElementById('Index')) {
    ReactDOM.render(<Index />, document.getElementById('Index'));
}
