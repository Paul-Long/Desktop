import './app.less';
import React from 'react';
import { Route } from 'react-router-dom';
import Header from '@containers/header';
import TabBar from '@containers/tabbar';
import Footer from '@containers/footer';
import Home from '@containers/home';
import contents from '@constants/contents';

type AppProps = {
  prefixCls: string
}

class App extends React.PureComponent<AppProps> {
  static defaultProps = {
    prefixCls: 'ad'
  };

  constructor(props) {
    super(props);
    const pathname = props.history.location.pathname;
    if (pathname !== '/') {
      props.history.push('/');
    }
  }

  componentDidMount() {
    setTimeout(() => {
      console.log('history push /home');
      this.props.history.push('/home');
    }, 3000);
  }

  render() {
    const {
      prefixCls,
      history
    } = this.props;
    return (
      <div className={prefixCls}>
        <Header prefixCls={prefixCls} title='Electron Desktop' />
        <TabBar prefixCls={prefixCls} history={history} />
        <div className={`${prefixCls}-content`}>
          {
            contents.map(({ path, component, exact }) => (
              <Route key={path} path={path} component={component} exact={exact} />
            ))
          }
        </div>
        <Footer prefixCls={prefixCls} />
      </div>
    )
  }
}

export default App;
