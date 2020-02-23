import React from "react";
import api from "../../services/api";

//Removes a given event
class EventRemove extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDeletion = event => {
    event.preventDefault();
    api.post("/events/delete", { id: this.props.id }).then(res => {
      const { data } = res;
      if (data) console.log(data);
    });
  };

  render() {
    return (
      <button
        className="event-button"
        id="event-delete-button"
        onClick={this.handleDeletion}
      >
        Delete
      </button>
    );
  }
}

export default EventRemove;
