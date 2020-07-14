import React from "react";

function Card({ link, title, description, time, img }) {
  return (
    <a href={link} className="category card mb-3">
      <img className="card-img-top" src={img.src} alt={img.alt} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated {time} ago</small>
      </div>
    </a>
  );
}

export default Card;
