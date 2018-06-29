import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchLinks } from '../../links/reducer';

import { Home, Link } from '../index';
import { Navbar } from '../../components';
import styles from './App.scss';

class App extends React.Component {
  componentDidMount() {
    this.props.getLinks();
  }

  render() {
    return (
      <div className={styles.container}>
        <Navbar />
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/:hash" component={Link} />
        </main>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getLinks: fetchLinks.request,
};

export default withRouter(
  connect(
    undefined,
    mapDispatchToProps,
  )(App),
);
