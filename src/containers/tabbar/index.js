import './tabbar.less';
import React from 'react';
import Desktop from '@containers/desktop';
import Tabs from '@components/tabs';
import contents from '@constants/contents';

type TabBarProps = {
  prefixCls: string,
  history: Object
}

class TabBar extends React.PureComponent<TabBarProps> {
  state = {
    active: '/home'
  };

  handleChange = (tabId) => {
    this.setState({ active: tabId });
    const { history } = this.props;
    history.push(tabId);
  };

  render() {
    const {
      prefixCls
    } = this.props;
    const {
      active
    } = this.state;
    const cls = `${prefixCls}-tabbar`;
    return (
      <div className={cls}>
        <Desktop prefixCls={prefixCls} className={`${cls}-left`} />
        <div className={`${cls}-center`}>
          <Tabs
            tabs={contents.map(c => ({ tabId: c.path, text: c.text }))}
            active={active}
            onChange={this.handleChange}
          />
        </div>
        <div className={`${cls}-right`}>
          联系客服
        </div>
      </div>
    )
  }
}

export default TabBar;
