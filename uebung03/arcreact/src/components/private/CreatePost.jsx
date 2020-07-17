import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { newPost } from "../../actions/postAction";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.newPost = this.newPost.bind(this);
    this.state = {
      title: "",
      content: "",
    };
  }
  newPost(event) {
    const user = localStorage.getItem("user");
    const post = {
      title:  this.state.title, 
      content: this.state.content
    };
    this.props.newPost(user, post, this.props.posts.item);
    event.preventDefault();
  }
  render() {
    return (
      <div id="newpost" className="modal fade">
        <div className="modal-dialog modal-login">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Create new Post</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <input
                    value={this.state.title}
                    onChange={(event) =>
                      this.setState({ title: event.target.value })
                    }
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="Title"
                    required="required"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    rows="10"
                    resize="none"
                    value={this.state.content}
                    onChange={(event) =>
                      this.setState({ content: event.target.value })
                    }
                    type="text"
                    className="form-control"
                    name="content"
                    placeholder="Content"
                    required="required"
                  />
                </div>
                <div className="form-group">
                  <a
                    id="lol"
                    type="submit"
                    href="/private"
                    onClick={this.newPost}
                    className="btn btn-primary btn-lg btn-block login-btn"
                    data-dismiss="modal"
                  >
                    Post
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreatePost.propTypes = {
  newPost: PropTypes.func.isRequired,
};

const mapStateToProps = ((state) => {
  return state
})

export default connect(mapStateToProps, { newPost })(CreatePost);
