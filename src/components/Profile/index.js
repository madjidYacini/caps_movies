import React, { Component } from 'react';
import './bootstrap.min.css';
import './profile.css';


export default class Profile extends Component {
    render() {
        return(
          <div id="profile">
          <div className="bg"></div>
          <div className="body">
            <nav id="prof" role='navigation'>
              <div className="logo">
              <img src="http://demos.creative-tim.com/material-bootstrap-wizard/assets/img/new_logo.png" alt=""/>
              </div>
              <div className="navigation-name">Emmanuel Herrero</div>
              <div className="navigation">
                <a href="/">Home</a>
                <a href="/gallery">Gallery</a>
                <a href="">Logout</a>
              </div>
            </nav>  
            <section className="profile">
              <div className="social">
                
                <div className="following">
                  <div className="number">42</div>
                  <div className="label">Likes</div>
                </div> 
                <div className="followers">
                  <div className="number">23</div>
                  <div className="label">Favorites</div>
                </div>
              </div>
              <div className="shared-content">
              <div className="tabset">
            
              <input type="radio" name="tabset" id="tab1" aria-controls="marzen" defaultChecked/>
              <label htmlFor="tab1">Settings</label>
             
              <input type="radio" name="tabset" id="tab2" aria-controls="rauchbier"/>
              <label htmlFor="tab2">Manage Info</label>
             
              <input type="radio" name="tabset" id="tab3" aria-controls="dunkles"/>
              <label htmlFor="tab3">Manage Password</label>
              
              <div className="tab-panels">
                <section id="marzen" className="tab-panel">
                <h2>Personnal information</h2>
                <div class="form-group">
                <label htmlfor="email">Username:</label>
                 <p> Benjamin & madjid</p>
                </div>
                <div class="form-group">
                    <label forhtml="email">Fist name :</label>
                    <p> BBBBBB</p>
                </div>
                <div class="form-group">
                    <label htmlsfor="email">Age:</label>
                    <p> 27 years old</p>
                </div>
                <div class="form-group">
                    <label htmlfor="email">Date of Birth:</label>
                    <p> 27 november 2004</p>
                </div>
              </section>
                <section id="rauchbier" className="tab-panel">
                  <h2>Change your personnal informations</h2>
                 </section>
                <section id="dunkles" className="tab-panel">
                  <h2>Change Password</h2>
                  <form>
                  <div class="form-group">
                      <label htmlfor="email">Password:</label>
                      <input type="text" name="pass" className="form-control"/>
                  </div>
                  <div class="form-group">
                    <label htmlfor="email">check Password:</label>
                    <input type="text" name="pass-new" className="form-control"/>
                  </div>
                  <input type="submit" name="pass-new" className="form-control btn btn-primary" value="submit"/>
                  </form>
                 </section>
              </div>
              
            </div>
            
              </div>
              </section>
            </div>
            </div>
        ); 
    };   
}

