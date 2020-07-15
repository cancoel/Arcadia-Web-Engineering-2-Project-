import React from "react";

import "../../../stylesheets/Forum.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Topic from "./Topic";

const topics = [
  {
    subject: "How can i change the username?",
    content: "wut",
    author: "Neon Mandela",
    date: "2 hours",
    repliesAmount: 22,
    flag: "Hot",
  }
];

function Forum({ type }) {
  const posts = topics.map((topic, index) => (
    <Topic
      key={index}
      subject={topic.subject}
      content={topic.content}
      author={topic.author}
      date={topic.date}
      repliesAmount={topic.repliesAmount}
      flags={topic.flag}
    />
  ));

  return (
    <div className="container-fluid mt-3">
    <div className="d-flex flex-wrap justify-content-between">
      <div className="col-12 col-md-3 p-0 mb-1">
        <button type="button" className="btn btn-shadow btn-wide text-light">
          <span className="btn-icon-wrapper pr-2 opacity-7">
            <i className="fa fa-plus fa-w-20"></i>
          </span>
          New thread
        </button>
      </div>
      <div className="col-12 col-md-3 p-0 mt-1">
        <input type="text" className="form-control" placeholder="Search..." />
      </div>
    </div>
    <div className="card mb-3 mt-3 mx-0">
      <div className="card-header pl-0 pr-0">
        <div className="row no-gutters w-100 align-items-center">
          <div className="col ml-3">Topics</div>
          <div className="col-4 text-muted">
            <div className="row no-gutters align-items-center">
              <div className="col-4 d-none d-md-block">Replies</div>
              <div className="col-8 d-none d-md-block">Last update</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body py-3">
        <div className="row no-gutters align-items-center">
          <div className="col">
            <a href="javascript:void(0)" className="text-big" data-abc="true"
              >How can i change the username?</a
            >
            <div className="text-muted small mt-1">
              Started 25 days ago &nbsp;·&nbsp;
              <a href="javascript:void(0)" className="text-muted" data-abc="true"
                >Neon Mandela</a
              >
            </div>
          </div>
          <div className="d-none d-md-block col-4">
            <div className="row no-gutters align-items-center">
              <div className="col-4">12</div>
              <div className="media col-8 align-items-center">
                <img
                  src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583246/AAA/2.jpg"
                  alt=""
                  className="d-block ui-w-30 rounded-circle"
                />
                <div className="media-body flex-truncate ml-2">
                  <div className="line-height-1 text-truncate">1 day ago</div>
                  <a
                    href="javascript:void(0)"
                    className="text-muted small text-truncate"
                    data-abc="true"
                    >by Tim cook</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="m-0" />
      <div className="card-body py-3">
        <div className="row no-gutters align-items-center">
          <div className="col">
            <a href="javascript:void(0)" className="text-big" data-abc="true"
              >How to change the theme to dark mode?</a
            >
            <span className="badge badge-success align-text-bottom ml-1"
              >Solved</span
            >
            <div className="text-muted small mt-1">
              Started 5 days ago &nbsp;·&nbsp;
              <a href="javascript:void(0)" className="text-muted" data-abc="true"
                >Allize Rome</a
              >
            </div>
          </div>
          <div className="d-none d-md-block col-4">
            <div className="row no-gutters align-items-center">
              <div className="col-4">43</div>
              <div className="media col-8 align-items-center">
                <img
                  src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583319/AAA/3.jpg"
                  alt=""
                  className="d-block ui-w-30 rounded-circle"
                />
                <div className="media-body flex-truncate ml-2">
                  <div className="line-height-1 text-truncate">1 day ago</div>
                  <a
                    href="javascript:void(0)"
                    className="text-muted small text-truncate"
                    data-abc="true"
                    >by Steve smith</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="m-0" />
      <div className="card-body py-3">
        <div className="row no-gutters align-items-center">
          <div className="col">
            <a href="javascript:void(0)" className="text-big" data-abc="true"
              >Is it possible to get the refund of the product i purhcased
              today?</a
            >
            <span className="badge badge-default align-text-bottom ml-1"
              >Locked</span
            >
            <div className="text-muted small mt-1">
              Started 21 days ago &nbsp;·&nbsp;
              <a href="javascript:void(0)" className="text-muted" data-abc="true"
                >Kane William</a
              >
            </div>
          </div>
          <div className="d-none d-md-block col-4">
            <div className="row no-gutters align-items-center">
              <div className="col-4">42</div>
              <div className="media col-8 align-items-center">
                <img
                  src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583336/AAA/4.jpg"
                  alt=""
                  className="d-block ui-w-30 rounded-circle"
                />
                <div className="media-body flex-truncate ml-2">
                  <div className="line-height-1 text-truncate">2 day ago</div>
                  <a
                    href="javascript:void(0)"
                    className="text-muted small text-truncate"
                    data-abc="true"
                    >by Brethwett sonm</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="m-0" />
      <div className="card-body py-3">
        <div className="row no-gutters align-items-center">
          <div className="col">
            <a href="javascript:void(0)" className="text-big" data-abc="true"
              >Do you have android application for this tool?</a
            >
            <div className="text-muted small mt-1">
              Started 56 days ago &nbsp;·&nbsp;
              <a href="javascript:void(0)" className="text-muted" data-abc="true"
                >Glen Maxwell</a
              >
            </div>
          </div>
          <div className="d-none d-md-block col-4">
            <div className="row no-gutters align-items-center">
              <div className="col-4">632</div>
              <div className="media col-8 align-items-center">
                <img
                  src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583246/AAA/2.jpg"
                  alt=""
                  className="d-block ui-w-30 rounded-circle"
                />
                <div className="media-body flex-truncate ml-2">
                  <div className="line-height-1 text-truncate">11 day ago</div>
                  <a
                    href="javascript:void(0)"
                    className="text-muted small text-truncate"
                    data-abc="true"
                    >by Neil patels</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="m-0" />
      <div className="card-body py-3">
        <div className="row no-gutters align-items-center">
          <div className="col">
            <a href="javascript:void(0)" className="text-big" data-abc="true"
              >How can i transfer my fund to my friend</a
            >
            <span className="badge badge-secondary align-text-bottom ml-1"
              >Closed</span
            >
            <div className="text-muted small mt-1">
              Started 25 days ago &nbsp;·&nbsp;
              <a href="javascript:void(0)" className="text-muted" data-abc="true"
                >Marry Tom</a
              >
            </div>
          </div>
          <div className="d-none d-md-block col-4">
            <div className="row no-gutters align-items-center">
              <div className="col-4">53</div>
              <div className="media col-8 align-items-center">
                <img
                  src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583336/AAA/4.jpg"
                  alt=""
                  className="d-block ui-w-30 rounded-circle"
                />
                <div className="media-body flex-truncate ml-2">
                  <div className="line-height-1 text-truncate">1 day ago</div>
                  <a
                    href="javascript:void(0)"
                    className="text-muted small text-truncate"
                    data-abc="true"
                    >by Tibok tom</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="m-0" />
      <div className="card-body py-3">
        <div className="row no-gutters align-items-center">
          <div className="col">
            <a href="javascript:void(0)" className="text-big" data-abc="true"
              >How can i delete my account?</a
            >
            <span className="badge badge-danger align-text-bottom ml-1"
              >Hot!</span
            >
            <div className="text-muted small mt-1">
              Started 25 days ago &nbsp;·&nbsp;
              <a href="javascript:void(0)" className="text-muted" data-abc="true"
                >Bob bulmer</a
              >
            </div>
          </div>
          <div className="d-none d-md-block col-4">
            <div className="row no-gutters align-items-center">
              <div className="col-4">12</div>
              <div className="media col-8 align-items-center">
                <img
                  src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583246/AAA/2.jpg"
                  alt=""
                  className="d-block ui-w-30 rounded-circle"
                />
                <div className="media-body flex-truncate ml-2">
                  <div className="line-height-1 text-truncate">1 day ago</div>
                  <a
                    href="javascript:void(0)"
                    className="text-muted small text-truncate"
                    data-abc="true"
                    >by Ross taylor</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
  );
  
}



export default Forum;
