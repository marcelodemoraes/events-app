import React from "react";

import EventUpdate from "./EventUpdate";

class EventEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  openUpdater = event => {
    event.preventDefault();
    this.setState({
      isOpen: true
    });
  };

  closeUpdater = event => {
    event.preventDefault();
    this.setState({
      isOpen: false
    });
  };

  render() {
    if (this.state.isOpen) {
      return (
        <>
          <button onClick={this.closeUpdater}>Cancel</button>
          <EventUpdate id={this.props.id} />
        </>
      );
    } else {
      return <button onClick={this.openUpdater}>Edit</button>;
    }
  }
}

export default EventEdit;
