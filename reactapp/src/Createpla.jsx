import React, { useRef } from 'react'
import {Link} from "react-router-dom"
import './Createpla.css'
import { connect } from 'react-redux';
// import { setPlaylistName } from './Action/playlistAction.js';
import {useDispatch,useSelector} from 'react-redux';
function Createpla() {
  const counter=useSelector((state)=>state.counter);
  const increment =()=>{
    dispatch({type:"INC"})
  }
  const decrement =()=>{
    dispatch({type:"DEC"})
  }
  const dispatch=useDispatch();
  return (
    <div className='createbody'>
        <div className='head13'>
        <nav className='nav1'>
      <ul>
      <svg id="logo-16" width="109" height="43" viewBox="0 0 109 43" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M64.9315 11.4284C62.1883 8.6852 58.9316 6.5091 55.3475 5.0245C51.7633 3.5399 47.9219 2.7758 44.0424 2.7758C40.1629 2.7758 36.3215 3.5399 32.7373 5.0245C29.1532 6.5091 25.8965 8.6852 23.1533 11.4284L44.0424 32.3174L64.9315 11.4284Z" class="ccompli1" fill="#FFD200"></path> <path d="M44.0686 32.3475C46.8118 35.0907 50.0684 37.2667 53.6526 38.7513C57.2367 40.2359 61.0782 41 64.9577 41C68.837 41 72.679 40.2359 76.263 38.7513C79.847 37.2667 83.104 35.0907 85.847 32.3475L64.9577 11.4584L44.0686 32.3475Z" class="ccompli2" fill="#06E07F"></path> <path d="M44.017 32.3429C41.2738 35.0861 38.0171 37.2621 34.433 38.7467C30.8488 40.2313 27.0074 40.9954 23.1279 40.9954C19.2484 40.9954 15.407 40.2313 11.8228 38.7467C8.2387 37.2621 4.982 35.0861 2.2388 32.3429L23.1279 11.4538L44.017 32.3429Z" class="ccustom" fill="#E3073C"></path> <path d="M64.9831 11.433C67.726 8.6898 70.983 6.5138 74.567 5.0292C78.151 3.5446 81.993 2.7805 85.872 2.7805C89.752 2.7805 93.593 3.5446 97.177 5.0292C100.761 6.5138 104.018 8.6898 106.761 11.433L85.872 32.3221L64.9831 11.433Z" class="ccustom" fill="#1F84EF"></path> </svg>
          <li className='home'><a href="/Intro1">
          <button className='button-85'>Home</button></a></li>
        <li className='add'><button className='button-85'>Add</button></li>
    
        <li className='create'><a href="Createpla"><button className='button-85'>create</button></a></li>
        <li className='del'><a href="#"><button onClick={decrement} className='button-85'>Delete</button></a></li>
      </ul>
   </nav>
   </div>
        <div className='newplay'>
      <h1><center>Create A Playlist For Your Own</center></h1>
      <h3><center>each playlist for each mood</center></h3>
      </div>
       <div className="sidebar1">
        {/* Sidebar content */}
        <ul>
            <li><Link to ="Myplaylist">My Playlists{counter} </Link></li>
            <br></br>
            <li><Link to ="Myplaylist">Share</Link></li>
            <br></br>
            <li><Link to ="Myplaylist">Merge</Link></li>
            <br></br>
            <li><Link to ="">Logout</Link></li>
            <br></br>
            <li><a href='https://docs.google.com/forms/d/e/1FAIpQLScE6v46M-gjyd5Fsnrrwie4tro7MDZK8VtYDWWrKy3tt5qftg/viewform?usp=sf_link'>Feedback</a></li>
        </ul>
      </div>
      <div className='searchbar'>
          <div className='wsearchbar'>
            <form>
                Name:
                <input type='text'></input><br></br>
                <br></br>
                <br></br>
                <button type='submit' onClick={increment} className='button-86'>CREATE</button>
                <h2>playlists</h2>
            </form>
          </div>
      </div>
    </div>

  )
}

export default Createpla

