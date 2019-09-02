import React, { Component } from "react";
import './scss/components/__artistPage.scss';
import Image from "./images/sidebar_image.png";
import Itunes from "./images/itunes.svg";
// import User from "./components/mainContent/_adminUserActivity";
class ArtistPage extends Component {
    render() {
     
      return (
          <div className="artistpage_wrapper">
          <div className="top_page">
          <img className="top_image" src={Image} alt="top"/>
          <p className="Artist_name">Artist Name<br/><span>artist@email.com</span></p>
          <button className="view">View on Music Monitor</button>
          <div className="all_views">
          <div className="streams">
          <center><p className="top_number">44k</p>
          <p className="top_streams">Streams</p>
          <p className="duration">Last Week </p></center>
          

          </div>
          <div className="fans">
          <center><p className="top_number">10</p>
          <p  className="top_streams">NewFans</p>
          <p className="duration">Last Week</p></center>
          
          </div>
         <div className="apple">
         <center>    <p><span class="dot" ><img src={Itunes}/></span></p>
          <p className="streaming_company">Apple Music</p>
          <p className="performance">Best Performing Platform</p></center>
     
       </div>
       <div className="most_streamed">
           <center><img className="image" src={Image} alt="story"/>
          <p className="performance">Most Streamed</p></center>
          
       </div>
       </div>
       <p className="artist_activity">Artist Activity</p>
           <button className="view_artist">View Artist's Activity </button>
          </div>
           <div className="table_below">
        <p className="description">Description</p><p className="date">Date &Time</p><p className="region">Region</p><p className="cps">CPS</p>
      
        

          <div className="header">
         
          </div>
          
          <div className="details2">
          <p className="info2">Artist Name <span>uploaded a song</span></p> <p className="dates2"> September 18,2018 by 2:10am</p> <p className="location2"> Adelaide, Australia</p><p className="space2">Here</p>  
          </div>
          <div className="details3">
          <p className="info3">Artist Name <span>uploaded a song</span></p> <p className="dates3"> September 18,2018 by 2:10am</p> <p className="location3"> Adelaide, Australia</p><p className="space3">Here</p>  
          </div>
          <div className="details4">
          <p className="info4">Artist Name <span>uploaded a song</span></p> <p className="dates4"> September 18,2018 by 2:10am</p> <p className="location4"> Adelaide, Australia</p><p className="space4">Here</p>  
          </div>
          
          
        
          
         

          </div>
          </div>
      )
    }
};
export default ArtistPage;