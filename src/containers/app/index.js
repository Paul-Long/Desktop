import React from 'react';
import { Route } from 'react-router-dom';
import Header from '@containers/header';
import TabBar from '@containers/tabbar';
import Footer from '@containers/footer';
import contents from '@constants/contents';
import Ipc from '@utils/ipc';
import './app.less';

type AppProps = {
  prefixCls: string
}

class App extends React.PureComponent<AppProps> {
  static defaultProps = {
    prefixCls: 'ad',
  };

  constructor(props) {
    super(props);
    const { pathname } = props.history.location;
    if (pathname !== '/') {
      props.history.push('/');
    }
    this.ipc = new Ipc({
      prefix: 'main',
    });
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.history.push('/home');
    }, 2000);
  }

  handleClose = () => {
    this.ipc.close();
  };

  render() {
    const {
      prefixCls,
      history,
    } = this.props;
    return (
      <div className={prefixCls}>
        <Header
          prefixCls={prefixCls}
          title="Electron Desktop"
          ipc={this.ipc}
        />
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
    );
  }
}

export default App;
