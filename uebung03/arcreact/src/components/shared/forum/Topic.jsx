import React, { Fragment } from "react";

function Topic({ subject, content, author, date, repliesAmount, flag}) {
  //TODO: format date, calculate difference to today
  const timeAgo = date;
  return (
    <Fragment>
      <div className="card-body py-3">
        <div className="row no-gutters align-items-center">
          <div className="col">
            <a href="#" className="text-big" data-abc="true">
              {subject}
            </a>
            <span className="badge badge-success align-text-bottom ml-1">
              {flag}
            </span>
            <div className="text-muted small mt-1">
              Started {timeAgo} days ago &nbsp;·&nbsp;
              <a href="#" className="text-muted" data-abc="true">
                {author}
              </a>
            </div>
          </div>
          <div className="d-none d-md-block col-4">
            <div className="row no-gutters align-items-center">
              <div className="col-4">{repliesAmount}</div>
              <div className="media col-8 align-items-center">
                <img
                  src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583336/AAA/4.jpg"
                  alt=""
                  className="d-block ui-w-30 rounded-circle"
                />
                <div className="media-body flex-truncate ml-2">
                  <div className="line-height-1 text-truncate">
                    {timeAgo} ago
                  </div>
                  <a
                    href="#"
                    className="text-muted small text-truncate"
                    data-abc="true"
                  >
                    by {author}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="m-0" />
    </Fragment>
  );
}

export default Topic;
