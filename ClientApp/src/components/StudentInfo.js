import React, { Component } from 'react';

export class StudentInfo extends Component {
  static displayName = StudentInfo.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }

  componentDidMount() {
    this.populateStudentData();
  }

  static renderStudentsTable(forecasts) {
    return (
      <table className="table table-striped" aria-labelledby="tableLabel">
        <thead>
          <tr>
            <th>Id </th>
            <th>Student First Name</th>
            <th>Student Middle Name</th>
            <th>Student Last Name</th>
            <th>Classroom</th>
            <th>Section</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast =><tr key={forecast.id}>
              <td>{forecast.id}</td>
              <td>{forecast.studentFirstName}</td>
              <td>{forecast.studentMiddleName}</td>
              <td>{forecast.studentLastName}</td>
              <td>{forecast.classroom}</td>
              <td>{forecast.section}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : StudentInfo.renderStudentsTable(this.state.forecasts);

    return (
      <div>
        <h1 id="tableLabel">Student Information</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateStudentData() {
    const response = await fetch('StudentInfo');
    let data = await response.json();
    const jsonString = JSON.stringify(data); // Convert data to a JSON string
    const trimmedJsonString = jsonString.slice(8, -1); // Remove the first 8 and last 1 characters
    const trimmedData = JSON.parse(trimmedJsonString); // Convert the trimmed JSON string back to an object
    console.log(trimmedData); // Output the trimmed data
    data = trimmedData;
    this.setState({ forecasts: data, loading: false });
  }
}
