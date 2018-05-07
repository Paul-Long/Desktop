import './content.less';
import React from 'react';
import {Route} from 'react-router-dom';
import Home from '@containers/home';

type ContentProps = {
  prefixCls: string
}

class Content extends React.PureComponent<ContentProps> {
  render() {
    const {
      prefixCls
    } = this.props;
    return (
      <div className={`${prefixCls}-content`}>
        <Route path={'/home'} exact component={Home} />
      </div>
    )
  }
}

export default Content;
