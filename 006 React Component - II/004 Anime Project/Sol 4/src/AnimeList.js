import { Component } from "react";
import AnimeCard from "./AnimeCard";
import App from './App';

// Complete the AnimeList Component
class AnimeList extends Component {
  render() {
    const data = this.props.anime;
    return <div className="anime-list">
      {/* Map the anime list recieved through props and pass the details to the Animecard component*/}
      {data.map((val , index) =>{
        return (
          <AnimeCard key={index}
          img = {val.image}
          name = {val.name}/> 
        )
      })}
    </div>;
  }
}

export default AnimeList;
