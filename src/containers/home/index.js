import React from 'react';
import {connect} from 'react-redux';

type HomeProps = {
  count: number,
  dispatch: Function
};

class Home extends React.PureComponent<HomeProps> {
  render() {
    const {
      dispatch
    } = this.props;
    return (
      <div>
        <div>{this.props.count}</div>
        <button
          style={{width: 20, height: 20, lineHeight: '20xp', textAlign: 'center'}}
          onClick={() => dispatch({type: 'count.add'})}
        >+
        </button>
        <button
          style={{width: 20, height: 20, lineHeight: '20xp', textAlign: 'center'}}
          onClick={() => dispatch({type: 'count.minus'})}
        >-
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(Home);
