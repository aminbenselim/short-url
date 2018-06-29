import React from 'react';
import { connect } from 'react-redux';

import InputField from '../../components/InputField';
import { createLink } from '../../links/reducer';
import styles from './home.scss';

const Home = ({ generateHash }) => (
  <div className={styles.homeWrapper}>
    <InputField generateHash={generateHash} />
  </div>
);

const mapDispatchToProps = dispatch => ({
  generateHash: url => dispatch(createLink.request({ url })),
});

export default connect(
  undefined,
  mapDispatchToProps,
)(Home);
