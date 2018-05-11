import React from 'react';
import classNames from 'classnames';
import Tab from './Tab';
import IconButton from '@components/iconbutton';
import './tabs.less';

type TabsProps = {
  tabs: Array,
  active: string,
  onChange: Function,
  onClose: Function,
  onContextMenu: Function
}

class Tabs extends React.PureComponent<TabsProps> {

  state = {
    active: this.props.active
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.active !== this.props.active && nextProps.active !== this.state.active) {
      this.setState({ active: nextProps.active });
    }
  }

  handleClick = (tab, e) => {
    const { onChange } = this.props;
    onChange && onChange(tab.tabId, tab);
  };

  handleClose = (tab, e) => {
    e.stopPropagation();
    const { onClose } = this.props;
    onClose && onClose(tab.tabId, tab);
  };

  handleContextMenu = (tab, e) => {
    console.log(tab);
  };

  renderTab = () => {
    const { tabs } = this.props;
    const { active } = this.state;
    return tabs.map(tab => Tab({
      className: classNames('ad-tab', {
        active: tab.tabId === active
      }),
      tab,
      onClick: e => this.handleClick(tab, e),
      onClose: e => this.handleClose(tab, e),
      onContextMenu: e => this.handleContextMenu(tab, e)
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
