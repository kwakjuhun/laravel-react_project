import React, { Component } from 'react';
import './headers.css'
class Login extends Component{
    onSubmitButton(e){
        var bind = this;
        e.preventDefault();
        axios.post('/auth/login', {
            email: e.target.elements.email.value,
            password: e.target.elements.password.value
        })
        .then(function (response) {
            bind.props.onSelect(response.data[0]);
            alert(response.data[0].name + '님 환영합니다.');
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    render(){
        return(
            <div id="Login">
                <form onSubmit={this.onSubmitButton.bind(this)}>
                    <div>
                        <label htmlFor="login_id">이메일</label>
                        <input name="email" type="text" id='login_id'></input>
                    </div>
                    <div>
                        <label htmlFor="login_password">비밀번호</label>
                        <input name="password" type="password" id='login_password'></input>
                    </div>
                    <button type="submit">로그인</button>
                    <button onClick={function(e){
                        e.preventDefault();
                        this.props.onSelect(false);
                    }.bind(this)}>취소</button>
                </form>
            </div>
        )
    }
}

export default Login;