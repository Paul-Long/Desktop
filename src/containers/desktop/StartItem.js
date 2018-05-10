import React from 'react';

type ItemProps = {
  className: string,
  onClick: Function,
  item: Object
};

class StartItem extends React.PureComponent<ItemProps> {
  handleClick = (e) => {
    e.stopPropagation();
    const { item, onClick } = this.props;
    onClick && onClick(item);
  };

  render() {
    const {
      className,
      item: { text }
    } = this.props;
    return (
      <div className={className} onClick={this.handleClick}>
        <a>{text}</a>
      </div>
    )
  }
}

export default StartItem;
