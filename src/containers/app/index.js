import './app.less';
import React from 'react';
import Header from '@containers/header';
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
      </div>
    )
  }
}

export default App;
