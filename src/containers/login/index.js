import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import IconButton from '@components/iconbutton';
import Ipc from '@utils/ipc';
import Input from '@components/input';
import md5 from 'md5';
import './login.less';

type LoginProps = {
  prefixCls: string,
  dispatch: Function
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.login !== this.props.login) {
      const { success, message } = nextProps.login || {};
      if (success) {
        this.ipc.send('logged');
      } else {
        alert(message);
      }
    }
  }

  handleClose = () => {
    this.ipc.send('close');
  };

  handleLogin = () => {
    const { dispatch } = this.props;
    const { username, password } = this.state;
    dispatch({ type: 'user.login', payload: { userName: username, password: md5(password) } })
    // this.ipc.send('logged');
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

function mapStateToProps(state) {
  return {
    login: state.user.login
  }
}

export default connect(mapStateToProps)(Login);
