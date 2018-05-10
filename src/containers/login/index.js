import React from 'react';
import classNames from 'classnames';
import IconButton from '@components/iconbutton';
import Ipc from '@utils/ipc';
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

  handleClose = () => {
    this.ipc.send('close');
  };

  handleLogin = () => {
    this.ipc.send('logged');
  };

  render() {
    const { prefixCls } = this.props;
    const loginCls = classNames(`${prefixCls}-login`);
    return (
      <div className={loginCls}>
        <IconButton
          className={`${prefixCls}-login-close`}
          type='close'
          onClick={this.handleClose}
        />
        <button onClick={this.handleLogin}>Login</button>
      </div>
    )
  }
}

export default Login;
