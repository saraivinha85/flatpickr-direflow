import React from "react";

// import "flatpickr/dist/flatpickr.css";
// import "flatpickr/dist/themes/material_green.css";

import flatpickr from "flatpickr";

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.parent = React.createRef();
    this.ref = React.createRef();
  }

  componentDidMount() {
    this.picker = new flatpickr(this.ref.current, {
      appendTo: this.parent.current
    });
  }

  render() {
    return (
      <div ref={this.parent}>
        <input ref={this.ref} />
      </div>
    );
  }
}

export default Calendar;
