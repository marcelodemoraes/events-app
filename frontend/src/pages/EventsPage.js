import React from "react";

import EventsList from "../components/Events/EventList";
import EventCreate from "../components/Events/EventCreate";
import Logout from "../components/Login/Logout";

import "./style.css";
import UserInfo from "../components/UserInfo";

function EventsPage() {
  return (
    <div id="list-main">
      <div id="event-menu">
        <h1>This is the events page!</h1>
        <UserInfo />
        <br />
        <Logout />
        <br />
        <br />
        <br />
        <h2>Add new event</h2>
        <EventCreate />
      </div>
      <div id="event-list">
        <EventsList />
      </div>
    </div>
  );
}

export default EventsPage;
