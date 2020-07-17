import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPosts } from "../../../actions/postAction";

import "../../../stylesheets/Forum.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Topic from "./Topic";
import CreatePost from "../../private/CreatePost";

class Forum extends Component {
  componentWillMount() {
    this.props.getPosts();
  }

  render() {
    const posts = this.props.posts.item; // posts from redux store
    const hasFetchedPosts = posts !== null; // gibt es schon posts im store?
    let topics;
    if (hasFetchedPosts) {
      topics = posts.map((topic, index) => <Topic key={index} topic={topic} />);
    }

    return (
      <Fragment>
        <CreatePost />
        <div className="container-fluid mt-3">
          <div className="d-flex flex-wrap justify-content-between">
            <div className="col-12 col-md-3 p-0 mb-1">
              {this.props.users.item || localStorage.getItem("user") ? (
                <button
                  type="button"
                  className="btn btn-shadow btn-wide text-light"
                  href="#newpost"
                  data-toggle="modal"
                >
                  <span className="btn-icon-wrapper pr-2 opacity-7">
                    <i className="fa fa-plus fa-w-20"></i>
                  </span>
                  New post
                </button>
              ) : null}
            </div>
            <div className="col-12 col-md-3 p-0 mt-1" hidden>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
              />
            </div>
          </div>
          <div className="card mb-3 mt-3 mx-0">
            <div className="card-header pl-0 pr-0">
              <div className="row no-gutters w-100 align-items-center">
                <div className="col ml-3 font-weight-bold">Topics</div>
              </div>
            </div>
            {
              topics ?? (
                <p className="font-weight-light marginleft">
                  No posts yet.
                </p>
              ) // topics ? topics : loading
            }
          </div>
        </div>
      </Fragment>
    );
  }
}

Forum.propTypes = {
  getPosts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { getPosts })(Forum);
