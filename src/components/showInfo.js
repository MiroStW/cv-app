// A section to add general information like name, email, phone number.
import React from 'react';

export default class ShowInfo extends React.Component {
  render() {
    const fields = this.props.fields;
    return (
      <div id="ShowInfo">
        <h2>{this.props.title}</h2>
        {Object.keys(fields).map((field) =>
          <div className="field" key={fields[field].fieldName}>
            {fields[field].fieldName}: {fields[field].value}
          </div>
        )}
      </div>
    )
}
}