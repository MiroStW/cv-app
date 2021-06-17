// A section to add general information like name, email, phone number.
import React from 'react';

export default class ShowInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
    }

    this.setEditMode = this.setEditMode.bind(this);
  }

  setEditMode(mode) {
    this.setState(() => ({
      editMode: mode,
    }))
  }

  render() {
    const fields = this.props.fields;

    if (!this.state.editMode) {
      return (
        <div className="ShowInfo">
          <fieldset>
            <legend>{this.props.title}</legend>
            {Object.keys(fields).map((field) =>
              <div className="field" key={fields[field].fieldName}>
                {fields[field].fieldName}: {fields[field].value}
              </div>
            )}
            <button className="button" onClick={() => {this.setEditMode(true)}}>edit</button>
          </fieldset>
        </div>
      )
    } else {
      return (
        <div className="ShowInfo">
          <fieldset>
            <legend>{this.props.title}</legend>
            {Object.keys(fields).map((field) =>
              <div className="field" key={fields[field].fieldName}>
                {fields[field].fieldName}: <input
                  type="text"
                  key={fields[field].fieldName}
                  name={field}
                  value={fields[field].value}
                  onChange={(e) => this.props.handleChange(e,this.props.area)} />
              </div>
            )}
            <button className="button" onClick={() => {this.setEditMode(false)}}>save</button>
          </fieldset>
        </div>
      )
    }
  }
}

// TODO: extract view/edit renders in separate components?