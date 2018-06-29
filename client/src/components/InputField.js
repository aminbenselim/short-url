import React, { Fragment } from 'react';
import isUrl from 'is-url';
import cssStyles from './InputField.scss';

class InputField extends React.Component {
  constructor() {
    super();
    this.state = {
      url: '',
      hash: '',
      isUrlInvalid: false,
    };
  }

  handleChange = event => {
    this.setState({
      url: event.target.value,
    });
  };

  createHash = () => {
    this.props.generateHash(this.state.url);
  };
  render() {
    return (
      <Fragment>
        <input
          id="url"
          className={cssStyles.textField}
          label="url"
          value={this.state.url}
          onChange={this.handleChange}
        />
        <button className={cssStyles.button} onClick={this.createHash}>
          Generate
        </button>
      </Fragment>
    );
  }
}

export default InputField;
