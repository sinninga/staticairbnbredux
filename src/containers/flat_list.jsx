import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setFlats } from '../actions';

import Flat from '../containers/flat';


class FlatList extends Component {
  componentWillMount() {
    this.props.setFlats();
  }

  render() {
    return (
      <div className="flat-list col-xs-7">
        {this.props.flats.map((flat) => <Flat key={flat.name} flat={flat} />)}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setFlats: setFlats },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    flats: state.flats
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FlatList);
