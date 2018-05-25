import React from 'react';
import { connect } from 'react-redux';
import Desktop from '@containers/desktop';
import Tabs from '@components/tabs';
import './tabbar.less';

type TabBarProps = {
  prefixCls: string,
  tabs: Object,
  dispatch: Function,
}

class TabBar extends React.PureComponent<TabBarProps> {
  componentWillReceiveProps(nextProps) {
    this.receiveTabs(nextProps, this.props);
  }

  receiveTabs = (nextProps, props) => {
    const { tabs: nTabs, history } = nextProps;
    const { tabs } = props;
    if (nTabs !== tabs) {
      if (nTabs.current !== tabs.current) {
        history.push(nTabs.current);
      }
    }
  };

  handleChange = (tabId) => {
    const { dispatch, tabs } = this.props;
    dispatch({ type: 'desktop.hide' });
    if (tabs.current !== tabId) {
      dispatch({ type: 'tabs.change', tabId });
    }
  };

  handleCloseTab = (tabId, tab) => {
    const { dispatch } = this.props;
    dispatch({ type: 'tabs.close', tab });
  };

  render() {
    const {
      prefixCls,
      tabs,
    } = this.props;
    const cls = `${prefixCls}-tabbar`;
    return (
      <div className={cls}>
        <Desktop
          prefixCls={prefixCls}
          className={`${cls}-left`}
        />
        <div className={`${cls}-center`}>
          <Tabs
            tabs={tabs.opened}
            active={tabs.current}
            onChange={this.handleChange}
            onClose={this.handleCloseTab}
          />
        </div>
        <div className={`${cls}-right`}>
          联系客服
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tabs: state.tabs,
  };
}

export default connect(mapStateToProps)(TabBar);
