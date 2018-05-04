import './footer.less';
import React from 'react';
import Clock from './Clock';

type FooterProps = {
  prefixCls: string
}

class Footer extends React.PureComponent<FooterProps> {
  render() {
    const {prefixCls} = this.props;
    return (
      <div className={`${prefixCls}-footer`}>
        <div className={`${prefixCls}-footer-left`}>
          <Clock className={`${prefixCls}-footer-clock`} />
        </div>
        <div className={`${prefixCls}-footer-right`}>
          <div className='ad-icon-tiles' />
        </div>
      </div>
    )
  }
}

export default Footer;
