import React, { useState } from 'react';
import ShowInfo from "./components/showInfo";
import emptyCV from './components/utils/emptyCV';

const App = (props) => {
  // TODO: strip all strings from state again
  // state is not meant to be used in such a nested way - updating a big
  // part of the state on every keystroke is bad for performance

  const [cv, setCv] = useState(emptyCV);

  const handleChange = (e, area) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    const prevStateArea = cv[area];
    prevStateArea["fields"][name]["value"] = value;

    // console.log("NEW: " + area + "." + name + ": " + value);
    // console.log("OLD: " + this.state[area]["fields"][name]["value"])

    setCv((prevState) => ({
      ...prevState,
      [area]: {
        ...prevState[area],
        [name]: value,
      },
    }));

    // this.setState({
    //   [area]: prevStateArea,
    // })

  }

  return (
    <div id="App">
      <h1>CV App</h1>
      {Object.keys(cv).map((area) =>
        <ShowInfo
          key={area}
          area={area}
          title={cv[area].title}
          fields={cv[area].fields}
          handleChange={handleChange} />
      )}
    </div>
  )

}

export default App;

// export default class App extends React.Component {
//   constructor(props) {
//     super(props)

//     // TODO: strip all strings from state again
//     // state is not meant to be used in such a nested way - updating a big
//     // part of the state on every keystroke is bad for performance
//     this.state = {
//       general: {
//         title: "General",
//         fields: {
//           name: {
//             fieldName: "Name",
//             value: "",
//           },
//           email: {
//             fieldName: "E-Mail",
//             value: "",
//           },
//           phone: {
//             fieldName: "Phone number",
//             value: "",
//           },
//         }
//       },
//       education: {
//         title: "Education",
//         fields: {
//           school: {
//             fieldName: "School name",
//             value: "",
//           },
//           field: {
//             fieldName: "Field of studies",
//             value: "",
//           },
//           date: {
//             fieldName: "Date of graduation",
//             value: "",
//           },
//         }
//       },
//       practical: {
//         title: "Practical experience",
//         fields: {
//           company: {
//             fieldName: "Company name",
//             value: "",
//           },
//           position: {
//             fieldName: "Title of position",
//             value: "",
//           },
//           task: {
//             fieldName: "Main task",
//             value: "",
//           },
//           dateFrom: {
//             fieldName: "From",
//             value: "",
//           },
//           dateUntil: {
//             fieldName: "Until",
//             value: "",
//           },
//         }
//       }
//     }

//     this.handleChange = this.handleChange.bind(this);

//   }

//   handleChange(e,area) {
//     const target = e.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;

//     const prevState = this.state[area];
//     prevState["fields"][name]["value"] = value;

//     // console.log("NEW: " + area + "." + name + ": " + value);
//     // console.log("OLD: " + this.state[area]["fields"][name]["value"])

//     this.setState({
//       [area]: prevState,
//     })

//   }

//   render() {
//     return (
//       <div id="App">
//         <h1>CV App</h1>
//         {Object.keys(this.state).map((area) =>
//           <ShowInfo
//             key={area}
//             area={area}
//             title={this.state[area].title}
//             fields={this.state[area].fields}
//             handleChange={this.handleChange} />
//         )}
//       </div>
//     )
// }
// }

// title
// A section to add general information like name, email, phone number.
// A section to add your educational experience (school name, title of study,
// date of study)
// A section to add practical experience (company name, position title, main
// tasks of your jobs, date from and until when you worked for that company)
