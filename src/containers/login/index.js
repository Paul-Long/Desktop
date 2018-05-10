import React from 'react';
import classNames from 'classnames';
import IconButton from '@components/iconbutton';
import Ipc from '@utils/ipc';
import Input from '@components/input';
import './login.less';

type LoginProps = {
  prefixCls: string
}

class Login extends React.PureComponent<LoginProps> {
  static defaultProps = {
    prefixCls: 'ad'
  };

  constructor(props) {
    super(props);
    this.ipc = new Ipc({
      prefix: 'login'
    });
  }

  state = {
    username: '',
    password: ''
  };

  handleClose = () => {
    this.ipc.send('close');
  };

  handleLogin = () => {
    this.ipc.send('logged');
  };

  handleUserNameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    const { prefixCls } = this.props;
    const {
      username,
      password
    } = this.state;
    const loginCls = classNames(`${prefixCls}-login`);
    return (
      <div className={loginCls}>
        <IconButton
          className={`${prefixCls}-login-close`}
          type='close'
          onClick={this.handleClose}
        />
        <Input value={username} onChange={this.handleUserNameChange} />
        <Input value={password} type='password' onChange={this.handlePasswordChange} />
        <button className={`${prefixCls}-login-btn`} onClick={this.handleLogin}>登录</button>
      </div>
    )
  }
}

export default Login;
