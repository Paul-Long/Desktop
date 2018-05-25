import React from 'react';
import IconButton from '@components/iconbutton';
import Clock from './Clock';
import './footer.less';

type FooterProps = {
  prefixCls: string,
}

class Footer extends React.PureComponent<FooterProps> {
  render() {
    const { prefixCls } = this.props;
    return (
      <div className={`${prefixCls}-footer`}>
        <div className={`${prefixCls}-footer-left`}>
          <IconButton className={`${prefixCls}-footer-link`} type="chain" />
          <div className={`${prefixCls}-footer-help`}><span>?</span></div>
          <IconButton className={`${prefixCls}-footer-reset`} type="reset" />
          <Clock className={`${prefixCls}-footer-clock`} />
        </div>
        <div className={`${prefixCls}-footer-right`}>
          <div className="ad-icon-tiles" />
        </div>
      </div>
    );
  }
}

export default Footer;
