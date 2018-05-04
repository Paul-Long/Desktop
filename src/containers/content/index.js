import './content.less';
import React from 'react';

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

      </div>
    )
  }
}

export default Content;
