import React from 'react';
import ShowInfo from "./components/showInfo";

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      general: {
        name: {
          fieldName: "Name",
          value: "",
        },
        email: {
          fieldName: "E-Mail",
          value: "",
        },
        phone: {
          fieldName: "Phone number",
          value: "",
        },
      },
      education: {
        school: {
          fieldName: "School name",
          value: "",
        },
        field: {
          fieldName: "Field of studies",
          value: "",
        },
        date: {
          fieldName: "Date of graduation",
          value: "",
        },
      },
      practical: {
        company: {
          fieldName: "Company name",
          value: "",
        },
        position: {
          fieldName: "Title of position",
          value: "",
        },
        task: {
          fieldName: "Main task",
          value: "",
        },
        dateFrom: {
          fieldName: "From",
          value: "",
        },
        dateUntil: {
          fieldName: "Until",
          value: "",
        },
      }
    }
  }
  render() {
    return (
      <div id="App">
        <h1>CV App</h1>
        <ShowInfo title="General" fields={this.state.general}/>
        <ShowInfo title="Education" fields={this.state.education}/>
        <ShowInfo title="Practical experience" fields={this.state.practical}/>
      </div>
    )
}
}

// title
// A section to add general information like name, email, phone number.
// A section to add your educational experience (school name, title of study,
// date of study)
// A section to add practical experience (company name, position title, main
// tasks of your jobs, date from and until when you worked for that company)
