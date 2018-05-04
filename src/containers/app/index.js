import './app.less';
import React from 'react';
import Header from '@containers/header';
import TabBar from '@containers/tabbar';
import Content from '@containers/content';
import Footer from '@containers/footer';

type AppProps = {
  prefixCls: string
}

class App extends React.PureComponent<AppProps> {
  static defaultProps = {
    prefixCls: 'ad'
  };

  render() {
    const {
      prefixCls
    } = this.props;
    return (
      <div className={prefixCls}>
        <Header prefixCls={prefixCls} title='Electron Desktop' />
        <TabBar prefixCls={prefixCls} />
        <Content prefixCls={prefixCls} />
        <Footer prefixCls={prefixCls} />
      </div>
    )
  }
}

export default App;
