import React from "react";

import api from "../../services/api";
import Event from "./Event";

//List of all events from database, ordered by date
class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    //set header to always use auth-token when it's available
    api.defaults.headers.common["auth-token"] = localStorage.getItem(
      "authtoken"
    );
    api.get("/events/list").then(res => {
      const { data } = res;
      if (data) {
        console.log(data);
        this.setState({
          events: data
        });
      }
    });
  }

  render() {
    //create an array of <Event />
    let eventList = [];
    let cont = 0;
    this.state.events.forEach(event => {
      cont++;
      eventList.push(
        <Event
          key={cont}
          text={event.text}
          start={event.start}
          end={event.end}
          id={event._id}
        />
      );
    });

    return (
      <>
        <h2>Events List</h2>
        {eventList}
      </>
    );
  }
}

export default EventList;
