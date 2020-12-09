import React, { Component } from 'react';

class SignUp extends Component{
    onSubmitButton(e){
        var bind = this.props;
        e.preventDefault();
        // console.log(serialize(e.target.elements))
        axios.post('/auth/store', {
            name: e.target.elements.name.value,
            email: e.target.elements.email.value,
            password: e.target.elements.password.value
        })
        .then(function (response) {
            alert(response.data[0].name + '님 가입해주셔서 감사');
            bind.onSelect('false');
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    render(){
        return(
            <div id="SignUp">
                <form onSubmit={this.onSubmitButton.bind(this)}>
                    <div>
                        <label htmlFor="login_name">이름</label>
                        <input name="name" type="text" id='input_name'></input>
                    </div>
                    <div>
                        <label htmlFor="login_id">이메일</label>
                        <input name="email" type="email" id='input_email'></input>
                    </div>
                    <div>
                        <label htmlFor="login_password">비밀번호</label>
                        <input name="password" type="password" id='input_email'></input>
                    </div>
                    <div>
                        <button type="submit">회원 가입</button>
                        <button onClick={function(e){
                            e.preventDefault();
                            this.props.onSelect('false');
                        }.bind(this)}>취소</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;