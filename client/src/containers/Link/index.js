import React from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

const Link = props => (
  <React.Fragment>
    <Redirect to={props.links.url} />
  </React.Fragment>
);

export default connect()(Link);
