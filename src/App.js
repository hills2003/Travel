import React,{useState,useEffect} from "react";
import "./index.css";
import cool from "./assets/cool.jpg";
import cute from "./assets/cute.jpg";
import pretty from "./assets/pretty.jpg";
import car from "./assets/car.jpg";

function App() {
  

  return (
    <>
        <main>
            <div className="center">
              <div className="dashboard">
                <div className="profile">
                    <img className="profile" src={pretty} alt="user profile"/>
                    <h4>Dev Hills</h4>
                    <p>Pro Gamer </p>
                </div>
                <div className='event'>
                        <ul>
                        <li><a href="#">Streams</a></li>
                        <li><a href="#">Games</a></li>
                        <li><a href="#">New</a></li>
                        <li><a href="#">Library</a></li>
                        </ul>
                </div>
                <div className="pro">
                          <p>join pro for free games</p>
                </div>
              </div>
              <div className="active-games">
                <div className="search">
                      <h3>Active games</h3>
                      <input type="text" className="progress" />
                </div>
                
                <div className="cards">
                <div className="main">
                       <img src={cute} className='game' alt="cute girl" />
                       <div>
                              <h3>Assasins Creed</h3>
                              <p>ps5</p>
                              <div className="progress0"  /> 
                        </div>
                        <div className="percentage">
                          <p>40%</p>
                        </div>    
                    </div>
                    <div className="main">
                       <img  src={car} alt="a car" className='game'/>
                       <div>
                              <h3>Asphalt</h3>
                              <p>ps5</p>
                              <div className="progress1"/> 
                        </div>
                        <div className="percentage">
                          <p>70%</p>
                        </div>    
                    </div>
                    <div className="main">
                       <img src={cool} alt="a guy on hoodie" className='game'/>
                       <div>
                              <h3>Sack boy</h3>
                              <p>ps5</p>
                              <div className="progress2" /> 

                        </div>
                        <div className="percentage">
                          <p>90%</p>
                        </div>  
                    </div>  
                </div>
              </div>   
            </div>
        </main>       
        <div className="first"></div>
        <div className="second"></div>
        <div className="third"></div>
        <div className="forth"></div>
        <div className="fifth"></div>
        <div className="sixth"></div>
    </>
  );
}

export default App;
