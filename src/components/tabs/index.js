import React from 'react';
import Tab from './Tab';
import IconButton from '@components/iconbutton';
import './tabs.less';

type TabsProps = {
  tabs: Array
}

class Tabs extends React.PureComponent<TabsProps> {

  renderTab = () => {
    const {
      tabs
    } = this.props;
    return tabs.map(tab => Tab({
      className: 'ad-tab',
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
