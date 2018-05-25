import React from 'react';
import IconButton from '@components/iconbutton';
import './header.less';

type HeaderProps = {
  prefixCls: string,
  title: string,
  ipc: any
}

class Header extends React.PureComponent<HeaderProps> {
  state = {
    winMax: false,
  };

  handleMax = () => {
    const { ipc } = this.props;
    const { winMax } = this.state;
    this.setState({ winMax: !winMax }, () => {
      ipc.send(winMax ? 'unmaximize' : 'maximize');
    });
  };

  render() {
    const {
      prefixCls,
      title,
      ipc,
    } = this.props;
    const cls = `${prefixCls}-header`;
    return (
      <div className={cls}>
        <div className={`${cls}-title`}>
          {title}
        </div>
        <div className={`${cls}-space`} />
        <div className={`${cls}-action`}>
          <IconButton className={`${cls}-min`} type="minus" onClick={() => ipc.send('minimize')} />
          <IconButton className={`${cls}-max`} type="square" onClick={this.handleMax} />
          <IconButton className={`${cls}-close`} type="close" onClick={() => ipc.send('close')} />
        </div>
      </div>
    );
  }
}

export default Header;
