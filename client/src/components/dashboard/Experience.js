import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExperience } from '../../actions/profileActions';

class Experience extends Component {
  onDeleteClick = (id) => {
    this.props.deleteExperience(id);
  }

  formatDate = (date) => {
    date = new Date(date);
    const formattedDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
    return formattedDate;
  }

  render() {
    const experience = this.props.experience.map(exp => (
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td>{exp.title}</td>
        <td>{this.formatDate(exp.from)} - {exp.current ? 'Current' : this.formatDate(exp.to)}</td>
        <td><button onClick={() => { this.onDeleteClick(exp._id) }} className="btn btn-danger">Delete</button></td>
      </tr>
    ))

    return (
      <div>
        <h4 className="mb-4">Experience Credentials</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Title</th>
              <th>Years</th>
              <th></th>
            </tr>
            {experience}
          </thead>
        </table>
      </div>
    )
  }
}

Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired
}

export default connect(null, { deleteExperience })(Experience);