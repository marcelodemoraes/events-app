import React, { Component } from "react";
import api from "../../services/api";

import { history } from "../../history";

//Create new events
class EventCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: "",
      msgError: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const startDateTime = new Date(
      this.state.startDate + " " + this.state.startTime
    );
    const endDateTime = new Date(this.state.endDate + " " + this.state.endTime);

    if (startDateTime >= endDateTime) {
      this.setState({
        msgError: "End date must be greater than Start date!"
      });
    } else {
      const payload = {
        text: this.state.text,
        start: startDateTime,
        end: endDateTime
      };

      api.post("/events/create", payload).then(res => {
        const { data } = res;
        if (data) console.log(data);
        history.push("/events");
      });
    }
  };

  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-block">
            <label htmlFor="text">Description</label>
            <input
              name="text"
              id="text-input"
              className="form-input"
              required
              onChange={this.handleInputChange}
            />
          </div>

          <div className="input-block">
            <label htmlFor="start">Start</label>
            <input
              type="date"
              name="startDate"
              id="startDate"
              className="form-input"
              required
              onChange={this.handleInputChange}
            />

            <input
              type="time"
              name="startTime"
              id="startTime"
              className="form-input"
              required
              onChange={this.handleInputChange}
            />
          </div>

          <div className="input-block">
            <label htmlFor="end">End</label>
            <input
              type="date"
              name="endDate"
              id="endDate"
              className="form-input"
              required
              onChange={this.handleInputChange}
            />
            <input
              type="time"
              name="endTime"
              id="endTime"
              className="form-input"
              required
              onChange={this.handleInputChange}
            />
          </div>

          <div className="input-block">
            <br></br>
            <button type="submit" className="form-submit">
              Create
            </button>
            <p className="errorMsg">{this.state.msgError}</p>
          </div>
        </form>
      </div>
    );
  }
}

export default EventCreate;
