import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { deleteJob } from "../actions";

class JobList extends Component {
  constructor(props) {
    super(props);
  }

  renderList() {
    return this.props.listJobs.map(job => {
      return (
        <div className="item" key={job.jobId}>
          <div className="right floated content">
            <button onClick={()=>{this.props.deleteJob(job.jobId)}} className="ui button primary">Remove</button>
          </div>
          <div className="content">{`${job.jobName}   description:${job.jobDescription}`}</div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <div className="ui divided list">
              {this.renderList()}
              <div className="ui row">
                <button
                  onClick={() => {
                    this.props.history.push(`/`);
                  }}
                >
                  Add Job
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    console.log(state)
  return {
    listJobs: state.listJobs
  };
};

const mapDispatchToProps = {
    deleteJob
  };

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(JobList));
