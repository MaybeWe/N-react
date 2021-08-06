import React from 'react';
import { Button, Input } from 'antd';
import './login.css';
import axios from 'axios';
import '../../common/axiosSetting'
import { StoreState } from '../../store/type';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { CHANGElOGIN } from '../../store/actions';
import history from '../../common/history';

// 创建类型接口
export interface IProps {
    onLogin: () => void,
    onLogout: () => void,
  }
class Login extends React.Component<IProps>{
    token: any;
    constructor(props: any) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.token = '';
    }

    

    getLogin() {
        console.log(this.state)
        const _this = this;  
        axios.post('/login', _this.state)
        .then(function (response:any) {
            localStorage.setItem("accessToken", response.access_token);
            // _this.props.onLogin();
            history.push('/')
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    logout() {
        this.props.onLogout();
    }

    register() {
        const _this = this;  
        axios.post('/register', _this.state)
        .then(function (response) {
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    tokenVerify() {
        axios.post('user/getdd')
        .then(function (response) {
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    change = (key: string, event: any) => {
        if(event && event.target && event.target.value){
            let value = event.target.value;
            this.setState(()=>({[key]:value }))
        }
    }


    render() {
        return (
        <div className="Login">
            <Input placeholder="name" onChange ={event => this.change('username',event)} />
            <Input.Password placeholder=" password" onChange ={event => this.change('password',event)} />
            <Button type="primary"  onClick={() => this.getLogin()}>登录</Button>
            <Button type="primary"  onClick={() => this.register()}>注册</Button>
            <Button type="primary"  onClick={() => this.logout()}>注销</Button>
            <Button type="primary"  onClick={() => this.tokenVerify()}>验证</Button>
        </div>
        )
    }
}

// 将 reducer 中的状态插入到组件的 props 中
const mapStateToProps = (state: StoreState): { isLogin: boolean } => ({
    isLogin: state.isLogin
})

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = (dispatch: Dispatch) => ({
    onLogin: () => dispatch(CHANGElOGIN(true)),
    onLogout: () => dispatch(CHANGElOGIN(false)),
})

// 使用 connect 高阶组件对 Counter 进行包裹
export default connect(mapStateToProps, mapDispatchToProps)(Login);
