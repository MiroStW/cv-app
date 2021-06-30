// A section to add general information like name, email, phone number.
import React, { useState } from 'react';

const ShowInfo = (props) => {

  const [editMode, setEditMode] = useState(false);

  const fields = props.fields;

  if (!editMode) {
    return (
      <div className="ShowInfo">
        <fieldset>
          <legend>{props.title}</legend>
          {Object.keys(fields).map((field) =>
            <div className="field" key={fields[field].fieldName}>
              {fields[field].fieldName}: {fields[field].value}
            </div>
          )}
          <button className="button" onClick={() => { setEditMode(true) }}>edit</button>
        </fieldset>
      </div>
    )
  } else {
    return (
      <div className="ShowInfo">
        <fieldset>
          <legend>{props.title}</legend>
          {Object.keys(fields).map((field) =>
            <div className="field" key={fields[field].fieldName}>
              {fields[field].fieldName}: <input
                type="text"
                key={fields[field].fieldName}
                name={field}
                value={fields[field].value}
                onChange={(e) => props.handleChange(e, props.area)} />
            </div>
          )}
          <button className="button" onClick={() => { setEditMode(false) }}>save</button>
        </fieldset>
      </div>
    )
  }
};

export default ShowInfo;

// TODO: extract view/edit renders in separate components?