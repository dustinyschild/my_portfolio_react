import React, { Component } from "react";
import PropTypes from "prop-types";

class AboutMe extends Component {
  static propTypes = {
    s: PropTypes.string.isRequired
  };

  state = {};

  render() {
    const { s } = this.props;

    return (
      <div>
        {s}
      </div>
    );
  }
}

export default AboutMe;
