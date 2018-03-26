import React,{Component} from 'react';
import axios from 'axios'

import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;


class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });

    axios('/api/users/login',{
      method:'POST',
      data:{
        username:this.props.form.getFieldsValue().userName,
        password:this.props.form.getFieldsValue().password
    }
    })
    .then((res) => {
      if( res.data.data.success ){
        alert( '登陆成功' )
        this.props.history.push('/bbw')
      }
    })

  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
      <h1 className="app-h1">请登录</h1>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
        
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        
        </FormItem>
      </Form>
    );
  }
}
export default Form.create()(NormalLoginForm);
