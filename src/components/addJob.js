import React, { Component } from "react";
import CreatableSelect from "react-select";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addJob } from "../actions";

class AddJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobName: "",
      jobDescription: "",
      skills: "",
      location: ""
    };
  }
  render() {
    return (
      <div className="ui container grid">
        <div className="ui row">
          <div className="cloumn five ">Job Name</div>
          <div className="cloumn five ">
            <input
              onChange={e => this.setState({ jobName: e.target.value })}
              value={this.state.jobName}
            ></input>
          </div>
        </div>
        <div className="ui row">
          <div className="cloumn five ">Job Description</div>
          <div className="cloumn five ">
            <input
              onChange={e => this.setState({ jobDescription: e.target.value })}
              value={this.state.jobDescription}
            ></input>
          </div>
        </div>

        <div className="ui row">
          <div className="cloumn five">Skills</div>
          <div className="cloumn five">
            <input
              onChange={e => this.setState({ skills: e.target.value })}
              value={this.state.skills}
            ></input>
          </div>
        </div>

        <div className="ui row">
          <div className="cloumn five ">Location</div>
          <div className="cloumn five ">
            <input
              onChange={e => this.setState({ location: e.target.value })}
              value={this.state.location}
            ></input>
          </div>
        </div>

        <div className="ui row">
          <div className="cloumn five ">
            <button
              className="ui button primary"
              onClick={() => {
                const {
                  jobName,
                  jobDescription,
                  skills,
                  location
                } = this.state;
                let job = {
                    jobId: Math.floor(Math.random()*100),
                    jobName,
                  jobDescription,
                  skills,
                  location
                }
             this.props.addJob(job)
             this.props.history.push(`/list`)
              }}
            >
              Add Job
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    listJobs: state.listJobs
  };
};

const mapDispatchToProps = {
  addJob
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddJob));
