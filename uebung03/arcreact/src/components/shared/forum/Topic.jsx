import React, { Fragment, Component } from "react";
import { daysSince, randomId, parseJwt } from "../../../utils/utilities";
import { deletePost } from "../../../actions/postAction";
import { connect } from "react-redux";

class Topic extends Component {
  constructor(props) {
    super(props);
    this.deletePost = this.deletePost.bind(this);
  }

  deletePost() {
    const thisPost = this.props.topic;
    const allPosts = this.props.posts.item;
    this.props.deletePost(thisPost, allPosts);
  }

  render() {
    const { title, author, Date: date, content } = this.props.topic;
    const daysAgo = daysSince(date);
    const id = randomId(15);
    const token = parseJwt(localStorage.getItem("jwt-token"));
    const isAdmin = token.user.admin;

    return (
      <Fragment>
        <div className="card-body py-3">
          <div className="row no-gutters align-items-center">
            <div className="col">
              <a
                className="font-weight-bold"
                data-toggle="collapse"
                data-target={"#" + id}
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                {title}
              </a>
              {isAdmin ? (
                <button
                  type="button"
                  className="btn btn-danger btn-sm delbutton"
                  onClick={() => this.deletePost()}
                >
                  Delete
                </button>
              ) : null}
              <div className="collapse" id={id}>
                <div className="card card-body nomargin">{content}</div>
              </div>
              <div className="text-muted small mt-1">
                Posted {daysAgo} &nbsp;·&nbsp;
                {author}
              </div>
            </div>
          </div>
        </div>
        <hr className="m-0" />
      </Fragment>
    );
  }
}

//mapStateToProps
export default connect((state) => state, { deletePost })(Topic);
