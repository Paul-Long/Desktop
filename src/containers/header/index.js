import './header.less';
import React from 'react';
import IconButton from '@components/iconbutton';

type HeaderProps = {
  prefixCls: string,
  title: string,
  ipc: any
}

class Header extends React.PureComponent<HeaderProps> {
  render() {
    const {
      prefixCls,
      title,
      ipc
    } = this.props;
    const cls = `${prefixCls}-header`;
    return (
      <div className={cls}>
        <div className={`${cls}-title`}>
          {title}
        </div>
        <div className={`${cls}-space`} />
        <div className={`${cls}-action`}>
          <IconButton className={`${cls}-min`} type='minus' onClick={ipc.minimize} />
          <IconButton className={`${cls}-max`} type='square' onClick={ipc.maximize} />

          <IconButton className={`${cls}-close`} type='close' onClick={ipc.close} />
        </div>
      </div>
    )
  }
}

export default Header;
