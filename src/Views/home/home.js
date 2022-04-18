import React from 'react'
import './home.css'
import anuj from '../../Assets/anuj.png'
const Home = () => {
  return (
    <div className ='hmPage'>
        <div className ='hmText'>
            <p className = 'hmTitle'>DR. ANUJ JOSHI</p>
            <p className = 'hmPar'>A chemist, researcher and sales professional. 
            Passionate about using interdisciplinary methodologies to solve complex problems</p>
        </div>
        <div className ='hmPic'>
            <img className = 'aj' alt ='aj' src = {anuj}/>
        </div>
    </div>
  )
}

export default Home