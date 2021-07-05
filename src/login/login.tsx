import React from 'react';
import { Button, Input } from 'antd';
import './login.css';
import axios from 'axios';

export default class Login extends React.Component<any, any>{

  constructor(props: any) {
      super(props);
      this.state = {
          name: '',
          password: '',
      };
  }

  componentDidMount() {
    
  }

  getLogin() {
      console.log(this.state)
      const _this = this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
      axios.post('/user/login', _this.state)
      .then(function (response) {
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  register() {
      const _this = this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
      axios.post('/user/register', _this.state)
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
        <Input placeholder="name" onChange ={event => this.change('name',event)} />
        <Input.Password placeholder=" password" onChange ={event => this.change('password',event)} />
        <Button type="primary"  onClick={() => this.getLogin()}>登录</Button>
        <Button type="primary"  onClick={() => this.register()}>注册</Button>
      </div>
    )
  }
}
