import React, { Component } from "react";

class Counter extends Component {
  /*  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  } */

  /* renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  } */

  render() {
    return (
      <div>
        {/* <h4>{this.props.counter.id}</h4> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    let { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
