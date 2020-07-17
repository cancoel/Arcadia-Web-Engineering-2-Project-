import React, { Fragment } from "react";
import { daysSince, randomId } from "../../../utils/dateFormatter";


function Topic({ topic }) {
  const { title, author, Date: date, content } = topic;
  const daysAgo = daysSince(date);
  const id = randomId(15);
  console.log(id);

  return (
    <Fragment>
      <div className="card-body py-3">
        <div className="row no-gutters align-items-center">
          <div className="col">
            <a
              data-toggle="collapse"
              data-target={"#"+id}
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              {title}
            </a>
            <div className="collapse" id={id}>
              <div className="card card-body">{content}</div>
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

export default Topic;
