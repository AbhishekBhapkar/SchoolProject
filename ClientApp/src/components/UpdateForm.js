import { Component } from "react";

export class UpdateForm extends Component {
  static displayName = UpdateForm.name;

  constructor(props) {
    super(props);
    this.state = {
      StudentFirstName: this.props.StudentFirstName,
      StudentMiddleName: this.props.StudentMiddleName,
      StudentLastName: this.props.StudentLastName,
      classroom: this.props.classroom,
      section: this.props.section,
    };
  }

  handleDeleteClick = () => {
    
    console.log("Hello I am in handle Delete click");
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
            required
          />
          <label>Student Middle Name</label>
          <input
            name="StudentMiddleName"
            type="text"
            required
            value={this.state.StudentMiddleName}
          />
          <label>Student Last Name</label>
          <input
            name="StudentLastName"
            type="text"
            required
            value={this.state.StudentLastName}
          />
          <label>classroom</label>
          <input
            name="classroom"
            type="number"
            required
            value={this.state.classroom}
          />
          <label>section</label>
          <input
            name="section"
            type="text"
            required
            value={this.state.section}
          />
          <button onClick={this.handleDeleteClick}>Delete Student</button>
        </form>
      </div>
    );
  }
}
