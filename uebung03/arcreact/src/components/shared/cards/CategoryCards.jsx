import React, { Component } from "react";
import Card from "./Card";
import VideoGames from "../../../arcfrontend/layout/img/video-games.png";
import OffTopic from "../../../arcfrontend/layout/img/offtopic.png";
import Announcements from "../../../arcfrontend/layout/img/announcements.png";
import "../../../stylesheets/Card.css";

class CategoryCards extends Component {
  render() {
    return (
      <div className="card-deck mx-auto">
        <Card
          link="/gaming"
          img={{ src: VideoGames, alt: "Game Controller" }}
          title="Gaming Discussion"
          description="Feel free to discuss everything related to Games!"
          time="3 mins"
        />

        <Card
          link="off-topic"
          img={{ src: OffTopic, alt: "Chat Bubbels" }}
          title="Off-Topic area"
          description="Hangout area for everything else. Just you, the World and anything between."
          time="3 mins"
        />

        <Card
          link="announcements"
          img={{ src: Announcements, alt: "Megaphone" }}
          title="Announcements"
          description="Check here for announcements regarding Arcadia. Feedback is welcome!"
          time="3 mins"
        />
      </div>
    );
  }
}

export default CategoryCards;
