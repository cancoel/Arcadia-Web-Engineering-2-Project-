import React, { Fragment } from "react";
import { daysSince } from '../../../utils/dateFormatter'

function Topic({ topic }) {
  const { subject, title, author, Date: date, repliesAmount, flag } = topic;
  const daysAgo = daysSince(date)

  return (
    <Fragment>
      <div className="card-body py-3">
        <div className="row no-gutters align-items-center">
          <div className="col">
            <a href="javascript:void(0)" className="text-big" data-abc="true">
              { title }
            </a>
            <div className="text-muted small mt-1">
              Posted { daysAgo } &nbsp;·&nbsp;
              <a
                href="javascript:void(0)"
                className="text-muted"
                data-abc="true"
              >
                { author }
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="m-0" />
    </Fragment>
  );
}

export default Topic;
