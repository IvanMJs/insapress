/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

class Hamburger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburgerActive: false,
    };
  }

  handleToggle = () => {
    this.setState(prevState => ({
      hamburgerActive: !prevState.hamburgerActive,
    }));
    this.props.toggleMenu(this.state.hamburgerActive);
  };

  render() {
    return (
      <button
        id="toggle-main-menu-mobile"
        className={`hamburger hamburger--slider ${
          this.state.hamburgerActive ? 'is-active' : ''
        }`}
        type="button"
        onClick={this.handleToggle}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>
    );
  }
}

export default Hamburger;
