import React, { Component } from "react";

export class AddStudent extends Component {
  static displayName = AddStudent.name;

  constructor(props) {
    super(props);
    this.state = {
      StudentFirstName: "",
      StudentMiddleName: "",
      StudentLastName: "",
      classroom: "",
      section: "1",
    };

    this.handleChangeStudentFirstName =
      this.handleChangeStudentFirstName.bind(this);
    this.handleChangeStudentMiddleName =
      this.handleChangeStudentMiddleName.bind(this);
    this.handleChangeStudentLastName =
      this.handleChangeStudentLastName.bind(this);
    this.handleChangeclassroom = this.handleChangeclassroom.bind(this);
    this.handleChangesection = this.handleChangesection.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeStudentFirstName(event) {
    this.state.StudentFirstName = this.setState({
      StudentFirstName: event.target.value,
    });
  }

  handleChangeStudentMiddleName(event) {
    this.state.StudentMiddleName = this.setState({
      StudentMiddleName: event.target.value,
    });
  }

  handleChangeStudentLastName(event) {
    this.state.StudentLastName = this.setState({
      StudentLastName: event.target.value,
    });
  }

  handleChangesection(event) {
    this.state.section = this.setState({ section: event.target.value });
  }

  handleChangeclassroom(event) {
    this.state.classroom = this.setState({ classroom: event.target.value });
  }

  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();

    fetch("/StudentInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // do something else, such as update state or redirect to another page
      })
      .catch((error) => {
        console.log("error:", JSON.stringify(this.state));
        console.error("Error:", error);
        // handle the error as needed
      });
  };

  render() {
    return (
      <div className="create">
        <h1>Add Student</h1>
        <form onSubmit={this.handleSubmit}>
          <label> Student First Name</label>
          <input
            type="text"
            name="StudentFirstName"
            value={this.state.StudentFirstName}
            onChange={this.handleChangeStudentFirstName}
            required
          />
          <label>Student Middle Name</label>
          <input
            name="StudentMiddleName"
            type="text"
            required
            value={this.state.StudentMiddleName}
            onChange={this.handleChangeStudentMiddleName}
          />
          <label>Student Last Name</label>
          <input
            name="StudentLastName"
            type="text"
            required
            value={this.state.StudentLastName}
            onChange={this.handleChangeStudentLastName}
          />
          <label>classroom</label>
          <input
            name="classroom"
            type="number"
            required
            value={this.state.classroom}
            onChange={this.handleChangeclassroom}
          />
          <label>section</label>
          <input
            name="section"
            type="text"
            required
            value={this.state.section}
            onChange={this.handleChangesection}
          />
          <button>Add Student</button>
        </form>
      </div>
    );
  }
}
