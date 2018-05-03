import React from 'react';
import './header.less';

type HeaderProps = {
  prefixCls: string,
  title: string
}

class Header extends React.PureComponent<HeaderProps> {
  render() {
    const {
      prefixCls,
      title
    } = this.props;
    const cls = `${prefixCls}-header`;
    return (
      <div className={cls}>
        <div className={`${cls}-title`}>
          {title}
        </div>
        <div className={`${cls}-space`} />
        <div className={`${cls}-action`}>
          <div className={`${cls}-min`}>
            <div className='ad-icon-minus' />
          </div>
          <div className={`${cls}-max`}>
            <div className='ad-icon-square' />
          </div>

          <div className={`${cls}-close`}>
            <div className='ad-icon-close' />
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
