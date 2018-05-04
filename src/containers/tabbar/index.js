import './tabbar.less';
import React from 'react';
import Left from './Left';

type TabBarProps = {
  prefixCls: string
}

class TabBar extends React.PureComponent<TabBarProps> {
  render() {
    const {
      prefixCls
    } = this.props;
    const cls = `${prefixCls}-tabbar`;
    return (
      <div className={cls}>
        <Left className={`${cls}-left`} />
        <div className={`${cls}-center`}>

        </div>
        <div className={`${cls}-right`}>
          联系客服
        </div>
      </div>
    )
  }
}

export default TabBar;
