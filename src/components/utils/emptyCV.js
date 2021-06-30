const emptyCV = {
      general: {
        title: "General",
        fields: {
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
        }
      },
      education: {
        title: "Education",
        fields: {
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
        }
      },
      practical: {
        title: "Practical experience",
        fields: {
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

export default emptyCV;