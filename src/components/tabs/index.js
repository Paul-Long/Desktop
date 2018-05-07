import React from 'react';
import classNames from 'classnames';
import Tab from './Tab';
import IconButton from '@components/iconbutton';
import './tabs.less';

type TabsProps = {
  tabs: Array,
  active: string
}

class Tabs extends React.PureComponent<TabsProps> {

  renderTab = () => {
    const {
      tabs,
      active
    } = this.props;
    return tabs.map(tab => Tab({
      className: classNames('ad-tab', {
        active: tab.tabId === active
      }),
      tab
    }));
  };

  render() {
    return (
      <div className={'ad-tabs-wrapper'}>
        <ul className={'ad-tabs'}>
          {this.renderTab()}
        </ul>
        <IconButton type='plus' className={'ad-tab-add'} />
      </div>
    )
  }
}

export default Tabs;
