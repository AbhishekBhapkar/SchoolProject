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
          {forecasts.map(forecast =>
            <tr key={forecast.id}>
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
        <h1 id="tableLabel">Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateStudentData() {
    const response = await fetch('StudentInfo');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }
}
