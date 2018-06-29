import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUrlByHash } from '../../links/selectors';

class Link extends Component {
  componentDidMount() {
    setTimeout(() => (window.location = this.props.url));
  }

  render() {
    return null;
  }
}

const mapStateToProps = (state, ownProps) => ({
  url: getUrlByHash(ownProps.match.params.hash)(state),
});

export default connect(mapStateToProps)(Link);
