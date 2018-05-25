import React from 'react';

type ItemProps = {
  className: string,
  onClick: Function,
  item: Object,
};

class StartItem extends React.PureComponent<ItemProps> {
  handleClick = (e) => {
    e.stopPropagation();
    const { item, onClick } = this.props;
    if (onClick) {
      onClick(item);
    }
  };

  render() {
    const {
      className,
      item: { text },
    } = this.props;
    return (
      <div className={className} onClick={this.handleClick}>
        <span>{text}</span>
      </div>
    );
  }
}

export default StartItem;
