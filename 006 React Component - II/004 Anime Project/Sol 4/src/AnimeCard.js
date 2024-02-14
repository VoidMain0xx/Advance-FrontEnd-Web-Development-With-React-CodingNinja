import { Component } from "react";
import App from "./App";

// Complete the AnimeCard Component
class AnimeCard extends Component {
  render() {
    


    return <div className="anime-card">
      <img src={this.props.img} alt={this.props.name} />
        <p>{this.props.name}</p>
    </div>;
  }
}

export default AnimeCard;
