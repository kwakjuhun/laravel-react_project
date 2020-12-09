import React, { Component } from 'react';
import Login from './headers/Login';
import SingUp from './headers/SignUp';

class Header extends Component{
  
  constructor(props){  // 컴포넌트가 실행되면 젤 먼저 실행    초기화를 담당
    super(props);
    this.state = {
      auth:'false', // 세션확인 후 
      session:false,
      boards:[]
    }
    axios.get('auth')
    .then((response)=>{
        this.setState({session:response.data[0]});
    }).catch((err)=>{
        alert(err);
    })
  }

  getAuth(){
    if(this.state.auth == 'login'){
      return <Login onSelect={function(request){
        if(request == false){
          this.setState({auth:request});
        }else{
          this.setState({session:request, auth:'false'})
        }
      }.bind(this)}></Login>
    }else if(this.state.auth == 'signup'){
      return <SingUp onSelect={function(request){


        this.setState({auth:request});
      }.bind(this)}></SingUp>
    }else if(this.state.auth == 'session'){
      this.setState({session:true});
    }
  }
  getSession(){
    if(!this.state.session){
      return[
        <a key="login" onClick={function(e){
          e.preventDefault();
          this.setState({auth:'login'});
        }.bind(this)}>로그인</a>,
        <a key="signup" onClick={function(e){
          e.preventDefault();
          this.setState({auth:'signup'});
        }.bind(this)}>회원가입</a>
      ];
    }else{
      return <a onClick={function(e){
        e.preventDefault();
        this.setState({auth:'false', session:false});
        axios.get('auth/logout');
      }.bind(this)}>{this.state.session.name}님 로그아웃</a>;
    }
  }

  render(){
    return(
      <header id="Header">

        <h1 id="logo" onClick={function(e){
          e.preventDefault();
          this.props.onSelect('main');
        }.bind(this)}>게시판 프로젝트</h1>

        <div id="account_div">
          {this.getSession()}
        </div>

        <div id="navigation_div">
          <a className="nav_button" onClick={function(e){
            e.preventDefault();
            this.props.onSelect(0);
          }.bind(this)}>게시판 1</a>

        </div>
        {this.getAuth()}
      </header>
    )
  }
}

export default Header;