import React from "react";

export default class Box extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { i } = this.props;
    return <span className="text">{i}</span>;
  }
}
