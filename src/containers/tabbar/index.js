import './tabbar.less';
import React from 'react';
import Desktop from '@containers/desktop';
import Tabs from '@components/tabs';

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
        <Desktop prefixCls={prefixCls} className={`${cls}-left`} />
        <div className={`${cls}-center`}>
          <Tabs tabs={tabs} />
        </div>
        <div className={`${cls}-right`}>
          联系客服
        </div>
      </div>
    )
  }
}

export default TabBar;

const tabs = [
  {text: '首页', tabId: 'start'},
  {text: '新标签页', tabId: 'new'}
];
