import React from "react";

import EventRemove from "./EventRemove";
import EventEdit from "./EventEdit";

//A single event, shows a description, start date and end date
class Event extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const startDate = new Date(this.props.start).toLocaleString("pt-BR");
    const endDate = new Date(this.props.end).toLocaleString("pt-BR");

    return (
      <div className="event-card">
        <div className="event-card-info">
          <p className="event-text">Description: &nbsp;{this.props.text}</p>
          <p className="event-start">Start: &nbsp;{startDate}</p>
          <p className="event-end">End: &nbsp;&nbsp;{endDate}</p>
        </div>
        <div className="event-card-buttons">
          <EventRemove id={this.props.id} />
          <EventEdit id={this.props.id} />
        </div>
      </div>
    );
  }
}

export default Event;
